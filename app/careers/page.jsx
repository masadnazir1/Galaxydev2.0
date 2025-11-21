"use client";

import {
  FaArrowRight,
  FaCodeBranch,
  FaGithub,
  FaGraduationCap,
  FaHeartbeat,
  FaLaptopHouse,
  FaRocket,
  FaStar,
} from "react-icons/fa";
import Button from "../components/UI/Button/Button";
import PageHead from "../components/UI/PageHead/PageHead";
import styles from "./Careers.module.css";

export default function Careers() {
  const perks = [
    {
      icon: <FaLaptopHouse />,
      title: "Remote First",
      desc: "Work from anywhere. We focus on output, not hours.",
    },
    {
      icon: <FaGraduationCap />,
      title: "Learning Budget",
      desc: "Annual stipend for courses, books, and conferences.",
    },
    {
      icon: <FaHeartbeat />,
      title: "Health & Wellness",
      desc: "Comprehensive medical coverage for you and your family.",
    },
    {
      icon: <FaRocket />,
      title: "Modern Stack",
      desc: "We don't maintain legacy code. Work with the latest tech.",
    },
  ];

  const openSourceProjects = [
    {
      name: "Galaxy-UI-Kit",
      desc: "A lightweight React component library optimized for speed.",
      stars: 124,
      forks: 45,
      lang: "TypeScript",
    },
    {
      name: "NextJS-SEO-Boilerplate",
      desc: "Production ready starter kit with sitemap and schema generation.",
      stars: 89,
      forks: 22,
      lang: "JavaScript",
    },
  ];

  const jobs = [
    {
      title: "Senior Full Stack Engineer",
      type: "Full-time",
      location: "Remote / Karachi",
      dept: "Engineering",
      tags: ["React", "Node.js", "AWS"],
    },
    {
      title: "UI/UX Designer",
      type: "Contract",
      location: "Remote",
      dept: "Design",
      tags: ["Figma", "Prototyping"],
    },
    {
      title: "DevOps Specialist",
      type: "Full-time",
      location: "Islamabad",
      dept: "Operations",
      tags: ["Docker", "K8s", "CI/CD"],
    },
  ];

  return (
    <>
      <PageHead
        title="Join Galaxydev"
        subtitle="Build software that matters. Contribute to open source. Grow your career."
        align="center"
        height="45vh"
        overlay={true}
        overlayColor="rgba(15, 23, 42, 0.7)"
        gradientFrom="transparent"
        gradientTo="var(--background-light)"
        bgImage="/assets/images/careers-bg.webp"
      />

      <main className={styles.container}>
        {/* Intro Section */}
        <section className={styles.intro}>
          <h2>Why Build With Us?</h2>
          <p>
            We are a team of dreamers, hackers, and doers. We believe that great
            software is built by happy people. Join a culture that values code
            quality, open communication, and work-life balance.
          </p>
        </section>

        {/* Perks Grid */}
        <section className={styles.perksSection}>
          <div className={styles.grid}>
            {perks.map((perk, idx) => (
              <div key={idx} className={styles.perkCard}>
                <div className={styles.iconWrapper}>{perk.icon}</div>
                <h3>{perk.title}</h3>
                <p>{perk.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Open Source Section */}
        <section className={styles.osSection}>
          <div className={styles.osHeader}>
            <div className={styles.osTitle}>
              <FaGithub className={styles.githubIcon} />
              <h2>
                We <span className={styles.heart}>♥</span> Open Source
              </h2>
            </div>
            <p>
              We don't just use open source software; we contribute back. Check
              out some of our community projects.
            </p>
          </div>

          <div className={styles.repoGrid}>
            {openSourceProjects.map((repo, idx) => (
              <div key={idx} className={styles.repoCard}>
                <div className={styles.repoTop}>
                  <h3>{repo.name}</h3>
                  <span className={styles.langTag}>{repo.lang}</span>
                </div>
                <p>{repo.desc}</p>
                <div className={styles.repoStats}>
                  <span>
                    <FaStar /> {repo.stars}
                  </span>
                  <span>
                    <FaCodeBranch /> {repo.forks}
                  </span>
                  <a href="#" className={styles.repoLink}>
                    View Code <FaArrowRight />
                  </a>
                </div>
              </div>
            ))}

            {/* Call to Action for Contribution */}
            <div className={`${styles.repoCard} ${styles.contributeCard}`}>
              <h3>Have an idea?</h3>
              <p>We sponsor open source tools. Pitch us your idea.</p>
              <Button>Pitch Idea</Button>
            </div>
          </div>
        </section>

        {/* Job Listings */}
        <section className={styles.jobsSection} id="openings">
          <h2 className={styles.sectionTitle}>Open Positions</h2>
          <div className={styles.jobList}>
            {jobs.map((job, idx) => (
              <div key={idx} className={styles.jobCard}>
                <div className={styles.jobInfo}>
                  <span className={styles.dept}>{job.dept}</span>
                  <h3>{job.title}</h3>
                  <div className={styles.jobMeta}>
                    <span>{job.type}</span>
                    <span className={styles.dot}>•</span>
                    <span>{job.location}</span>
                  </div>
                  <div className={styles.techStack}>
                    {job.tags.map((tag, i) => (
                      <span key={i} className={styles.techTag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className={styles.jobAction}>
                  <Button>Apply Now</Button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* General Application CTA */}
        <section className={styles.cta}>
          <h2>Don't see a fit?</h2>
          <p>We are always looking for talent. Send us your CV anyway.</p>
          <a href="mailto:careers@galaxydev.pk" className={styles.emailLink}>
            careers@galaxydev.pk
          </a>
        </section>
      </main>
    </>
  );
}
