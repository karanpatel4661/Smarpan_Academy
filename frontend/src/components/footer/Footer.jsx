import React from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  BookOpen,
  Users,
  Award,
  Send
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Courses", path: "/courses" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const popularCourses = [
    "Class 10 Mathematics",
    "Class 12 Mathematics",
    "JEE Preparation",
    "NEET Mathematics",
    "Competitive Exams"
  ];

  const achievements = [
    { icon: Users, label: "Students Taught", value: "5000+" },
    { icon: Award, label: "Success Rate", value: "95%" },
    { icon: BookOpen, label: "Courses", value: "50+" },
    { icon: GraduationCap, label: "Years Experience", value: "15+" },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Floating Shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary-500/10 rounded-full blur-xl animate-float" />
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-secondary-500/10 rounded-full blur-xl animate-bounce-slow" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
                  <GraduationCap className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gradient bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
                    Samarpan
                  </h3>
                  <p className="text-slate-400 text-sm">Math Academy</p>
                </div>
              </div>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Empowering students with excellence in mathematics education. 
                Building strong foundations for academic success and competitive examinations.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-slate-300">
                  <Phone className="w-5 h-5 text-primary-400" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center space-x-3 text-slate-300">
                  <Mail className="w-5 h-5 text-primary-400" />
                  <span>info@samarpanmath.com</span>
                </div>
                <div className="flex items-center space-x-3 text-slate-300">
                  <MapPin className="w-5 h-5 text-primary-400" />
                  <span>Bhagalpur, Bihar, India</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-semibold mb-6 text-white">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-slate-300 hover:text-primary-400 transition-colors duration-300 flex items-center space-x-2 group"
                    >
                      <span className="w-1.5 h-1.5 bg-primary-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Popular Courses */}
            <div>
              <h4 className="text-xl font-semibold mb-6 text-white">Popular Courses</h4>
              <ul className="space-y-3">
                {popularCourses.map((course) => (
                  <li key={course}>
                    <div className="text-slate-300 hover:text-primary-400 transition-colors duration-300 flex items-center space-x-2 group cursor-pointer">
                      <BookOpen className="w-4 h-4 text-primary-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <span>{course}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-xl font-semibold mb-6 text-white">Stay Updated</h4>
              <p className="text-slate-300 mb-6">
                Subscribe to our newsletter for latest updates and study materials.
              </p>
              <div className="space-y-4">
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 bg-slate-800 border border-slate-700 rounded-l-xl text-white placeholder-slate-400 focus:outline-none focus:border-primary-500 transition-colors duration-300"
                  />
                  <button className="px-6 py-3 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-r-xl hover:from-primary-700 hover:to-secondary-700 transition-all duration-300 transform hover:scale-105">
                    <Send className="w-5 h-5" />
                  </button>
                </div>
                
                {/* Social Links */}
                <div className="flex space-x-4 pt-4">
                  {[
                    { icon: Facebook, href: "#", color: "hover:text-blue-400" },
                    { icon: Twitter, href: "#", color: "hover:text-sky-400" },
                    { icon: Instagram, href: "#", color: "hover:text-pink-400" },
                    { icon: Youtube, href: "#", color: "hover:text-red-400" },
                  ].map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        className={`w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center text-slate-400 ${social.color} transition-all duration-300 transform hover:scale-110 hover:bg-slate-700`}
                      >
                        <Icon className="w-5 h-5" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements Section */}
        <div className="py-12 border-t border-slate-700">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-primary-400" />
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">{achievement.value}</div>
                  <div className="text-slate-400 text-sm">{achievement.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-slate-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-slate-400 text-center md:text-left">
              <p>&copy; {currentYear} Samarpan Math Academy. All rights reserved.</p>
              <p className="text-sm mt-1">
                Made with ❤️ by{" "}
                <span className="text-primary-400 font-semibold">Shravan Kumar</span>
              </p>
            </div>
            <div className="flex space-x-6 text-sm text-slate-400">
              <a href="#" className="hover:text-primary-400 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary-400 transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="hover:text-primary-400 transition-colors duration-300">
                Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;