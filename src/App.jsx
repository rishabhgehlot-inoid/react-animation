import BlogCard from "./components/cards/BlogCard";
import ProjectCard from "./components/cards/ProjectCard";
import UserCard from "./components/cards/UserCard";
import VideoCard from "./components/cards/VideoCard";
import Container from "./components/Container";
import MobileFooter from "./components/MobileFooter";
import MobileHeader from "./components/MobileHeader";
import SideBar from "./components/SideBar";

const App = () => {
  return (
    <div className="">
      {/* <Header /> */}
      <MobileHeader />

      <Container>
        <BlogCard />
        <UserCard />
        <ProjectCard />
        <VideoCard
          videoUrl={
            "https://videos.pexels.com/video-files/14066876/14066876-sd_404_720_30fps.mp4"
          }
          title={"video"}
        />
      </Container>
      <VideoCard
        videoUrl={
          "https://videos.pexels.com/video-files/27640862/12192041_2560_1440_30fps.mp4"
        }
        title={"video"}
      />
      <VideoCard
        videoUrl={
          "https://videos.pexels.com/video-files/28826666/12487206_1920_1080_50fps.mp4"
        }
        title={"video"}
      />
      <VideoCard
        videoUrl={
          "https://videos.pexels.com/video-files/28870909/12500720_1920_1080_24fps.mp4"
        }
        title={"video"}
      />

      <MobileFooter />
    </div>
  );
};

// eslint-disable-next-line react/prop-types
export const SideBarLayOut = ({ children }) => {
  return (
    <div className=" flex w-screen fixed h-screen">
      <SideBar />
      <div className=" w-full h-full overflow-y-scroll">
        {children}
      </div>
    </div>
  );
};

export default App;
