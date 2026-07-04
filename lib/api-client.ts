"use client";

const API_BASE = "https://n8nhostingapi-production.galaxydev.pk";

const AUTH_PATHS = [
  "/auth/login",
  "/auth/signup",
  "/auth/verify-otp",
  "/auth/refresh",
  "/auth/logout",
];

let isRefreshing = false;
let refreshPromise: Promise<boolean> | null = null;

function getCookie(name: string): string | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`));
  return match ? decodeURIComponent(match[2]) : null;
}

function setCookie(name: string, value: string) {
  document.cookie = `${name}=${value}; path=/; max-age=86400; SameSite=None; Secure`;
}

function clearCookie(name: string) {
  document.cookie = `${name}=; path=/; max-age=0`;
}

function authHeaders(): Record<string, string> {
  const token = getCookie("accessToken");
  if (!token) return {};
  return { Authorization: `Bearer ${token}` };
}

async function attemptRefresh(): Promise<boolean> {
  if (isRefreshing && refreshPromise) {
    return refreshPromise;
  }

  isRefreshing = true;
  refreshPromise = (async () => {
    try {
      const res = await fetch(`${API_BASE}/auth/refresh`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...authHeaders(),
        },
      });
      if (!res.ok) {
        clearCookie("accessToken");
        return false;
      }
      const body = await res.json();
      if (body.accessToken) {
        setCookie("accessToken", body.accessToken);
        return true;
      }
      clearCookie("accessToken");
      return false;
    } catch {
      clearCookie("accessToken");
      return false;
    } finally {
      isRefreshing = false;
      refreshPromise = null;
    }
  })();

  return refreshPromise;
}

function isAuthPath(path: string): boolean {
  return AUTH_PATHS.some((p) => path.startsWith(p));
}

export async function apiFetch(
  url: string,
  options: RequestInit = {}
): Promise<Response> {
  const path = url.startsWith(API_BASE) ? url.slice(API_BASE.length) : url;

  const mergedHeaders = new Headers(options.headers);
  const bearer = authHeaders();
  for (const [k, v] of Object.entries(bearer)) {
    if (!mergedHeaders.has(k)) {
      mergedHeaders.set(k, v);
    }
  }

  let res = await fetch(url, {
    ...options,
    headers: mergedHeaders,
  });

  if (res.status === 401 && !isAuthPath(path)) {
    const refreshed = await attemptRefresh();
    if (refreshed) {
      const retryHeaders = new Headers(options.headers);
      const retryBearer = authHeaders();
      for (const [k, v] of Object.entries(retryBearer)) {
        if (!retryHeaders.has(k)) {
          retryHeaders.set(k, v);
        }
      }
      res = await fetch(url, {
        ...options,
        headers: retryHeaders,
      });
    } else if (typeof window !== "undefined") {
      window.location.href = "/n8n-hosting/login";
    }
  }

  return res;
}

export { API_BASE };
