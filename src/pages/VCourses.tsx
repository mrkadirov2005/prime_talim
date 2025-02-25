import Video from "../components/Video";
import "./responsive.css";
export default function VCourses() {
  return (
    <div className="courses_page w-screen min-h-screen ">
      <div className="w-screen flex items-center pb-5 justify-center animated_courses_heading bg-gradient-to-tl from-orange-900   to-gray-800 h-50 ">
        <h1 className="text-white text-4xl uppercase  ">Demo darslar</h1>
      </div>
        <div className="videos-container sm:flex-row pt-5 pb-10 flex items-center flex-wrap bg-gradient-to-br from-orange-800 to-gray-950 justify-around gap-10">
            <Video lesson="Kirish Darsi Ingliz tili" src="https://www.youtube.com/embed/Mvm66F2CQZc?si=7nuzg1qf1B_qwKa7" teacher="Jamoliddin Isabaev"></Video>
            <Video lesson="Kirish Darsi Ingliz tili" src="https://www.youtube.com/embed/Mvm66F2CQZc?si=7nuzg1qf1B_qwKa7" teacher="Jamoliddin Isabaev"></Video>
            <Video lesson="Kirish Darsi Ingliz tili" src="https://www.youtube.com/embed/Mvm66F2CQZc?si=7nuzg1qf1B_qwKa7" teacher="Jamoliddin Isabaev"></Video>
            <Video lesson="Kirish Darsi Ingliz tili" src="https://www.youtube.com/embed/Mvm66F2CQZc?si=7nuzg1qf1B_qwKa7" teacher="Jamoliddin Isabaev"></Video>
            <Video lesson="Kirish Darsi Ingliz tili" src="https://www.youtube.com/embed/Mvm66F2CQZc?si=7nuzg1qf1B_qwKa7" teacher="Jamoliddin Isabaev"></Video>
            <Video lesson="Kirish Darsi Ingliz tili" src="https://www.youtube.com/embed/Mvm66F2CQZc?si=7nuzg1qf1B_qwKa7" teacher="Jamoliddin Isabaev"></Video>
            <Video lesson="Kirish Darsi Ingliz tili" src="https://www.youtube.com/embed/Mvm66F2CQZc?si=7nuzg1qf1B_qwKa7" teacher="Jamoliddin Isabaev"></Video>
            <Video lesson="Kirish Darsi Ingliz tili" src="https://www.youtube.com/embed/Mvm66F2CQZc?si=7nuzg1qf1B_qwKa7" teacher="Jamoliddin Isabaev"></Video>
            <Video lesson="Kirish Darsi Ingliz tili" src="https://www.youtube.com/embed/Mvm66F2CQZc?si=7nuzg1qf1B_qwKa7" teacher="Jamoliddin Isabaev"></Video>
          
        </div>
    </div>
  )
}
