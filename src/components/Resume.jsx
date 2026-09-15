import { useState } from "react";
import {
  FaBriefcase,
  FaClipboardCheck,
  FaCogs,
  FaLaptopCode,
  FaProjectDiagram,
  FaUsers,
} from "react-icons/fa";

const Resume = () => {
  const [activeTab, setActiveTab] = useState("experience");

  const tabs = [
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "certifications", label: "Certifications" },
    { id: "skills", label: "Skills" },
    { id: "about", label: "About Me" },
  ];

  const experiences = [
    {
      year: "May 2026 – Present",
      title: "Project Management Consultant",
      company: "Amdari | United Kingdom",
      description:
        "Coordinate project activities using Jira and Confluence, support requirements capture and scope control, maintain action and RAID logs, contribute to sprint planning and status reporting, and translate business needs into clear delivery actions for technical and non-technical stakeholders.",
    },
    {
      year: "March 2026 – Present",
      title: "Project Growth Lead",
      company: "AcademiaHub Africa",
      description:
        "Coordinate growth initiatives across product, development, design and marketing teams. Support stakeholder planning, partner outreach, launch communications and adoption activities for a digital platform serving more than 500 users and hosting over 120 academic publications and projects.",
    },
    {
      year: "September 2025 – March 2026",
      title: "Frontend Developer",
      company: "AcademiaHub Africa",
      description:
        "Worked within a cross-functional product team to deliver authentication, messaging and account-recovery features. Contributed to weekly product reviews, requirements discussions and user-journey improvements, including a Google sign-in option that reduced onboarding time to approximately 15–20 seconds.",
    },
    {
      year: "May 2025 – August 2025",
      title: "Frontend Track Lead",
      company: "LearnVerrse",
      description:
        "Supported delivery of an online learning platform by coordinating frontend activities and contributing to course upload, content-viewer, dashboard and payment features while collaborating with team members across the development lifecycle.",
    },
    {
      year: "December 2024 – March 2026",
      title: "Freelance Web Developer",
      company: "Casjoe Tech",
      description:
        "Deliver and maintain responsive WordPress websites based on client requirements, coordinate updates and technical changes, and improve website performance, usability and search visibility in line with business goals.",
    },
    {
      year: "April 2024 – November 2025",
      title: "Digital Content & Web Manager",
      company: "9am News Nigeria",
      description:
        "Manage the organisation's digital publishing platform, content workflow, SEO activities and performance monitoring. Built and maintained 9am.ng and coordinated the publication of more than 1,780 articles using analytics and search-performance insights to guide improvements.",
    },
    {
      year: "May 2022 – January 2023",
      title: "IT Support Intern",
      company: "Cybzity Computer Services",
      description:
        "Provided day-to-day technical support, assisted with website administration and supported the maintenance of CCTV, intercom and other IT systems while documenting and resolving user issues.",
    },
    {
      year: "October 2018 – July 2021",
      title: "Web Content Manager (Freelance)",
      company: "SSU-Technology Limited",
      description:
        "Managed digital content workflows across web platforms, prepared and published articles, maintained content quality and supported SEO practices to improve the consistency and visibility of online information.",
    },
  ];

  const education = [
    {
      year: "2025 – 2026",
      title: "MSc Management of Information Systems and Digital Innovation",
      company: "University of Chester | United Kingdom",
      description:
        "Developing practical and academic knowledge across digital transformation, project management, business intelligence, information systems, data and AI ethics, research methods and blockchain technologies.",
    },
    {
      year: "2021",
      title: "BSc (Ed.) Building Technology Education",
      company: "University of Ilorin | Nigeria",
      description:
        "Built a foundation in project planning, technical problem-solving, research, curriculum design and communication. The final-year research project examined how computer usage affected the academic performance of Educational Technology students.",
    },
  ];

  const certifications = [
    {
      year: "2026",
      title: "Google Project Management Professional Certificate",
      company: "Google | Coursera",
      status: "Completed",
      image: "/assets/PMP.jpeg",
    },
    {
      year: "2026",
      title: "SAP Technology Consultant Professional Certificate",
      company: "SAP | Coursera",
      status: "In progress",
      image: "/assets/SAP Technology Consultant.png",
    },
    {
      year: "2026",
      title: "IBM Business Analyst Professional Certificate",
      company: "IBM | Coursera",
      status: "In progress",
      image: "/assets/IBM Business Analyst.png",
    },
    {
      year: "2026",
      title: "AWS Cloud Technology Consultant Professional Certificate",
      company: "Amazon Web Services | Coursera",
      status: "In progress",
      image: "/assets/AWS Cloud Technology Consultant.png",
    },
    {
      year: "June 2026",
      title: "McKinsey Forward Programme",
      company: "McKinsey & Company",
      status: "Completed",
      image: "/assets/Mckinsey.jpg",
    },
    {
      year: "June 2026",
      title: "Technical Program Manager's Handbook",
      company: "Packt",
      status: "Completed",
      image: "/assets/TPM.jpg",
    },
    {
      year: "January 2026",
      title: "Google IT Support Professional Certificate",
      company: "Google | Coursera",
      status: "Completed",
      image: "/assets/IT Support Cert.jpg",
    },
    {
      year: "January 2026",
      title: "Backend Web Development",
      company: "ALX Africa",
      status: "Completed",
      image: "/assets/BE-DEV.png",
    },
    {
      year: "October 2025",
      title: "Frontend ProDev",
      company: "ALX Africa",
      status: "Completed",
      image: "/assets/ALX_PRODEV.png",
    },
    {
      year: "September 2025",
      title: "Software Development",
      company: "3MTT",
      status: "Completed",
      image: "/assets/3MTT.jpg",
    },
    {
      year: "May 2025",
      title: "Frontend Development",
      company: "Axia Africa",
      status: "Completed",
      image: "/assets/Mustapha Axia Certificate.jpg",
    },
    {
      year: "March 2025",
      title: "Content Optimization",
      company: "Surfer",
      status: "Completed",
      image: "/assets/Content-Optimization-Certification.jpg",
    },
    {
      year: "December 2024",
      title: "AI Essentials",
      company: "ALX Africa",
      status: "Completed",
      image: "/assets/AICE.png",
    },
    {
      year: "November 2024",
      title: "SEO Certification",
      company: "HubSpot Academy",
      status: "Completed",
      image: "/assets/SEO.png",
    },
    {
      year: "February 2022",
      title: "Frontend Development",
      company: "AptLearn",
      status: "Completed",
      image: "/assets/frontend.jpg",
    },
    {
      year: "February 2022",
      title: "WordPress Development",
      company: "AIGE Limited",
      status: "Completed",
      image: "/assets/Wordpress-cert.jpg",
    },
    {
      year: "July 2020",
      title: "Fundamentals of Digital Marketing",
      company: "Google",
      status: "Completed",
      image: "/assets/digital-marketing.jpg",
    },
  ];

  const skills = [
    {
      icon: <FaProjectDiagram />,
      title: "Project Management",
      items: [
        "Project planning and coordination",
        "Scope, schedule and dependency tracking",
        "RAID logs and status reporting",
        "Change control and project documentation",
      ],
    },
    {
      icon: <FaClipboardCheck />,
      title: "Business Analysis",
      items: [
        "Requirements gathering and documentation",
        "Business process mapping",
        "Gap analysis and prioritisation",
        "User journeys and acceptance criteria",
      ],
    },
    {
      icon: <FaUsers />,
      title: "Stakeholder & Team Delivery",
      items: [
        "Stakeholder communication",
        "Cross-functional collaboration",
        "Meeting facilitation and action tracking",
        "Technical-to-business translation",
      ],
    },
    {
      icon: <FaCogs />,
      title: "Digital Transformation",
      items: [
        "Process improvement",
        "Technology adoption",
        "Digital platform delivery",
        "Change and transformation support",
      ],
    },
    {
      icon: <FaBriefcase />,
      title: "Delivery Methods",
      items: [
        "Agile and Scrum fundamentals",
        "Sprint planning and backlog support",
        "Waterfall project planning",
        "SDLC and continuous improvement",
      ],
    },
    {
      icon: <FaLaptopCode />,
      title: "Tools & Technical Fluency",
      items: [
        "Jira, Confluence and Trello",
        "Microsoft Project and Google Workspace",
        "Excel and Power BI",
        "React, Next.js, WordPress and GitHub",
      ],
    },
  ];

  const aboutInfo = [
    { label: "Name", value: "Mustapha Mustapha Tunde" },
    { label: "Location", value: "Chester, United Kingdom" },
    {
      label: "Target Roles",
      value: "IT Project Management & Technology Consulting",
    },
    {
      label: "Focus",
      value: "Digital Transformation & Process Improvement",
    },
    { label: "Availability", value: "Full-time opportunities" },
    { label: "Work Preference", value: "On-site, hybrid or remote" },
    { label: "Languages", value: "English" },
    { label: "Email", value: "Mustaphamustapha1024@gmail.com" },
  ];

  const renderTimelineCards = (items, showStatus = false) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-h-[45rem] overflow-y-auto pr-2 custom-scrollbar">
      {items.map((item, index) => (
        <article
          key={`${item.title}-${index}`}
          className="bg-gray-900 rounded-lg p-8 flex flex-col text-white"
        >
          {item.image && (
            <img
              src={item.image}
              alt={`${item.title} certificate`}
              className="w-full aspect-[4/3] object-cover object-top mb-5 rounded-lg bg-white"
            />
          )}
          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
            <p style={{ color: "#a168db" }}>{item.year}</p>
            {showStatus && (
              <span className="rounded-full border border-purple-400 px-3 py-1 text-xs text-purple-300">
                {item.status}
              </span>
            )}
          </div>
          <h3 className="text-xl md:text-2xl font-semibold mb-2">
            {item.title}
          </h3>
          <p className="company-marker relative ml-8 mb-5 text-white">
            {item.company}
          </p>
          {item.description && (
            <p className="text-gray-300 leading-relaxed">{item.description}</p>
          )}
        </article>
      ))}
    </div>
  );

  return (
    <section id="resume" className="py-20 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-8xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">
          <aside className="lg:col-span-1" data-aos="slide-right">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Hire Me?
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              I bridge people, processes and technology to help teams organise
              work, solve delivery challenges and achieve meaningful digital
              transformation outcomes.
            </p>

            <div className="space-y-4" role="tablist" aria-label="Résumé sections">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={activeTab === tab.id}
                  aria-controls={`${tab.id}-panel`}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full h-16 rounded-lg border-2 text-lg font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? "text-primary bg-white"
                      : "border-gray-900 text-white bg-gray-900 hover:border-primary hover:text-primary"
                  }`}
                  style={
                    activeTab === tab.id
                      ? { borderColor: "#a168db", color: "#a168db" }
                      : {}
                  }
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </aside>

          <div className="lg:col-span-2" data-aos="slide-left">
            {activeTab === "experience" && (
              <div id="experience-panel" role="tabpanel">
                <h2 className="section-title">
                  My <span>Experience</span>
                </h2>
                <p className="section-intro">
                  Experience coordinating digital initiatives, supporting
                  cross-functional teams and translating business needs into
                  practical project and technology delivery activities.
                </p>
                {renderTimelineCards(experiences)}
              </div>
            )}

            {activeTab === "education" && (
              <div id="education-panel" role="tabpanel">
                <h2 className="section-title">
                  My <span>Education</span>
                </h2>
                <p className="section-intro">
                  Academic training combining information systems, digital
                  innovation, project delivery, research and technical
                  problem-solving.
                </p>
                {renderTimelineCards(education)}
              </div>
            )}

            {activeTab === "certifications" && (
              <div id="certifications-panel" role="tabpanel">
                <h2 className="section-title">
                  My <span>Certifications</span>
                </h2>
                <p className="section-intro">
                  Continuous professional development across project
                  management, business analysis, technology consulting, cloud
                  computing and technical delivery.
                </p>
                {renderTimelineCards(certifications, true)}
              </div>
            )}

            {activeTab === "skills" && (
              <div id="skills-panel" role="tabpanel">
                <h2 className="section-title">
                  My <span>Skills</span>
                </h2>
                <p className="section-intro">
                  A blend of project delivery, consulting, business analysis
                  and technical skills for supporting technology-enabled
                  organisational change.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-h-[45rem] overflow-y-auto pr-2 custom-scrollbar">
                  {skills.map((skill) => (
                    <article
                      key={skill.title}
                      className="skill-card bg-gray-900 rounded-lg p-8 text-white group"
                    >
                      <div className="skill-icon text-4xl mb-4 transition-colors duration-300">
                        {skill.icon}
                      </div>
                      <h3 className="text-xl md:text-2xl font-semibold mb-4">
                        {skill.title}
                      </h3>
                      {skill.items.map((item) => (
                        <p key={item} className="list-marker relative ml-8 mb-2">
                          {item}
                        </p>
                      ))}
                    </article>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "about" && (
              <div id="about-panel" role="tabpanel">
                <h2 className="section-title">
                  About <span>Me</span>
                </h2>
                <p className="section-intro">
                  I am a project management and technology consulting
                  professional with a background in digital platforms and
                  frontend development. I enjoy bringing structure to complex
                  work, improving processes and helping technical and
                  non-technical stakeholders move from ideas to practical
                  outcomes.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {aboutInfo.map((info) => (
                    <div
                      key={info.label}
                      className="bg-gray-900 rounded-lg p-6 text-white"
                    >
                      <p className="text-sm uppercase tracking-wide text-purple-300 mb-2">
                        {info.label}
                      </p>
                      <p className="text-base md:text-lg">{info.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>
        {`
          .section-title {
            color: #111827;
            font-size: clamp(2.25rem, 5vw, 3rem);
            font-weight: 700;
            margin-bottom: 1rem;
          }

          .section-title span,
          .skill-card:hover .skill-icon {
            color: #a168db;
          }

          .section-intro {
            color: #4b5563;
            font-size: 1.125rem;
            line-height: 1.75rem;
            margin-bottom: 2rem;
          }

          .company-marker::before,
          .list-marker::before {
            background: #a168db;
            border-radius: 9999px;
            content: "";
            height: 0.5rem;
            left: -2rem;
            position: absolute;
            top: 0.55rem;
            width: 0.5rem;
          }

          .custom-scrollbar::-webkit-scrollbar {
            width: 0.7rem;
          }

          .custom-scrollbar::-webkit-scrollbar-thumb {
            background: transparent;
            border-radius: 1rem;
          }

          .custom-scrollbar:hover::-webkit-scrollbar-thumb {
            background: #a168db;
          }
        `}
      </style>
    </section>
  );
};

export default Resume;
