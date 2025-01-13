import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    // Ustvarimo mailto povezavo
    const mailtoLink = `mailto:gjorgevaleks@gmail.com?subject=New message from ${name}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;

    // Odpri e-poštni odjemalec
    window.location.href = mailtoLink;
  };

  return (
    <motion.section
      className="py-8 px-4 text-foreground"
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold text-accent text-center mb-8">
        Contact Me
      </h2>
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row md:justify-between gap-8 md:gap-12">
        {/* Contact Information */}
        <div className="flex flex-col space-y-6 md:w-1/3">
          <h3 className="text-2xl font-extrabold text-center md:text-left">Aleksandar Gjorgev</h3>
          {/* Address */}
          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-accent text-2xl" />
            <span className="text-lg md:text-xl">1000 Ljubljana, Slovenia</span>
          </div>
          {/* Email Address */}
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-accent text-2xl" />
            <a
              href="mailto:gjorgevaleks@gmail.com"
              className="text-lg md:text-xl hover:text-blue-500 transition-all"
            >
              gjorgevaleks@gmail.com
            </a>
          </div>
          {/* LinkedIn */}
          <div className="flex items-center gap-4">
            <FaLinkedin className="text-accent text-2xl" />
            <a
              href="https://linkedin.com/in/aleksandar-gjorgev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg md:text-xl hover:text-blue-500 transition-all"
            >
              aleksandar-gjorgev
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <form className="w-full md:w-2/3 space-y-6" onSubmit={handleSubmit}>
          <motion.input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full p-4 bg-background text-foreground border border-muted rounded focus:outline-none focus:ring-2 focus:ring-accent"
            whileFocus={{ scale: 1.05 }}
            required
          />
          <motion.input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full p-4 bg-background text-foreground border border-muted rounded focus:outline-none focus:ring-2 focus:ring-accent"
            whileFocus={{ scale: 1.05 }}
            required
          />
          <motion.textarea
            name="message"
            placeholder="Your Message"
            className="w-full p-4 bg-background text-foreground border border-muted rounded focus:outline-none focus:ring-2 focus:ring-accent"
            rows="6"
            whileFocus={{ scale: 1.05 }}
            required
          />
          <motion.button
            type="submit"
            className="w-full bg-accent text-white py-4 rounded-lg shadow-lg hover:bg-blue-500 transition-all focus:outline-none focus:ring-4 focus:ring-accent focus:ring-opacity-50"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Submit
          </motion.button>
        </form>
      </div>
    </motion.section>
  );
}
