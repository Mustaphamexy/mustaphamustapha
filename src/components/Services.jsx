import { FaWordpress, FaCalendarCheck, FaEdit } from "react-icons/fa";
import { BiCodeAlt, BiStats } from "react-icons/bi";
import { HiArrowNarrowRight } from "react-icons/hi";
import { LuNotebookPen } from "react-icons/lu";

const Services = () => {
  const services = [
    {
      icon: <FaWordpress />,
      title: "WordPress Development",
      description:
        "I design and manage WordPress websites, customize themes, and optimize plugins. My skills ensure responsive, SEO-friendly, and user-friendly websites that enhance business growth and online presence.",
    },
    {
      icon: <BiCodeAlt />,
      title: "Web Development",
      description:
        "I build and maintain fast, responsive websites. My skills in front-end development ensure smooth functionality, great user experience, and optimized performance for businesses and brands growth.",
    },
    {
      icon: <BiStats />,
      title: "SEO",
      description:
        "I improve website rankings with SEO strategies that improve search rankings, and boost website visibility. My expertise covers keyword research, on-page optimization, and content structuring to maximize engagement and conversions.",
    },
    {
      icon: <FaCalendarCheck />,
      title: "Project Management",
      description:
        "I plan, organize, and oversee projects to ensure timely completion. My skills in team coordination, task management, and problem-solving help businesses run smoothly and achieve their goals.",
    },
    {
      icon: <LuNotebookPen />,
      title: "Content Creation",
      description:
        "I write engaging, SEO-friendly blog posts that attract readers and boost website traffic. My content is well-researched, structured, and optimized to increase visibility and brand authority.",
    },
    {
      icon: <FaEdit />,
      title: "Canva Designs",
      description:
        "I create eye-catching Canva designs for social media, branding, and marketing. My designs are simple, professional, and visually appealing to attract and engage the right audience.",
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

      <section className="py-20 px-6 md:px-8  bg-background">
        <div className="max-w-8xl mx-auto">
          {/* Section Heading */}
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-16 text-white" 
            data-aos="slide-down"
          >
            My <span className="text-primary">Services</span>
          </h2>

          {/* Services Grid */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            data-aos="slide-up"
          >
            {services.map((service, index) => (
              <div
                key={index}
                className="service-card bg-gray-700 py-8 px-6 rounded-2xl transition-all duration-500 hover:scale-105 hover:border-2 hover:border-primary hover:shadow-xl"
              >
                {/* Icon Section */}
                <div className="flex justify-between items-start mb-6">
                  <div className="service-icon text-5xl md:text-6xl">
                    {service.icon}
                  </div>
                  <a
                    href="#"
                    className="arrow-icon w-12 h-12 text-background bg-white rounded-full flex items-center justify-center"
                    style={{
                      backgroundColor: '#fff',
                      color: '#323946'
                    }}
                  >
                    <HiArrowNarrowRight className="text-2xl transform -rotate-45" />
                  </a>
                </div>

                {/* Service Title */}
                <h3 className="service-title text-xl md:text-3xl font-bold text-white mb-4">
                  {service.title}
                </h3>

                {/* Service Description */}
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