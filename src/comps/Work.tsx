import Footer from "./Footer";
import Navbar from "./Navbar";

const Work = () => {
  return (
    <div className="flex justify-center w-full mx-auto relative min-h-screen bg-[#080A17]">
    <div className="absolute inset-0 h-full z-[0] w-full bg-[radial-gradient(#444444_0px,transparent_2px)] [background-size:12vw_12vw] [mask-image:radial-gradient(ellipse_75%_75%_at_50%_50%,#000_60%,transparent_100%)]"></div>
    <div className="absolute inset-0 z-[0] h-full w-full bg-[linear-gradient(to_right,#a6a6a612_1px,transparent_1px)] bg-[size:130px_130px] sm:bg-[size:20vw_20vw] [mask-image:radial-gradient(ellipse_75%_75%_at_50%_50%,#000_60%,transparent_100%)]"></div>
    <div className="lg:max-w-[60%] xl:max-w-[40%] z-[5] w-full">
      <Navbar />
      <div className="w-full bg-gray-500 h-[0.3px] my-4" />
      <Footer />
    </div>
  </div>
  );
};

export default Work;
