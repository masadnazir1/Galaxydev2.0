"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from "react";

export interface OnboardingData {
  fullName: string;
  email: string;
  password: string;
  company?: string;
  userId?: string;
}

export interface Instance {
  id: string;
  name: string;
  subdomain: string;
  status: "running" | "stopped" | "trial";
  uptime: number;
  cpu: number;
  ram: number;
  createdAt: string;
}

export interface Domain {
  id: string;
  domain: string;
  status: "verified" | "pending" | "failed";
  isDefault: boolean;
  verifiedAt?: string;
}

export interface Activity {
  id: string;
  action: string;
  timestamp: string;
  type: "deploy" | "ssl" | "trial" | "domain" | "billing" | "restart" | "stop";
}

interface N8nContextType {
  onboarding: OnboardingData | null;
  setOnboarding: (data: OnboardingData) => void;
  instances: Instance[];
  addInstance: (instance: Instance) => void;
  updateInstanceStatus: (id: string, status: Instance["status"]) => void;
  removeInstance: (id: string) => void;
  domains: Domain[];
  addDomain: (domain: Domain) => void;
  updateDomainStatus: (id: string, status: Domain["status"]) => void;
  removeDomain: (id: string) => void;
  activities: Activity[];
  addActivity: (activity: Activity) => void;
}

const N8nContext = createContext<N8nContextType | null>(null);

const initialInstances: Instance[] = [
  {
    id: "inst-1",
    name: "My n8n Workspace",
    subdomain: "my-workspace",
    status: "running",
    uptime: 99.97,
    cpu: 23,
    ram: 42,
    createdAt: new Date(Date.now() - 7 * 86400000).toISOString(),
  },
];

const initialDomains: Domain[] = [
  {
    id: "dom-default",
    domain: "my-workspace.n8n.galaxydev.pk",
    status: "verified",
    isDefault: true,
    verifiedAt: new Date(Date.now() - 7 * 86400000).toISOString(),
  },
];

const initialActivities: Activity[] = [
  {
    id: "act-3",
    action: "Trial started",
    timestamp: new Date(Date.now() - 7 * 86400000).toISOString(),
    type: "trial",
  },
  {
    id: "act-2",
    action: "SSL certificate issued",
    timestamp: new Date(Date.now() - 7 * 86400000 + 60000).toISOString(),
    type: "ssl",
  },
  {
    id: "act-1",
    action: "Instance deployed",
    timestamp: new Date(Date.now() - 7 * 86400000 + 120000).toISOString(),
    type: "deploy",
  },
];

export function N8nProvider({ children }: { children: ReactNode }) {
  const [onboarding, setOnboarding] = useState<OnboardingData | null>(null);
  const [instances, setInstances] = useState<Instance[]>(initialInstances);
  const [domains, setDomains] = useState<Domain[]>(initialDomains);
  const [activities, setActivities] = useState<Activity[]>(initialActivities);

  const addInstance = useCallback((instance: Instance) => {
    setInstances((prev) => [instance, ...prev]);
  }, []);

  const updateInstanceStatus = useCallback(
    (id: string, status: Instance["status"]) => {
      setInstances((prev) =>
        prev.map((i) => (i.id === id ? { ...i, status } : i))
      );
    },
    []
  );

  const removeInstance = useCallback((id: string) => {
    setInstances((prev) => prev.filter((i) => i.id !== id));
  }, []);

  const addDomain = useCallback((domain: Domain) => {
    setDomains((prev) => [domain, ...prev]);
  }, []);

  const updateDomainStatus = useCallback(
    (id: string, status: Domain["status"]) => {
      setDomains((prev) =>
        prev.map((d) =>
          d.id === id
            ? { ...d, status, verifiedAt: status === "verified" ? new Date().toISOString() : d.verifiedAt }
            : d
        )
      );
    },
    []
  );

  const removeDomain = useCallback((id: string) => {
    setDomains((prev) => prev.filter((d) => d.id !== id));
  }, []);

  const addActivity = useCallback((activity: Activity) => {
    setActivities((prev) => [activity, ...prev]);
  }, []);

  return (
    <N8nContext.Provider
      value={{
        onboarding,
        setOnboarding,
        instances,
        addInstance,
        updateInstanceStatus,
        removeInstance,
        domains,
        addDomain,
        updateDomainStatus,
        removeDomain,
        activities,
        addActivity,
      }}
    >
      {children}
    </N8nContext.Provider>
  );
}

export function useN8n() {
  const ctx = useContext(N8nContext);
  if (!ctx) throw new Error("useN8n must be used within N8nProvider");
  return ctx;
}
