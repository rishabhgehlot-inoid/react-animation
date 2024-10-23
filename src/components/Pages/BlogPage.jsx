import VideoCard from "../cards/VideoCard";
import Container from "../Container";

const BlogPage = () => {
  return (
    <div className=" ">
      <VideoCard
        videoUrl={
          "https://videos.pexels.com/video-files/28870860/12500591_2560_1440_30fps.mp4"
        }
        title={"video"}
      />
      <VideoCard
        videoUrl={
          "https://videos.pexels.com/video-files/28870909/12500720_1920_1080_24fps.mp4"
        }
        title={"video"}
      />
      <Container>
        <VideoCard
          videoUrl={
            "https://videos.pexels.com/video-files/14066876/14066876-sd_404_720_30fps.mp4"
          }
          title={"video"}
        />
        <VideoCard
          videoUrl={
            "https://videos.pexels.com/video-files/28468875/12392244_1080_1920_25fps.mp4"
          }
          title={"video"}
        />
        <VideoCard
          videoUrl={
            "https://videos.pexels.com/video-files/28302272/12355404_1080_1920_60fps.mp4"
          }
          title={"video"}
        />
        <VideoCard
          videoUrl={
            "https://videos.pexels.com/video-files/14066876/14066876-sd_404_720_30fps.mp4"
          }
          title={"video"}
        />
      </Container>
      <VideoCard
        videoUrl={
          "https://videos.pexels.com/video-files/8968930/8968930-uhd_2732_1440_24fps.mp4"
        }
        title={"video"}
      />
      <VideoCard
        videoUrl={
          "https://videos.pexels.com/video-files/9239758/9239758-uhd_2560_1440_25fps.mp4"
        }
        title={"video"}
      />
    </div>
  );
};

export default BlogPage;
