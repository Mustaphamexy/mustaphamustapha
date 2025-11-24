import { useState, useEffect } from "react";
import { FaArrowUpLong } from "react-icons/fa6";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import {
  MovieApp,
  Salonaffairs,
  NewsApp,
  Kcsports,
  BlogInfoHeap,
  GabbyFoundation,
  JentubyFoundation,
  Bitcoin,
  SebastinePortfolio,
  FrancostechLimited,
  Learnverrse,
  Afriremotely,
  AlxApp,
  Ticketly,
  AudioPhile
} from "./details";

const Portfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const projects = [
     {
      id: 15,
      title: "AudioPhile",
      description:"HNG Internship Stage 4 Project: Audiophile is a modern, full-stack e-commerce platform for premium audio equipment, featuring a complete shopping experience with product catalog, cart, checkout, order management, and automated email confirmations.",
      tech: "Next.js 14, TailwindCSS, TypeScript, React Hook Form, Convex, Resend ",
      link: "https://ticketly-react.vercel.app/",
      image: AudioPhile,
    },
    {
      id: 14,
      title: "Ticketly",
      description:"HNG Internship Stage 3 Project: A modern, responsive ticket management app built with React, featuring secure user authentication, real-time ticket analytics, full CRUD operations, status tracking, priority categorization, toast notifications, and a sleek dark-themed interface.",
      tech: "React, TailwindCSS, LocalStorage ",
      link: "https://ticketly-react.vercel.app/",
      image: Ticketly,
    },
    {
      id: 1,
      title: "Afriremotely",
      description:"Afriremotely is a remote job platform that connects African professionals to global work opportunities. It is designed to simplify job discovery, application tracking, and professional networking across industries. it offers advanced search filters and dashboards for both job seekers and employers.",
      tech: "React, TailwindCSS, Context API",
      link: "https://afriremotely-d5zt.vercel.app/",
      image: Afriremotely,
    },
    {
      id: 2,
      title: "Learnverrse",
      description:"Learnverrse is a learning management platform built to enhance online education by offering interactive courses, progress tracking, and collaborative features for learners and instructors in one digital ecosystem. it's my Learnverrse internship project where i collaborated with a team of developers to build the platform.",
      tech: "React, TailwindCSS",
      link: "https://learnverrse.github.io/learnverrse",
      image: Learnverrse,
    },
    {
      id: 3,
      title: "ALX Listing App",
      description:"ALX Listing App is a responsive web platform that allows users to post, view, and manage property listings efficiently. It focuses on usability, performance, and seamless navigation for property seekers. it's my Assignment for ALX SE Program",
      tech: "Next.js, Tailwind CSS, Mock API",
      link: "https://alx-listing-app-1226863.vercel.app/",
      image: AlxApp,
    },
    {
      id: 4,
      title: "Movie App",
      description:"Movie App Is My 3MTT Final Project Which Involves Using The MERN Stack to fetch movie details from TMBD API And dynamically displaying to users and allows user to create Watchlist",
      tech: "MongoDB, Express, React, Node.js",
      link: "https://movie-app-rosy-five.vercel.app/",
      image: MovieApp,
    },
    {
      id: 5,
      title: "Saloon Affairs",
      description:
        "Salon Affairs is a premier beauty destination offering exceptional products and services.",
      tech: "WordPress- Theme -Elementor",
      link: "https://salonaffairs.com/",
      image: Salonaffairs,
    },
    {
      id: 6,
      title: "KCsports Agency",
      description:
        "KC Sports Agency provides comprehensive support for sports professionals, from training and representation to marketing and merchandising.",
      tech: "WordPress- Elementor",
      link: "https://kcsportsagency.com/",
      image: Kcsports,
    },
    {
      id: 7,
      title: "9am News Nigeria",
      description:
        "9AM.ng is a dynamic news website featuring categories like politics, entertainment, business, sports, and lifestyle. Its user-friendly structure ensures seamless navigation, real-time updates, and engaging, SEO-optimized content for readers.",
      tech: "WordPress- Elementor",
      link: "https://9am.ng/",
      image: NewsApp,
    },
    {
      id: 8,
      title: "BlogInfoHeap",
      description:
        "BlogInfoHeap.com is a technology-focused platform offering expert tutorials, tech courses, Web3 insights, AI trends, gadget reviews, and scholarship information. Its structured website features categories like Bitcoin, Apple, and gaming, providing readers with diverse tech content.",
      tech: "WordPress- Elementor",
      link: "https://www.bloginfoheap.com/",
      image: BlogInfoHeap,
    },
    {
      id: 9,
      title: "Nigeria Bitcoin Community",
      description:
        "Nigeria Bitcoin Community offers crypto news, trading guides, exchange reviews, and investment tips. Its structured sections ensure easy navigation, providing valuable insights on Bitcoin, blockchain, and market trends for Nigerian crypto enthusiasts.",
      tech: "WordPress- Elementor",
      link: "https://www.nigeriabitcoincommunity.com/",
      image: Bitcoin,
    },
    {
      id: 10,
      title: "Gabby Foundation",
      description:
        "Gabby Charity Foundation supports vulnerable communities through education, healthcare, and social welfare. Its structured website features programs, donation options, impact stories, and volunteering opportunities for seamless engagement with its humanitarian mission.",
      tech: "WordPress- Elementor",
      link: "https://gabbycharityfoundation.org/",
      image: GabbyFoundation,
    },
    {
      id: 11,
      title: "Jentuby Foundation",
      description:
        "Jentuby.org is a non-profit organization focused on education, empowerment, and social welfare. Its website features programs, donation options, impact stories, and volunteer opportunities, fostering community support for positive change and development.",
      tech: "WordPress- Elementor",
      link: "https://jentuby.org/",
      image: JentubyFoundation,
    },
    {
      id: 12,
      title: "Sebastine Portfolio",
      description:
        "Sebastine.com showcases Sebastine Nnanemere, a Nigerian Cybersecurity Engineer specializing in DevOps, SIEM management, cloud security, and threat detection. The site details his services, projects, testimonials, and offers contact options.",
      tech: "WordPress- Elementor",
      link: "https://sebastine.com/",
      image: SebastinePortfolio,
    },
    {
      id: 13,
      title: "Francostech Limited",
      description:
        "Francostech.com.ng offers electronic security solutions like CCTV, fire alarms, and access control. Its structured website features services, projects, company insights, and contact options, ensuring seamless navigation for clients and partners.",
      tech: "WordPress- Divi",
      link: "https://francostech.com.ng/",
      image: FrancostechLimited,
    },
    
  ];

  // Helper function to generate number with leading zero
  const getProjectNumber = (index) => {
    return (index + 1).toString().padStart(2, '0');
  };

  const currentProject = projects[currentIndex];

  const nextSlide = () => {
    if (isAnimating || currentIndex >= projects.length - 1) return;

    setIsAnimating(true);
    setCurrentIndex((prev) => prev + 1);

    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating || currentIndex <= 0) return;

    setIsAnimating(true);
    setCurrentIndex((prev) => prev - 1);

    setTimeout(() => setIsAnimating(false), 500);
  };

  const isFirstSlide = currentIndex === 0;
  const isLastSlide = currentIndex === projects.length - 1;

  return (
    <section className="bg-[#1f242d] py-16">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-12">
          My <span className="text-[#a168db]">Projects</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Right Side - Carousel (shown first on mobile) */}
          <div className="portfolio-carousel-section order-1 lg:order-2">
            <div className="portfolio-carousel bg-[#252a32] rounded-xl p-6">
              {/* Image Carousel */}
              <div className="relative overflow-hidden rounded-lg h-96 lg:h-[500px] mb-6">
                <div
                  className="flex transition-transform duration-500 ease-in-out h-full"
                  style={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                  }}
                >
                  {projects.map((project, index) => (
                    <div
                      key={project.id}
                      className="w-full h-full flex-shrink-0 flex-grow-0"
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-top rounded-lg"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation */}
              <div className="navigation flex justify-center space-x-6">
                <button
                  onClick={prevSlide}
                  disabled={isFirstSlide}
                  className={`flex items-center justify-center w-14 h-14 text-3xl rounded-lg border-2 transition-all duration-300 ${
                    isFirstSlide
                      ? "border-gray-600 text-gray-600 cursor-not-allowed"
                      : "border-[#a168db] text-[#a168db] hover:bg-[#a168db] hover:text-white hover:scale-105"
                  }`}
                >
                  <FaChevronLeft className="w-6 h-6" />
                </button>

                <button
                  onClick={nextSlide}
                  disabled={isLastSlide}
                  className={`flex items-center justify-center w-14 h-14 text-3xl rounded-lg border-2 transition-all duration-300 ${
                    isLastSlide
                      ? "border-gray-600 text-gray-600 cursor-not-allowed"
                      : "border-[#a168db] text-[#a168db] hover:bg-[#a168db] hover:text-white hover:scale-105"
                  }`}
                >
                  <FaChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>

          {/* Left Side - Single Project Detail (shown second on mobile) */}
          <div className="portfolio-details order-2 lg:order-1">
            <div className="portfolio-box bg-[#252a32] rounded-xl p-8">
              <div className="portfolio-detail active">
                <span className="text-8xl font-bold text-transparent [-webkit-text-stroke:0.07rem_#fff] leading-none block mb-4">
                  {getProjectNumber(currentIndex)}
                </span>

                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  {currentProject.title}
                </h3>

                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  {currentProject.description}
                </p>

                <div className="tech mb-8">
                  <p className="text-[#a168db] text-lg border-b border-gray-600 pb-4">
                    {currentProject.tech}
                  </p>
                </div>

                <div className="live-link">
                  <a
                    href={currentProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative inline-flex items-center justify-center w-14 h-14 bg-[#34373b] text-white rounded-full text-3xl transition-all duration-300 hover:text-[#a168db] hover:scale-110 group"
                  >
                    <FaArrowUpLong className="transform rotate-45" />
                    <span className="absolute -top-12 left-1/2 transform -translate-x-1/2 scale-90 bg-white text-[#1f242d] text-sm px-3 py-2 rounded opacity-0 pointer-events-none transition-all duration-300 group-hover:scale-100 group-hover:opacity-100 group-hover:-top-14 whitespace-nowrap">
                      Live Project
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;