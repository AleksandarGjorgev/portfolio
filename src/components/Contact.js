"use client";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaMapMarkerAlt, FaGithub, FaTerminal, FaCode, FaPaperPlane } from "react-icons/fa";

const MotionSection = motion.section;
const MotionH2 = motion.h2;
const MotionDiv = motion.div;
const MotionForm = motion.form;
const MotionButton = motion.button;

export default function Contact() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        alert("Email successfully sent!");
        form.reset();
      } else {
        const errorData = await response.json();
        alert(`Failed to send email: ${errorData.error}`);
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert("An error occurred. Please try again.");
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <MotionSection
      className="py-16 px-4 text-foreground bg-background relative overflow-hidden"
      id="contact"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Decorative Code Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 text-accent/5 text-6xl font-mono">
          {"<contact>"}
        </div>
        <div className="absolute bottom-20 left-10 text-accent/5 text-6xl font-mono">
          {"</contact>"}
        </div>
      </div>

      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <MotionDiv
          className="text-center mb-12"
          variants={itemVariants}
        >
          <div className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-accent/20 inline-block">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="text-sm text-muted ml-2">contact.js</span>
            </div>
            <h2 className="text-4xl font-bold">
              <span className="text-accent">&lt;</span>
              Get In Touch
              <span className="text-accent">/&gt;</span>
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full mt-4"></div>
          </div>
        </MotionDiv>

        <div className="flex flex-col md:flex-row md:justify-between gap-12">
          {/* Contact Information */}
          <MotionDiv 
            className="flex flex-col space-y-8 md:w-1/3 bg-card/50 backdrop-blur-sm p-8 rounded-lg border border-accent/20 shadow-xl"
            variants={itemVariants}
          >
            <div className="flex items-center gap-3">
              <FaCode className="text-2xl text-accent" />
              <h3 className="text-2xl font-bold text-accent">Let's Connect</h3>
            </div>
            <p className="text-muted text-center md:text-left">
              <span className="text-accent">//</span> I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>
            
            {/* Contact Details */}
            <div className="space-y-6">
              <MotionDiv 
                className="flex items-center gap-4 p-4 rounded-lg hover:bg-accent/10 transition-all group"
                whileHover={{ x: 5 }}
              >
                <div className="bg-accent/10 p-3 rounded-lg group-hover:bg-accent/20 transition-all">
                  <FaMapMarkerAlt className="text-accent text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-white group-hover:text-accent transition-colors">Location</h4>
                  <span className="text-muted">1000 Ljubljana, Slovenia</span>
                </div>
              </MotionDiv>

              <MotionDiv 
                className="flex items-center gap-4 p-4 rounded-lg hover:bg-accent/10 transition-all group"
                whileHover={{ x: 5 }}
              >
                <div className="bg-accent/10 p-3 rounded-lg group-hover:bg-accent/20 transition-all">
                  <FaEnvelope className="text-accent text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-white group-hover:text-accent transition-colors">Email</h4>
                  <a
                    href="mailto:gjorgevaleks@gmail.com"
                    className="text-muted hover:text-accent transition-colors"
                  >
                    gjorgevaleks@gmail.com
                  </a>
                </div>
              </MotionDiv>

              <MotionDiv 
                className="flex items-center gap-4 p-4 rounded-lg hover:bg-accent/10 transition-all group"
                whileHover={{ x: 5 }}
              >
                <div className="bg-accent/10 p-3 rounded-lg group-hover:bg-accent/20 transition-all">
                  <FaLinkedin className="text-accent text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-white group-hover:text-accent transition-colors">LinkedIn</h4>
                  <a
                    href="https://linkedin.com/in/aleksandar-gjorgev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted hover:text-accent transition-colors"
                  >
                    aleksandar-gjorgev
                  </a>
                </div>
              </MotionDiv>

              <MotionDiv 
                className="flex items-center gap-4 p-4 rounded-lg hover:bg-accent/10 transition-all group"
                whileHover={{ x: 5 }}
              >
                <div className="bg-accent/10 p-3 rounded-lg group-hover:bg-accent/20 transition-all">
                  <FaGithub className="text-accent text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-white group-hover:text-accent transition-colors">GitHub</h4>
                  <a
                    href="https://github.com/AleksandarGjorgev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted hover:text-accent transition-colors"
                  >
                    AleksandarGjorgev
                  </a>
                </div>
              </MotionDiv>
            </div>
          </MotionDiv>

          {/* Contact Form */}
          <MotionForm 
            className="w-full md:w-2/3 space-y-6 bg-card/50 backdrop-blur-sm p-8 rounded-lg border border-accent/20 shadow-xl"
            onSubmit={handleSubmit}
            variants={itemVariants}
          >
            <div className="flex items-center gap-3 mb-6">
              <FaTerminal className="text-2xl text-accent" />
              <h3 className="text-2xl font-bold text-accent">Send Message</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <MotionDiv
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <label className="block text-sm font-medium text-muted mb-2">
                  <span className="text-accent">//</span> Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  className="w-full p-4 bg-background/50 text-foreground border border-accent/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                  required
                />
              </MotionDiv>

              <MotionDiv
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <label className="block text-sm font-medium text-muted mb-2">
                  <span className="text-accent">//</span> Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  className="w-full p-4 bg-background/50 text-foreground border border-accent/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                  required
                />
              </MotionDiv>
            </div>

            <MotionDiv
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <label className="block text-sm font-medium text-muted mb-2">
                <span className="text-accent">//</span> Your Message
              </label>
              <textarea
                name="message"
                placeholder="Hello! I'd like to talk about..."
                className="w-full p-4 bg-background/50 text-foreground border border-accent/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all min-h-[200px] resize-none"
                required
              />
            </MotionDiv>

            <MotionButton
              type="submit"
              className="w-full bg-accent text-white py-4 rounded-lg shadow-lg hover:shadow-accent/20 transition-all focus:outline-none focus:ring-4 focus:ring-accent focus:ring-opacity-50 font-semibold flex items-center justify-center gap-2 group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaPaperPlane className="group-hover:translate-x-1 transition-transform" />
              Send Message
            </MotionButton>
          </MotionForm>
        </div>
      </div>
    </MotionSection>
  );
}
