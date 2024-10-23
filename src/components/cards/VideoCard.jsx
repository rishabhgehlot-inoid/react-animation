/* eslint-disable react/prop-types */ import { motion } from "framer-motion";
import { fadeIn } from "../../animation/fadeIn";
const VideoCard = ({ videoUrl, title }) => {
  return (
    <motion.div
      className="w-full"
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.3 }}
    >
      <div className="relative w-full">
        <video
          src={videoUrl}
          loop
          autoPlay
          muted
          className="w-full h-full"
        ></video>
        <div className="mt-2 text-center absolute bottom-2 left-2 text-white">
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
      </div>
    </motion.div>
  );
};

export default VideoCard;
