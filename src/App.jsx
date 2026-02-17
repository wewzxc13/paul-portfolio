import React from "react";
import { motion } from "framer-motion";
import {
  Laptop,
  Mail,
  Phone,
  Code2,
  FileDown,
  Github,
  Linkedin,
  Facebook,
  Bug,
  TestTube,
  FileCheck,
  BarChart3,
} from "lucide-react";

const projects = [
  {
    title: "Web-Based Student's Childhood Monitoring System with Analytics",
    description:
      "Developed and tested a web-based monitoring system featuring analytics dashboards and role-based access for teachers, parents, and administrators with real-time data updates.",
    tools: "JavaScript • Analytics Dashboard • Role-Based Access Control",
    image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
  },
  {
    title: "Website Quality Assurance Implementation",
    description:
      "Implemented rigorous testing protocols for websites to enhance user experience, service reliability, and compliance with design specifications.",
    tools: "Manual Testing • Functional Testing • Performance Testing",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
  },
  {
    title: "Service Compliance & Performance Testing",
    description:
      "Tested functionality, performance, and compliance of services against design standards to maintain high development quality and customer satisfaction.",
    tools: "Regression Testing • QA Documentation • Risk Assessment",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
  },
  {
    title: "Advanced Excel Data Tracking System",
    description:
      "Utilized advanced Excel to analyze data, track project progress, and support QA reporting and documentation processes.",
    tools: "Advanced Excel • Data Analysis • Reporting",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
  },
  {
    title: "WordPress Website Development & Optimization",
    description:
      "Built and optimized WordPress websites including theme customization, plugin configuration, and content management.",
    tools: "WordPress • SEO Optimization • CMS Management",
    image: "https://images.unsplash.com/photo-1509395176047-4a66953fd231",
  },
  {
    title: "QA Strategy Collaboration & Documentation",
    description:
      "Participated in team discussions to refine QA strategies and improve documentation standards for continuous improvement.",
    tools: "Documentation • Quality Control • Continuous Improvement",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
  },
];

export default function App() {
  return (
    <div className="scroll-smooth">
      {/* Navbar */}
      <header className="fixed top-0 w-full backdrop-blur-md bg-darkbg/70 border-b border-gray-700 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
          <div className="flex items-center gap-2 font-bold text-lg text-white">
            <Code2 className="text-teal-600" size={20} />
            Paul Andrew Nerona
          </div>
          <nav className="hidden md:flex gap-6 text-sm text-gray-300">
            <a href="#projects" className="hover:text-teal-400 transition">Projects</a>
            <a href="#about" className="hover:text-teal-400 transition">About</a>
            <a href="#skills" className="hover:text-teal-400 transition">Skills</a>
            <a href="#experience" className="hover:text-teal-400 transition">Experience</a>
            <a href="#contact" className="hover:text-teal-400 transition">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <a
              href="Paul_Nerona_CV.pdf" // relative path
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-teal-600 hover:bg-teal-500 text-white px-4 py-2 rounded-full text-sm transition"
            >
              <FileDown size={16} /> View CV
            </a>

          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-darkbg text-white">

        <span className="border border-teal-500 text-teal-400 px-4 py-1 rounded-full text-sm mb-6">
          Quality Assurance Intern • BSIT Student
        </span>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-4xl">
          Hi, I’m Paul Andrew Nerona —
        </h1>
        <p className="mt-6 text-gray-300 max-w-2xl">
          Quality Assurance Intern at YAHSHUA Outsourcing Worldwide, Inc. with hands-on experience in functional testing, performance validation, compliance testing, and advanced Excel-based reporting. Currently pursuing a Bachelor of Science in Information Technology and recognized as a Dean’s List student.
        </p>
        <div className="mt-8 flex gap-4">
          <a href="#projects" className="bg-teal-600 hover:bg-teal-500 text-white px-6 py-3 rounded-full transition">
            View My Work
          </a>
          <a href="#contact" className="border border-gray-600 px-6 py-3 rounded-full hover:border-teal-400 hover:text-teal-400 transition text-gray-300">
            Contact Me
          </a>
        </div>
        <p className="mt-6 text-gray-400 text-sm">Detail-Focused • Integrity • Adaptable • Continuous Improvement Mindset</p>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-6 bg-gray-900 text-white">

        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Professional Summary</h2>
          <p className="text-gray-300 leading-relaxed">
            I am a detail-focused Quality Assurance Intern currently working at YAHSHUA Outsourcing Worldwide, Inc. in Cagayan De Oro City. I actively participate in refining quality assurance strategies, implementing structured testing protocols, and ensuring services meet functionality and performance standards. My academic background as a BS Information Technology student strengthens my technical foundation in system development, analytics, and documentation. I am passionate about delivering reliable software solutions while continuously improving my technical and analytical skills.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 px-6 bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Key Projects & Contributions</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                className="rounded-2xl shadow-md border border-teal-400/20 overflow-hidden group"
              >
                <div className="relative">
                  <img
                    src={`${project.image}?auto=format&fit=crop&w=800&q=80`}
                    alt={project.title}
                    className="h-48 w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-teal-600/0 group-hover:bg-teal-600/30 transition" />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
                  <p className="text-gray-300 text-sm mb-3">{project.description}</p>
                  <p className="text-xs text-teal-400 mb-4">{project.tools}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-20 px-6 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Technical & Professional Skills</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: TestTube, title: "Quality Control & Testing", desc: "Functional, performance, and compliance testing of web services." },
              { icon: Bug, title: "Bug Reporting & Documentation", desc: "Detailed documentation skills with structured issue reporting." },
              { icon: BarChart3, title: "Advanced Excel & Data Tracking", desc: "Data analysis and progress tracking using advanced Excel tools." },
              { icon: Laptop, title: "System & Web Development", desc: "Basic system development and dashboard implementation experience." },
              { icon: FileCheck, title: "Risk Assessment", desc: "Identifying potential system risks and ensuring compliance with standards." },
              { icon: Code2, title: "WordPress Development", desc: "Theme customization, plugin installation, and site optimization." },
            ].map((skill, index) => (
              <div key={index} className="p-6 rounded-2xl shadow-md border border-teal-400/20">
                <skill.icon className="text-teal-600 mb-4" />
                <h3 className="font-semibold mb-2">{skill.title}</h3>
                <p className="text-gray-300 text-sm">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-20 px-6 bg-gray-800 text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
          <div className="space-y-10 border-l-2 border-teal-600 pl-6">
            <div>
              <h3 className="font-semibold">Quality Assurance Intern</h3>
              <p className="text-gray-300 text-sm">YAHSHUA Outsourcing Worldwide, Inc. • 12/2025 - Current</p>
              <ul className="text-gray-300 text-sm mt-3 list-disc ml-5 space-y-1">
                <li>Implemented structured website testing protocols to enhance reliability.</li>
                <li>Tested functionality, performance, and compliance against design specifications.</li>
                <li>Participated in team meetings to refine QA strategies and improve workflows.</li>
                <li>Utilized advanced Excel to analyze data and track project progress.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6 bg-gray-900 text-white">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Contact Me</h2>

          <div className="flex flex-col gap-4 text-gray-300 text-sm">
            <div className="flex items-center justify-center gap-3">
              <Laptop className="text-teal-600" size={18} />
              <span>Cagayan De Oro City, Philippines</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Mail className="text-teal-600" size={18} />
              <span>paulandrewnerona@gmail.com</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Phone className="text-teal-600" size={18} />
              <span>+63 920 391 4980</span>
            </div>
          </div>

          <div className="flex justify-center gap-6 mt-6">
            <a href="https://github.com/wewzxc13" target="_blank" rel="noopener noreferrer">
              <Github className="hover:text-teal-400 transition" />
            </a>
            <a href="https://www.linkedin.com/in/paul-andrew-nerona-206403258/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="hover:text-teal-400 transition" />
            </a>
            <a href="https://www.facebook.com/paulandrew.nerona/" target="_blank" rel="noopener noreferrer">
              <Facebook className="hover:text-teal-400 transition" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-darkbg border-t border-gray-700 py-10 px-6 text-gray-400">
        <div className="text-center text-gray-400 text-xs">
          © 2026 Paul Andrew Nerona • Quality Assurance Intern • Future QA Automation Engineer
        </div>
      </footer>
    </div>
  );
}
