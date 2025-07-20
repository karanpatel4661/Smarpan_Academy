import React from "react";
import { Star, Quote, GraduationCap, Trophy, BookOpen } from "lucide-react";

const Testimonials = () => {
  const testimonialsData = [
    {
      id: 1,
      name: "Priya Sharma",
      position: "Class 12 Student",
      course: "JEE Mathematics",
      message: "Samarpan Math Academy transformed my understanding of mathematics. The personalized attention and innovative teaching methods helped me score 98% in board exams and crack JEE with excellent marks.",
      image: "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
      rating: 5,
      achievement: "98% in Boards, JEE Qualified"
    },
    {
      id: 2,
      name: "Rahul Kumar",
      position: "Engineering Student",
      course: "Competitive Math",
      message: "The faculty at Samarpan is exceptional. Their problem-solving techniques and regular practice sessions gave me the confidence to excel in competitive exams. Highly recommended for serious students.",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
      rating: 5,
      achievement: "IIT Delhi Admission"
    },
    {
      id: 3,
      name: "Anita Singh",
      position: "Class 10 Student",
      course: "Foundation Mathematics",
      message: "I was struggling with mathematics before joining Samarpan. The teachers here made complex concepts so simple and interesting. Now I actually enjoy solving math problems!",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
      rating: 5,
      achievement: "95% in Class 10"
    },
    {
      id: 4,
      name: "Vikash Yadav",
      position: "NEET Aspirant",
      course: "NEET Mathematics",
      message: "The structured approach and regular assessments at Samarpan helped me identify my weak areas and improve systematically. The mathematics section in NEET became my strongest point.",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
      rating: 5,
      achievement: "NEET Qualified, AIIMS Selected"
    },
    {
      id: 5,
      name: "Sneha Gupta",
      position: "Class 11 Student",
      course: "Advanced Mathematics",
      message: "The online classes during COVID were seamlessly conducted. The interactive sessions and doubt clearing made learning from home as effective as classroom teaching.",
      image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
      rating: 5,
      achievement: "State Topper in Mathematics"
    },
    {
      id: 6,
      name: "Amit Raj",
      position: "Banking Aspirant",
      course: "Quantitative Aptitude",
      message: "The quantitative aptitude course here is outstanding. The shortcuts and techniques taught by the faculty helped me clear multiple banking exams with high scores in the math section.",
      image: "https://images.pexels.com/photos/2182975/pexels-photo-2182975.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
      rating: 5,
      achievement: "SBI PO Selected"
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-blue-50" />
     <div
       className={`absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%236366f1%22 fill-opacity=%220.05%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40`}
     />
 
      {/* Floating Shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl animate-float" />
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-br from-pink-400/20 to-orange-400/20 rounded-full blur-xl animate-bounce-slow" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-6 shadow-lg border border-white/50">
            <Trophy className="w-5 h-5 text-yellow-500" />
            <span className="text-slate-700 font-medium">Student Success Stories</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            What Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Students Say</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Discover how Samarpan Math Academy has transformed the academic journey of thousands of students across different courses and competitive exams.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/50 hover:shadow-2xl transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <div className="relative mb-6">
                <Quote className="w-8 h-8 text-blue-500/30 absolute -top-2 -left-2" />
                <div className="flex justify-between items-start">
                  <div className="flex space-x-1">
                    {renderStars(testimonial.rating)}
                  </div>
                  <div className="flex items-center space-x-2 bg-blue-50 rounded-full px-3 py-1">
                    <BookOpen className="w-4 h-4 text-blue-600" />
                    <span className="text-xs font-medium text-blue-700">{testimonial.course}</span>
                  </div>
                </div>
              </div>

              {/* Message */}
              <p className="text-slate-700 leading-relaxed mb-6 italic">
                "{testimonial.message}"
              </p>

              {/* Achievement Badge */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-3 mb-6">
                <div className="flex items-center space-x-2">
                  <GraduationCap className="w-5 h-5 text-green-600" />
                  <span className="text-green-800 font-semibold text-sm">{testimonial.achievement}</span>
                </div>
              </div>

              {/* Student Info */}
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover border-3 border-white shadow-lg group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <Star className="w-3 h-3 text-white fill-current" />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">{testimonial.name}</h4>
                  <p className="text-slate-600 text-sm">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/50 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-slate-600 mb-6">
              Start your journey towards mathematical excellence with personalized guidance and proven teaching methods.
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Start Learning Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;