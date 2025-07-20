import React from "react";
import { server } from "../../main";
import { UserData } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { CourseData } from "../../context/CourseContext";
import { 
  Play, 
  Clock, 
  Users, 
  Star, 
  BookOpen, 
  Award,
  Trash2,
  ArrowRight
} from "lucide-react";

const CourseCard = ({ course }) => {
  const navigate = useNavigate();
  const { user, isAuth } = UserData();
  const { fetchCourses } = CourseData();

  const deleteHandler = async (id) => {
    if (confirm("Are you sure you want to delete this course")) {
      try {
        const { data } = await axios.delete(`${server}/api/course/${id}`, {
          headers: {
            token: localStorage.getItem("token"),
          },
        });

        toast.success(data.message);
        fetchCourses();
      } catch (error) {
        toast.error(error.response.data.message);
      }
    }
  };

  return (
    <div className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50 overflow-hidden hover:shadow-2xl transform hover:scale-105 hover:-translate-y-2 transition-all duration-300">
      {/* Course Image */}
      <div className="relative overflow-hidden">
        <img 
          src={`${server}/${course.image}`} 
          alt={course.title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Price Badge */}
        <div className="absolute top-4 right-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
          ₹{course.price}
        </div>
        
        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform duration-300">
            <Play className="w-8 h-8 text-blue-600 ml-1" />
          </div>
        </div>
      </div>

      {/* Course Content */}
      <div className="p-6">
        {/* Course Title */}
        <h3 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
          {course.title}
        </h3>

        {/* Course Meta */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2 text-slate-600">
            <Award className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium">{course.createdBy}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm font-medium text-slate-600">4.9</span>
          </div>
        </div>

        {/* Course Stats */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex items-center space-x-2 text-slate-600">
            <Clock className="w-4 h-4 text-purple-500" />
            <span className="text-sm">{course.duration} weeks</span>
          </div>
          <div className="flex items-center space-x-2 text-slate-600">
            <Users className="w-4 h-4 text-green-500" />
            <span className="text-sm">500+ students</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          {isAuth ? (
            <>
              {user && user.role !== "admin" ? (
                <>
                  {user.subscription.includes(course._id) ? (
                    <button
                      onClick={() => navigate(`/course/study/${course._id}`)}
                      className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 px-6 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                    >
                      <BookOpen className="w-5 h-5" />
                      <span>Continue Learning</span>
                    </button>
                  ) : (
                    <button
                      onClick={() => navigate(`/course/${course._id}`)}
                      className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                    >
                      <span>Get Started</span>
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  )}
                </>
              ) : (
                <button
                  onClick={() => navigate(`/course/study/${course._id}`)}
                  className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  <BookOpen className="w-5 h-5" />
                  <span>Manage Course</span>
                </button>
              )}
            </>
          ) : (
            <button 
              onClick={() => navigate("/login")} 
              className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          )}

          {/* Admin Delete Button */}
          {user && user.role === "admin" && (
            <button
              onClick={() => deleteHandler(course._id)}
              className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-red-500 to-red-600 text-white py-3 px-6 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <Trash2 className="w-5 h-5" />
              <span>Delete Course</span>
            </button>
          )}
        </div>

        {/* Course Features */}
        <div className="mt-4 pt-4 border-t border-slate-200">
          <div className="flex flex-wrap gap-2">
            <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
              Interactive
            </span>
            <span className="bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-xs font-medium">
              Expert Guidance
            </span>
            <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
              Certified
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;