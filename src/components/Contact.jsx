import { useState, useRef } from "react";
import { TbMailFilled } from "react-icons/tb";
import { FaPhone, FaLocationDot } from "react-icons/fa6";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_wj2rfbx",          // ✅ Your EmailJS Service ID
        "template_xvflta6",          // ✅ Replace with your EmailJS Template ID
        form.current,
        "1ahtieNBj8hab2M-d"         // ✅ Your Public Key
      )
      .then(
        () => {
          setLoading(false);
          setSuccessMessage("✅ Message sent successfully!");
          setErrorMessage("");
          form.current.reset();
        },
        (error) => {
          setLoading(false);
          setErrorMessage("❌ Failed to send message. Try again later.");
          console.error(error.text);
        }
      );
  };

  return (
    <section className="bg-white py-20" id="contact">
      <div className="mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-12 max-w-8xl mx-auto px-4 lg:px-6">
          {/* Left Side - Contact Info */}
          <div className="flex flex-col justify-center" data-aos="fade-up">
            <h2 className="text-3xl md:text-5xl font-bold text-background mb-6">
              Let's Work Together
            </h2>
            <p className="text-lg md:text-xl text-background mb-10 leading-relaxed">
              Let's create impactful digital solutions that boost your brand and online presence.
            </p>

            <div className="flex items-center mb-8">
              <div className="inline-flex bg-background text-primary p-5 text-4xl rounded-lg mr-6">
                <FaPhone className="w-8 h-8" />
              </div>
              <div>
                <p className="text-primary text-lg font-medium mb-1">Phone</p>
                <p className="text-background text-md">(+234) 814 874 8044</p>
              </div>
            </div>

            <div className="flex items-center mb-8">
              <div className="inline-flex bg-background text-primary p-5 text-4xl rounded-lg mr-6">
                <TbMailFilled className="w-8 h-8" />
              </div>
              <div>
                <p className="text-primary text-lg font-medium mb-1">Email</p>
                <p className="text-background text-md">Mustaphamexy112@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center mb-8">
              <div className="inline-flex bg-background text-primary p-5 text-4xl rounded-lg mr-6">
                <FaLocationDot className="w-8 h-8" />
              </div>
              <div>
                <p className="text-primary text-lg font-medium mb-1">Location</p>
                <p className="text-background text-md">Port Harcourt, Nigeria</p>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div data-aos="fade-down">
            <form
              ref={form}
              onSubmit={handleSubmit}
              className="bg-background p-8 rounded-2xl my-4"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-8">
                Contact <span className="text-primary">Mustapha!</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  required
                  className="p-6 bg-[#34373b] rounded-lg text-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-primary"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  className="p-6 bg-[#34373b] rounded-lg text-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-primary"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  required
                  className="p-6 bg-[#34373b] rounded-lg text-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-primary"
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Email Subject"
                  required
                  className="p-6 bg-[#34373b] rounded-lg text-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-primary"
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  required
                  className="col-span-1 md:col-span-2 p-6 bg-[#34373b] rounded-lg text-lg text-white placeholder-gray-400 h-80 resize-none focus:ring-2 focus:ring-primary"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn mt-8 px-12 py-4 bg-primary text-white text-lg font-semibold rounded-full hover:bg-[#8e4ec6] transition-all duration-300 hover:scale-105 shadow-lg"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

              {successMessage && (
                <p className="text-green-400 text-center mt-4">{successMessage}</p>
              )}
              {errorMessage && (
                <p className="text-red-400 text-center mt-4">{errorMessage}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
