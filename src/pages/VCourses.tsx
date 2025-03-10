import Video from "../components/Video";
import "./responsive.css";

export default function VCourses() {
  return (
    <div className="courses_page w-screen min-h-screen">
      {/* Heading Section */}
      <div className="w-screen flex items-center pb-5 justify-center animated_courses_heading bg-gradient-to-tl from-blue-700 to-violet-800 h-50">
        <h1 className="text-white text-4xl uppercase">Demo darslar</h1>
      </div>
      
      {/* Video Container */}
      <div className="videos-container sm:flex-row pt-5 pb-10 flex items-center flex-wrap bg-gradient-to-br from-blue-500 to-violet-700 justify-around gap-10">
        {Array(9).fill(0).map((_, index) => (
          <Video
            key={index}
            lesson="Kirish Darsi Ingliz tili"
            src="https://youtu.be/-LgrMv4BDdY?si=r4QpFnOfJr3E0_cq"
            teacher="Otabek Mahkamov"
          />
        ))}
      </div>
    </div>
  );
}
