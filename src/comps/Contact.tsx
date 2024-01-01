import Navbar from './Navbar'

const Contact = () => {
  return (
    <div className="flex justify-center w-full mx-auto relative min-h-screen">
    <div className="absolute inset-0 z-[0] h-full w-full bg-[linear-gradient(to_right,#80808015_2px,transparent_1px)] bg-[size:130px_130px] sm:bg-[size:20vw] [mask-image:radial-gradient(ellipse_65%_65%_at_50%_50%,#000_60%,transparent_100%)]"></div>
    <div className="lg:max-w-[80%] xxl:max-w-[60%] z-[5] w-full">
      <Navbar />
    </div>
  </div>
  )
}

export default Contact