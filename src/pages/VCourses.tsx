import Video from "../components/Video";
import "./responsive.css";
import { teachers } from "../components/render_teachers";

export default function VCourses() {
  return (
    <div className="courses_page w-screen min-h-screen">
      {/* Heading Section */}
      <div className="w-screen flex items-center pb-5 justify-center animated_courses_heading bg-gradient-to-tl from-blue-700 to-violet-800 h-50">
        <h1 className="text-white text-4xl uppercase">Demo darslar</h1>
      </div>
      
      {/* Video Container */}
      <div className="videos-container sm:flex-row pt-5 pb-10 flex items-center flex-wrap bg-gradient-to-br from-blue-500 to-violet-700 justify-around gap-10">
        {teachers.map((_, index) => (
          <Video
          teacher={_.Ismlar}
            key={index}
            lesson={_.Lavozim}
            src={_.video}
          />
        ))}
      </div>
    </div>
  );
}
