import { useActiveLink } from "@/store";
import { useState } from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const activeTab = useActiveLink((link)=>link.active)
  const setActive = useActiveLink((link)=>link.setIsActive)

  const handleLink = (link:string) =>{
    setActive(link)
    console.log(activeTab)
  }
  
  const links = [
    {
      name:'home',
      link:'/',
    },
    {
      name:'work',
      link:'/work',
    },
    {
      name:'contact',
      link:'/contact',
    }
  ]


  return (
    <div id="navbar" className="w-full justify-between flex items-center py-6 px-6 lg:px-0">
        <Link to={'/'}><h1 className="font-bold text-3xl text-white">MR</h1></Link>
        <ul className="md:flex items-center gap-6 hidden">
          {links?.map((link)=>(
            <Link key={link?.name} to={link?.link}>
              <p className={`font-medium ${activeTab==link?.name?'text-green-600':'text-white'} text-lg capitalize`} onClick={()=>handleLink(link?.name)}>{link?.name}</p>
            </Link>
          ))}
        </ul>
        <div className="block md:hidden z-[2]">
      <button className="relative group" onClick={()=>setToggle(!toggle)}>
        <div className={`relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all duration-200`}>
          <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
            <div className={`bg-white h-[2px] w-7 transform transition-all duration-300 origin-left ${toggle&&'rotate-[42deg]'}`}></div>
            <div className={`bg-white h-[2px] w-1/2 rounded transform transition-all duration-300 ${toggle&&'-translate-x-10'}`}></div>
            <div className={`bg-white h-[2px] w-7 transform transition-all duration-300 origin-left ${toggle&&'rotate-[-42deg]'}`}></div>
          </div>
        </div>
      </button>
      <div className={`${toggle?'left-0':'left-[-500px] opacity-0'} lmdg:hidden h-min z-[44] p-4 shadow-sm bg-[#080A17] ease-in top-24 absolute duration-300 transition-all w-full items-center flex flex-col gap-12`}>
         {links?.map((link)=>(
          <Link to={link?.link} key={link?.name} className="text-gray-400 font-poppins uppercase font-normal text-lg">{link?.name}</Link>
        ))}
    </div>
    </div>
    </div>
  )
}

export default Navbar