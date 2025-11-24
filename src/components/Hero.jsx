import { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaFacebook  } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MyPhoto } from './details';



const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger fade-in animation after component mounts
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const roles = [
    { text: 'WordPress Developer', delay: 4 },
    { text: 'Frontend Developer', delay: 3 },
    { text: 'SEO Specialist', delay: 2 },
    { text: 'Project Manager', delay: 1 }
  ];

  return (
    <>
      {/* CSS Animations in Style Tag */}
      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
              visibility: hidden;
            }
            to {
              opacity: 1;
              visibility: visible;
            }
          }

          @keyframes textFill {
            10%, 100% {
              width: 0;
            }
            70%, 90% {
              width: 100%;
            }
          }

          @keyframes displayText {
            25%, 100% {
              display: none;
            }
          }

          @keyframes rotateBorder {
            100% {
              transform: rotate(360deg);
            }
          }

          .hero-container {
            animation: fadeIn 0.3s linear 0.5s forwards;
            opacity: 0;
            visibility: hidden;
          }

          .animated-role {
            position: relative;
            display: inline-block;
            color: transparent;
            -webkit-text-stroke: 0.7px #a168db;
            animation: displayText 16s linear infinite;
          }

          .animated-role:nth-child(1) {
            animation-delay: -16s;
          }
          .animated-role:nth-child(2) {
            animation-delay: -12s;
          }
          .animated-role:nth-child(3) {
            animation-delay: -8s;
          }
          .animated-role:nth-child(4) {
            animation-delay: -4s;
          }

          .animated-role::before {
            content: attr(data-text);
            position: absolute;
            width: 0;
            border-right: 2px solid #a168db;
            color: #a168db;
            white-space: nowrap;
            overflow: hidden;
            animation: textFill 4s linear infinite;
          }

          .animated-role:nth-child(1)::before {
            animation-delay: -16s;
          }
          .animated-role:nth-child(2)::before {
            animation-delay: -12s;
          }
          .animated-role:nth-child(3)::before {
            animation-delay: -8s;
          }
          .animated-role:nth-child(4)::before {
            animation-delay: -4s;
          }

          .rotating-border::before,
          .rotating-border::after {
            content: '';
            position: absolute;
            width: 500px;
            height: 500px;
            background: conic-gradient(transparent, transparent, transparent, #a168db);
            animation: rotateBorder 10s linear infinite;
          }

          .rotating-border::after {
            animation-delay: -5s;
          }

          @media (max-width: 768px) {
            .rotating-border::before,
            .rotating-border::after {
              width: 350px;
              height: 350px;
            }
          }
        `}
      </style>

      <section 
        id="home" 
        className={`hero-container pt-4 flex items-center px-6 md:px-12 lg:px-24  gap-12 ${isVisible ? 'opacity-100' : ''}`}
        style={{ backgroundColor: '#1f242d' }}
      >
        <div className="max-w-7xl  mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-4">
          
          {/* Left Content */}
          <div className=" order-2 lg:order-1 space-y-3 text-white" data-aos="fade-right">
            {/* Main Heading */}
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold">
              Mustapha Mustapha
            </h1>
            
            {/* Animated Role Subtitle */}
            <h2 className="text-xl md:text-3xl font-semibold inline-block">
              I am a{' '}
              <span className="inline-block relative">
                {roles.map((role, index) => (
                  <span
                    key={index}
                    className="animated-role absolute left-0 top-0"
                    data-text={role.text}
                    style={{ '--i': role.delay }}
                  >
                    {role.text}
                  </span>
                ))}
              </span>
            </h2>
            
            {/* Description */}
            <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-xl mt-4">
              Hi, I'm Mustapha Mustapha Tunde, a Web Developer aiming to become a Full-Stack 
              Developer. I've built 35+ responsive websites. I'd be excited to apply my frontend 
              and WordPress skills to build you a responsive, visually engaging site, with a 
              seamless user experience.
            </p>
            
            {/* CTA and Social Links */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-4">
              {/* Download CV Button */}
              <a 
                href="https://docs.google.com/document/d/1v38A2xVwAMCaneSs9DilpLQ0g2seoMZNg1YVQ6yBEug/edit?tab=t.0" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 bg-purple-500 border-2 border-purple-500 rounded-full font-semibold text-slate-900 transition-all duration-500  hover:text-white shadow-lg hover:shadow-none"
                style={{ 
                  backgroundColor: '#a168db',
                  borderColor: '#a168db',
                  boxShadow: '0 0 5px #a168db'
                }}
              >
                Download CV
              </a>
              
              {/* Social Media Links */}
              <div className="flex gap-3">
                <a 
                  href="https://github.com/Mustaphamexy/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-500 hover:scale-110"
                  style={{ 
                    borderColor: '#a168db',
                    color: '#a168db'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#a168db';
                    e.currentTarget.style.color = '#1f242d';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = '#a168db';
                  }}
                >
                  <FaGithub size={20} />
                </a>
                <a 
                  href="https://ng.linkedin.com/in/mustapha-mustapha-tunde" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-500 hover:scale-110"
                  style={{ 
                    borderColor: '#a168db',
                    color: '#a168db'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#a168db';
                    e.currentTarget.style.color = '#1f242d';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = '#a168db';
                  }}
                >
                  <FaLinkedin size={20} />
                </a>
                <a 
                  href="https://x.com/Boy_Mexy" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-500 hover:scale-110"
                  style={{ 
                    borderColor: '#a168db',
                    color: '#a168db'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#a168db';
                    e.currentTarget.style.color = '#1f242d';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = '#a168db';
                  }}
                >
                  <FaXTwitter size={20} />
                </a>
                <a 
                  href="https://web.facebook.com/profile.php?id=100010233495342" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-500 hover:scale-110"
                  style={{ 
                    borderColor: '#a168db',
                    color: '#a168db'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#a168db';
                    e.currentTarget.style.color = '#1f242d';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = '#a168db';
                  }}
                >
                  <FaFacebook size={20} />
                </a>
              </div>
            </div>
          </div>
          
          {/* Right Image Section */}
          <div className=" order-1 lg:order-2  flex justify-center lg:justify-end" data-aos="slide-down">
            <div className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[32vw] lg:h-[32vw] max-w-[500px] max-h-[500px]">
              {/* Rotating Border Container */}
              <div 
                className="rotating-border absolute inset-0 rounded-full p-1 flex items-center justify-center overflow-hidden"
                style={{ padding: '5px' }}
              >
                {/* Inner Circle with Image */}
                <div 
                  className="relative w-full h-full rounded-full flex items-center justify-center overflow-hidden z-10"
                  style={{ 
                    backgroundColor: '#1f242d',
                    border: '0.1px solid #1f242d'
                  }}
                >
                  <img 
                    src={MyPhoto} 
                    alt="Mustapha Mustapha" 
                    className="absolute w-[85%] object-cover"
                    style={{ mixBlendMode: 'lighten' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;