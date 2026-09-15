import {
  FaProjectDiagram,
  FaLaptopCode,
  FaCogs,
  FaExchangeAlt,
  FaClipboardList,
  FaChartLine,
} from "react-icons/fa";
import { HiArrowNarrowRight } from "react-icons/hi";

const Services = () => {
  const services = [
    {
      icon: <FaProjectDiagram />,
      title: "IT Project Management",
      description:
        "I support technology projects from planning through delivery by coordinating activities, managing timelines, maintaining project documentation, and keeping stakeholders informed of progress, risks, issues, and dependencies.",
    },
    {
      icon: <FaLaptopCode />,
      title: "Technology Consulting",
      description:
        "I work with technical and non-technical stakeholders to understand business needs, assess technology requirements, and translate complex information into practical recommendations that support organisational goals.",
    },
    {
      icon: <FaCogs />,
      title: "IT Consulting",
      description:
        "I help organisations evaluate how their systems, processes, and digital tools can work more effectively together. My technical background enables me to communicate clearly with delivery teams and business stakeholders.",
    },
    {
      icon: <FaExchangeAlt />,
      title: "Digital Transformation",
      description:
        "I support digital transformation initiatives by connecting people, processes, and technology. I focus on improving user journeys, supporting technology adoption, and helping teams implement meaningful digital change.",
    },
    {
      icon: <FaClipboardList />,
      title: "Business Analysis",
      description:
        "I gather and document requirements, review existing processes, identify gaps, and help convert business needs into clear and actionable delivery steps that technical and project teams can understand.",
    },
    {
      icon: <FaChartLine />,
      title: "Project Delivery & PMO Support",
      description:
        "I maintain project plans, action logs, RAID logs, status reports, and performance trackers. I also support sprint planning, stakeholder meetings, change control, and continuous project improvement.",
    },
  ];

  return (
    <>
      {/* Custom CSS for hover animations */}
      <style>
        {`
          .service-card {
            position: relative;
          }

          .service-icon {
            transition: all 0.5s ease;
            color: #ffffff;
          }

          .service-card:hover .service-icon {
            transform: rotate(360deg);
            color: #a168db;
          }

          .service-card:hover .service-title {
            color: #a168db;
          }

          .arrow-icon {
            transition: all 0.5s ease;
          }

          .service-card:hover .arrow-icon {
            transform: rotate(252deg);
            background-color: #a168db !important;
            color: #ffffff !important;
          }
        `}
      </style>

      <section
        id="expertise"
        className="py-20 px-6 md:px-8 bg-background"
      >
        <div className="max-w-8xl mx-auto">
          {/* Section Heading */}
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-5 text-white"
            data-aos="slide-down"
          >
            Areas of <span className="text-primary">Expertise</span>
          </h2>

          <p
            className="max-w-3xl mx-auto text-center text-gray-300 text-base md:text-lg leading-relaxed mb-16"
            data-aos="fade-up"
          >
            I combine project management, business analysis, and technical
            knowledge to help organisations plan, coordinate, and deliver
            technology-enabled change.
          </p>

          {/* Expertise Grid */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            data-aos="slide-up"
          >
            {services.map((service, index) => (
              <div
                key={index}
                className="service-card bg-gray-700 py-8 px-6 rounded-2xl border-2 border-transparent transition-all duration-500 hover:scale-105 hover:border-primary hover:shadow-xl"
              >
                {/* Icon Section */}
                <div className="flex justify-between items-start mb-6">
                  <div className="service-icon text-5xl md:text-6xl">
                    {service.icon}
                  </div>

                  <div
                    className="arrow-icon w-12 h-12 text-background bg-white rounded-full flex items-center justify-center"
                    style={{
                      backgroundColor: "#ffffff",
                      color: "#323946",
                    }}
                    aria-hidden="true"
                  >
                    <HiArrowNarrowRight className="text-2xl transform -rotate-45" />
                  </div>
                </div>

                {/* Expertise Title */}
                <h3 className="service-title text-xl md:text-2xl font-bold text-white mb-4">
                  {service.title}
                </h3>

                {/* Expertise Description */}
                <p className="text-gray-300 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;