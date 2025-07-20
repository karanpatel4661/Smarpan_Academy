import React from "react";
import { 
  GraduationCap, 
  Award, 
  Users, 
  BookOpen, 
  Target, 
  Heart, 
  Star,
  CheckCircle,
  TrendingUp,
  Globe,
  Lightbulb,
  Shield
} from "lucide-react";

const About = () => {
  const achievements = [
    { icon: Users, label: "Students Taught", value: "5000+", color: "from-blue-500 to-cyan-500" },
    { icon: Award, label: "Success Rate", value: "95%", color: "from-green-500 to-emerald-500" },
    { icon: BookOpen, label: "Courses Offered", value: "50+", color: "from-purple-500 to-pink-500" },
    { icon: TrendingUp, label: "Years Experience", value: "15+", color: "from-orange-500 to-red-500" },
  ];

  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for the highest standards in mathematics education, ensuring every student reaches their full potential."
    },
    {
      icon: Heart,
      title: "Dedication",
      description: "Our commitment to student success drives everything we do, from curriculum design to individual mentoring."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We continuously evolve our teaching methods to incorporate the latest educational technologies and techniques."
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "We maintain the highest ethical standards and build trust through transparency and honest communication."
    }
  ];

  const milestones = [
    { year: "2008", event: "Founded Samarpan Math Academy", description: "Started with a vision to make mathematics accessible and enjoyable for all students." },
    { year: "2012", event: "Reached 1000 Students", description: "Expanded our reach and established ourselves as a trusted name in mathematics education." },
    { year: "2016", event: "Introduced Online Classes", description: "Embraced digital learning to reach students across different geographical locations." },
    { year: "2020", event: "95% Success Rate Achieved", description: "Consistently maintained excellent results in board exams and competitive tests." },
    { year: "2023", event: "5000+ Students Milestone", description: "Celebrated teaching over 5000 students with continued excellence in education." }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%236366f1%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40" />

        {/* Floating Shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl animate-float" />
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-br from-pink-400/20 to-orange-400/20 rounded-full blur-xl animate-bounce-slow" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
              About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Samarpan</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Empowering students with excellence in mathematics education for over 15 years. 
              Building strong foundations for academic success and competitive examinations.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div key={index} className="text-center group">
                  <div className={`w-20 h-20 bg-gradient-to-br ${achievement.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-slate-900 mb-2">{achievement.value}</div>
                  <div className="text-slate-600 font-medium">{achievement.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-blue-50/50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Founder Image */}
            <div className="relative">
              <div className="relative w-full max-w-md mx-auto">
                <div className="absolute -inset-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-3xl blur opacity-20 animate-pulse-slow" />
                <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-white/50">
                  <div className="w-full h-80 bg-gradient-to-br from-slate-200 to-slate-300 rounded-2xl flex items-center justify-center mb-6">
                    <div className="text-center">
                      <GraduationCap className="w-16 h-16 text-slate-500 mx-auto mb-4" />
                      <p className="text-slate-600 font-medium">M.K Yadav</p>
                      <p className="text-slate-500 text-sm">Founder & Director</p>
                    </div>
                  </div>
                  
                  {/* Credentials */}
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full" />
                      <span className="text-slate-700 font-medium">MSC Mathematics</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full" />
                      <span className="text-slate-700 font-medium">BSC from TNB College, Bhagalpur</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full" />
                      <span className="text-slate-700 font-medium">BNMU University</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Founder Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-slate-900 mb-6">
                  Meet Our <span className="text-gradient">Founder</span>
                </h2>
                <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                  <p>
                    <strong className="text-slate-900">M.K Yadav</strong> is the visionary founder and director of Samarpan Math Academy. 
                    With over 15 years of dedicated experience in mathematics education, he has transformed the lives of thousands of students.
                  </p>
                  <p>
                    Holding an MSC in Mathematics and a BSC from TNB College, Bhagalpur (BNMU University), 
                    M.K Yadav combines deep subject expertise with innovative teaching methodologies to make mathematics 
                    accessible and enjoyable for students of all levels.
                  </p>
                  <p>
                    His passion for education and commitment to student success has established Samarpan Math Academy 
                    as one of the most trusted names in mathematics coaching in Bhagalpur and beyond.
                  </p>
                </div>
              </div>

              {/* Key Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: Award, text: "15+ Years Teaching Experience" },
                  { icon: Users, text: "5000+ Students Mentored" },
                  { icon: Star, text: "95% Success Rate" },
                  { icon: Globe, text: "Recognized Excellence" }
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-center space-x-3 bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/50">
                      <Icon className="w-6 h-6 text-blue-600" />
                      <span className="text-slate-700 font-medium">{item.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Mission & Vision
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Driving educational excellence through innovative teaching and unwavering commitment to student success.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-blue-100 leading-relaxed text-lg">
                To provide exceptional mathematics education that empowers students to achieve academic excellence, 
                develop critical thinking skills, and build confidence in their mathematical abilities. We are committed 
                to making mathematics accessible, engaging, and relevant for every student.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-blue-100 leading-relaxed text-lg">
                To be the leading mathematics education institution that transforms students into confident, 
                analytical thinkers who excel in academics and contribute meaningfully to society. We envision 
                a future where every student discovers the beauty and power of mathematics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-blue-50/50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Our Core <span className="text-gradient">Values</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              The principles that guide our approach to education and shape our commitment to student success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="group text-center">
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:shadow-2xl transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 h-full">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">{value.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-indigo-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Our <span className="text-gradient">Journey</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Milestones that mark our continuous growth and commitment to educational excellence.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />

            <div className="space-y-16">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300">
                      <div className="text-2xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3">{milestone.event}</h3>
                      <p className="text-slate-600 leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="relative z-10 w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full border-4 border-white shadow-lg" />
                  
                  <div className="w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900" />
        <div
       className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2260%22%20height=%2260%22%20viewBox=%220%200%2060%2060%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cg%20fill=%22%236366f1%22%20fill-opacity=%220.05%22%3E%3Ccircle%20cx=%2230%22%20cy=%2230%22%20r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"
        />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Join Our Success Story
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Become part of our growing family of successful students and experience the difference quality education makes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group flex items-center space-x-3 bg-white text-blue-900 px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
              <BookOpen className="w-6 h-6" />
              <span>Explore Courses</span>
            </button>
            
            <button className="flex items-center space-x-3 border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white hover:text-blue-900 transition-all duration-300">
              <Users className="w-6 h-6" />
              <span>Contact Us</span>
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-blue-200">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span>Trusted by 5000+ Students</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span>15+ Years of Excellence</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span>95% Success Rate</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;