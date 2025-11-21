"use client";

import { useMemo, useState } from "react";
import { FaChevronDown, FaQuestionCircle, FaSearch } from "react-icons/fa";
import Button from "../components/UI/Button/Button";
import PageHead from "../components/UI/PageHead/PageHead";
import styles from "./FAQ.module.css";

export default function FAQ() {
  const [searchTerm, setSearchTerm] = useState("");
  const [openIndex, setOpenIndex] = useState(null); // Tracks which accordion is open

  const faqData = [
    {
      category: "General & Pricing",
      questions: [
        {
          q: "How much does it cost to build a custom software or mobile app?",
          a: "There is no one-size-fits-all answer, as costs depend on complexity, features, and platforms. A simple MVP might start from $1,500, while enterprise-grade solutions can range from $10,000 to $50,000+. We offer both fixed-price contracts (for well-defined scopes) and hourly models (Time & Material) for evolving projects. Contact us for a free, detailed estimation.",
        },
        {
          q: "How long does the development process take?",
          a: "A standard timeline varies by project scope. A basic website or prototype takes 2-4 weeks. A fully functional mobile app usually takes 3-6 months. Enterprise software with complex backend logic may take 6+ months. We provide a detailed Gantt chart and timeline during the discovery phase.",
        },
        {
          q: "Do you sign a Non-Disclosure Agreement (NDA)?",
          a: "Absolutely. We respect your intellectual property. We are happy to sign an NDA before you share any sensitive information or code with us to ensure your ideas remain 100% confidential.",
        },
      ],
    },
    {
      category: "Development Process",
      questions: [
        {
          q: "What methodology do you use? (Agile/Waterfall)",
          a: "We primarily follow the **Agile Scrum** methodology. This allows us to deliver work in 2-week sprints, giving you frequent updates and the flexibility to adjust requirements as the market changes. For strict regulatory projects, we can adapt to Waterfall if required.",
        },
        {
          q: "Will I own the source code after the project is finished?",
          a: "Yes. Once the final payment is settled, you are the sole owner of the source code, design assets, and database schemas. We do not hold your code hostage. We act as your technology partner, not a vendor locking you in.",
        },
        {
          q: "How can I track the progress of my project?",
          a: "Transparency is one of our core values. We use tools like Trello, Jira, or ClickUp to track tasks. You will be invited to these boards and will receive weekly status reports and demo meetings to review the progress.",
        },
      ],
    },
    {
      category: "Technical & Support",
      questions: [
        {
          q: "What technologies does Galaxydev specialize in?",
          a: "We are a full-stack shop. For **Web**, we use React, Next.js, Node.js, and Laravel. For **Mobile**, we specialize in React Native and Flutter for cross-platform efficiency, as well as Swift (iOS) and Kotlin (Android). For **Cloud**, we are certified in AWS and Google Cloud infrastructure.",
        },
        {
          q: "Do you provide support and maintenance after launch?",
          a: "Yes, software needs care. We offer flexible maintenance packages that include bug fixing, server monitoring, security updates, and OS version upgrades. We generally provide a 30-day free bug-fix period after deployment.",
        },
        {
          q: "Can you take over an existing project started by another vendor?",
          a: "Yes, provided the code is accessible. We start with a 'Code Audit' to assess the quality and security of the existing codebase. Based on the audit, we will recommend whether to refactor, rewrite, or continue building on top of the current architecture.",
        },
      ],
    },
  ];

  // Filter Logic for Search
  const filteredFAQs = useMemo(() => {
    if (!searchTerm) return faqData;

    return faqData
      .map((group) => ({
        ...group,
        questions: group.questions.filter(
          (item) =>
            item.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.a.toLowerCase().includes(searchTerm.toLowerCase())
        ),
      }))
      .filter((group) => group.questions.length > 0);
  }, [searchTerm]);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Generate JSON-LD Schema for SEO
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData
      .flatMap((group) => group.questions)
      .map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.a,
        },
      })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <PageHead
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about our services, pricing, and process."
        align="center"
        height="35vh"
        overlay={true}
        overlayColor="rgba(15, 23, 42, 0.8)"
        gradientFrom="transparent"
        gradientTo="var(--background-light)"
        bgImage="/assets/images/faq-bg.webp"
      />

      <main className={styles.faqPage}>
        {/* Search Bar */}
        <div className={styles.searchContainer}>
          <div className={styles.inputWrapper}>
            <FaSearch className={styles.searchIcon} />
            <input
              type="text"
              placeholder="Search specific questions (e.g., 'cost', 'support')..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* FAQ List */}
        <div className={styles.faqWrapper}>
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((group, groupIndex) => (
              <div key={groupIndex} className={styles.groupSection}>
                <h2 className={styles.groupTitle}>{group.category}</h2>

                <div className={styles.questionsList}>
                  {group.questions.map((item, i) => {
                    // Create unique ID for accordion logic across groups
                    const uniqueIndex = `${groupIndex}-${i}`;
                    const isOpen = openIndex === uniqueIndex;

                    return (
                      <div
                        key={i}
                        className={`${styles.accordionItem} ${
                          isOpen ? styles.active : ""
                        }`}
                        onClick={() => toggleAccordion(uniqueIndex)}
                      >
                        <div className={styles.questionHeader}>
                          <h3>{item.q}</h3>
                          <FaChevronDown className={styles.chevron} />
                        </div>
                        <div
                          className={styles.answerBody}
                          style={{ maxHeight: isOpen ? "500px" : "0" }} // CSS transition trick
                        >
                          <p>{item.a}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))
          ) : (
            <div className={styles.noResults}>
              <FaQuestionCircle className={styles.noResIcon} />
              <p>No answers found for "{searchTerm}".</p>
              <Button onClick={() => (window.location.href = "/contact")}>
                Contact Support
              </Button>
            </div>
          )}
        </div>

        {/* Still have questions CTA */}
        <section className={styles.ctaBox}>
          <h2>Still have questions?</h2>
          <p>
            Can't find the answer you're looking for? Chat with our team
            directly.
          </p>
          <Button>Ask a Question</Button>
        </section>
      </main>
    </>
  );
}
