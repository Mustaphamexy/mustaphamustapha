import { useState } from "react";
import {FaWordpress, FaHtml5, FaCss3Alt, FaJs, FaGoogle, FaPalette, FaSlack, FaTrello, FaFigma,} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { BiSolidUserAccount, BiTime } from "react-icons/bi";
import { BsBing, BsGoogle } from "react-icons/bs";
import { GrAnalytics } from "react-icons/gr";
import { AxiaFrontend, SuferContent } from "./details"

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
      year: "May 2025 - August 2025",
      title: "Frontend Developer (Intern)",
      company: "LearnVerrse",
      description:
        "Building responsive and user-friendly web interfaces and collaborating with cross-functional teams to deliver high-quality learning platform features.",
    },
    {
      year: "Dec 2024 - Present",
      title: "Freelance Web Developer",
      company: "Casjoe Tech",
      description:
        "Developed and maintained responsive websites for clients at Casjoe Tech using WordPress, ensuring SEO optimization, fast performance, and user-friendly interfaces tailored to meet company goals.",
    },
    {
      year: "April 2024 - Present",
      title: "Digital Content and Web Development Manager",
      company: "9am News Nigeria",
      description:
        "Developed and managed WordPress websites, overseeing content creation, SEO, and technical functions to enhance web performance and user experience.",
    },
    {
      year: "May 2022 - Jan 2023",
      title: "IT Support personnel (Intern)",
      company: "Cybzity Computer Services",
      description:
        "Provided IT support with a focus on WordPress development and web management, including maintenance of CCTV, intercom systems and IT related procedures.",
    },
    {
      year: "Oct 2018 - July 2021",
      title: "Web Content Manager (Freelancing)",
      company: "SSU-Technology Limited",
      description:
        "Managed and created blog content on website and uploaded content across platforms while maintaining SEO practices.",
    },
  ];

  const certifications = [
    {
      year: "17th October, 2025",
      title: "Frontend Prodev ",
      company: "ALX Africa",
      image: "/assets/ALX_PRODEV.png",
    },
    {
      year: "12th October, 2025",
      title: "Technical Support Fundamentals",
      company: "Google",
      image: "/assets/Technical_Support.jpg",
    },
    {
      year: "13th May, 2025",
      title: "Frontend Development",
      company: "Axia Africa",
      image: "/assets/Mustapha Axia Certificate.jpg",
    },
    {
      year: "20th March, 2025",
      title: "Content Optimization",
      company: "Surfer",
      image: "/assets/Content-Optimization-Certification.jpg",
    },
    {
      year: "3rd December, 2024",
      title: "AI Essentials",
      company: "ALX",
      image: "/assets/AICE.png",
    },
    {
      year: "12th November, 2024",
      title: "SEO Certification",
      company: "Hubspot Academy",
      image: "/assets/SEO.png",
    },
    {
      year: "8th February, 2022",
      title: "Frontend Development",
      company: "Aptlearn",
      image: "/assets/frontend.jpg",
    },
    {
      year: "8th February, 2022",
      title: "WordPress Development",
      company: "AIGE Limited",
      image: "/assets/Wordpress-cert.jpg",
    },
    {
      year: "November 2021",
      title: "Project Management Foundation",
      company: "Cousera",
      image: "/assets/Cousera PM certificate .png",
    },
    {
      year: "7th July, 2020",
      title: "Digital Marketing Fundamentals",
      company: "Google",
      image: "/assets/digital-marketing.jpg",
    },
  ];

  const skills = [
    {
      icon: <FaWordpress />,
      title: "WordPress",
      items: ["Elementor", "Divi", "Gutenburg"],
    },
    {
      icon: (
        <div className="flex gap-2">
          <FaHtml5 />
          <FaCss3Alt />
          <FaJs />
          <SiTailwindcss />
        </div>
      ),
      title: "Frontend",
      items: ["HTML", "CSS", "Javascript", "TailwindCSS"],
    },
    {
      icon: (
        <div className="flex gap-2">
          <BsGoogle />
          <BsBing />
          <GrAnalytics />
        </div>
      ),
      title: "Search Engine Optimization",
      items: ["Google Analytics", "Google Search Console", "Ahrefs", "Moz"],
    },
    {
      icon: <FaPalette />,
      title: "Graphics",
      items: ["Canva", "Photoshop"],
    },
    {
      icon: (
        <div className="flex gap-2">
          <BiSolidUserAccount />
          <BiTime />
        </div>
      ),
      title: "Soft Skills",
      items: ["Team Player", "Time Management", "Effective Communication"],
    },
    {
      icon: (
        <div className="flex gap-2">
          <FaSlack />
          <BsGoogle />
          <FaTrello />
          <FaFigma />
        </div>
      ),
      title: "Collaboration Tool",
      items: ["Slack", "Google Workspace", "Trello", "Figma"],
    },
  ];

  const aboutInfo = [
    { label: "Name", value: "Mustapha Mustapha" },
    { label: "Gender", value: "Male" },
    { label: "Age", value: "26 Years Old" },
    { label: "Status", value: "Single" },
    { label: "City", value: "Port Harcourt" },
    { label: "Nationality", value: "Nigerian" },
    { label: "Full Time", value: "Available" },
    { label: "Freelance", value: "Available" },
    { label: "Phone", value: "(+234) 814 8748 044" },
    { label: "Email", value: "Mustaphamexy112@gmail.com" },
    { label: "Language", value: "English" },
  ];

  return (
    <section id="resume" className="py-20 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-8xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">
          {/* Left Sidebar */}
          <div className="lg:col-span-1" data-aos="slide-right">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Hire Me?
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              A growth-driven personnel with result-driven solutions that
              enhance growth and efficiency.
            </p>

            {/* Tab Buttons */}
            <div className="space-y-4">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full h-16 rounded-lg text-lg font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? "border-2 text-primary bg-white"
                      : "border-2 border-gray-900 text-white bg-gray-900 hover:border-primary hover:text-primary"
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
          </div>

          {/* Right Content */}
          <div className="lg:col-span-2" data-aos="slide-left">
            {/* Experience Tab */}
            {activeTab === "experience" && (
              <div>
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                  My{" "}
                  <span className="text-primary" style={{ color: "#a168db" }}>
                    Experience
                  </span>
                </h2>
                <p className="text-gray-600 text-lg mb-8">
                  With hands-on experience in web development, SEO, and project
                  management, I have successfully built, optimized, and managed
                  websites that enhance user experience and business growth.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-h-[45rem] overflow-y-auto pr-2 custom-scrollbar">
                  {experiences.map((exp, index) => (
                    <div
                      key={index}
                      className="bg-gray-900 rounded-lg p-8 flex flex-col justify-center text-white"
                    >
                      <p
                        className="text-primary mb-2"
                        style={{ color: "#a168db" }}
                      >
                        {exp.year}
                      </p>
                      <h3 className="text-2xl font-semibold mb-2">
                        {exp.title}
                      </h3>
                      <p
                        className="relative ml-8 mb-6 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:rounded-full before:-ml-8"
                        style={{ "--tw-before-bg": "#a168db" }}
                      >
                        <span
                          className="before:bg-primary"
                          style={{ color: "#fff" }}
                        >
                          {exp.company}
                        </span>
                      </p>
                      <p className="text-gray-300">{exp.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Education Tab */}
            {activeTab === "education" && (
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  My <span style={{ color: "#a168db" }}>Education</span>
                </h2>
                <p className="text-gray-600 text-lg mb-8">
                  A graduate of Building Technology Education from the
                  University of Ilorin
                </p>

                <div className="max-h-[45rem] overflow-y-auto pr-2">
                  <div className="bg-gray-900 rounded-lg p-8 text-white">
                    <p style={{ color: "#a168db" }} className="mb-2">
                      2021
                    </p>
                    <h3 className="text-2xl font-semibold mb-2">
                      B.sc(Ed.) Building Technology Education
                    </h3>
                    <p
                      className="relative ml-8 mb-6 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:rounded-full before:-ml-8"
                      style={{ "--tw-before-bg": "#a168db" }}
                    >
                      University Of Ilorin
                    </p>
                    <p className="text-gray-300">
                      A graduate of Building Technology Education from the
                      University of Ilorin, skilled in both theoretical and
                      practical aspects of building technology and education.
                      Proficient in teaching methods, curriculum design, and
                      project management, with a strong foundation in
                      construction principles. Completed a final-year project
                      titled "Impact of Computer Usage on Academic Performance
                      of Educational Technology Students in University of
                      Ilorin," showcasing research abilities in educational
                      technology and academic performance analysis.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Certifications Tab */}
            {activeTab === "certifications" && (
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  My <span style={{ color: "#a168db" }}>Certifications</span>
                </h2>
                <p className="text-gray-600 text-lg mb-8">
                  I have certifications in SEO, WordPress development, and
                  digital marketing, enhancing my skills in website optimization
                  and online brand growth.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-h-[45rem] overflow-y-auto pr-2 custom-scrollbar">
                  {certifications.map((cert, index) => (
                    <div
                      key={index}
                      className="bg-gray-900 rounded-lg p-8 flex flex-col justify-center text-white"
                    >
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="w-full mb-4 rounded"
                      />
                      <p style={{ color: "#a168db" }} className="mb-2">
                        {cert.year}
                      </p>
                      <h3 className="text-2xl font-semibold mb-2">
                        {cert.title}
                      </h3>
                      <p className="relative ml-8 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:rounded-full before:-ml-8">
                        {cert.company}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Skills Tab */}
            {activeTab === "skills" && (
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  My <span style={{ color: "#a168db" }}>Skills</span>
                </h2>
                <p className="text-gray-600 text-lg mb-8">
                  I specialize in WordPress development, SEO, content creation,
                  project management, and Canva designs, ensuring high-quality
                  digital solutions.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-h-[45rem] overflow-y-auto pr-2 custom-scrollbar">
                  {skills.map((skill, index) => (
                    <div
                      key={index}
                      className="bg-gray-900 rounded-lg p-8 flex flex-col justify-center text-white group"
                    >
                      <div
                        className="text-4xl mb-4 transition-colors duration-500 group-hover:text-primary"
                        style={{ "--hover-color": "#a168db" }}
                      >
                        {skill.icon}
                      </div>
                      <h3 className="text-2xl font-semibold mb-4">
                        {skill.title}
                      </h3>
                      {skill.items.map((item, idx) => (
                        <p
                          key={idx}
                          className="relative ml-8 mb-2 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:rounded-full before:-ml-8"
                          style={{ "--tw-before-bg": "#a168db" }}
                        >
                          {item}
                        </p>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* About Me Tab */}
            {activeTab === "about" && (
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  About <span style={{ color: "#a168db" }}>Me</span>
                </h2>
                <p className="text-gray-600 text-lg mb-8">
                  I am a dedicated web developer a growth-driven person
                  passionate about helping businesses grow online through
                  optimized websites, SEO, and engaging content.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {aboutInfo.map((info, index) => (
                    <div
                      key={index}
                      className="bg-gray-900 rounded-lg p-8 text-white"
                    >
                      <p style={{ color: "#a168db" }} className="text-lg">
                        {info.label}{" "}
                        <span className="text-white ml-4 text-sm md:text-lg">{info.value}</span>
                      </p>
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

          .group:hover .text-6xl {
            color: #a168db;
          }

          [class*="before:"]:before {
            background: #a168db;
          }
        `}
      </style>
    </section>
  );
};

export default Resume;
