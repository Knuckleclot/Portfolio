import { ArrowRight } from "lucide-react";
import { FaReact,FaNodeJs  } from "react-icons/fa";
import { SiTailwindcss, SiMongodb  } from "react-icons/si";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "@/components/ui/drawer"
import { Button } from "@/components/ui/button";
import { useState } from "react";
  
const Projects = () => {

    type Tech = {
        name: string;
        icon: JSX.Element;
      }

    type Project = {
        name: string;
        description: string;
        image:string;
        tech: Tech[];
    }

    const myProjects:Project[] = [
        {
            name:'Hakbus Web',
            description:'Hakbus Web is an online platform that allows users to conveniently book bus tickets from the comfort of their homes. Experience seamless ticket booking and travel planning through this user-friendly website.',
            image:'',
            tech: [
                { name: "React", icon: <FaReact className="text-white" size={25} /> },
                { name: "Node.js", icon: <FaNodeJs className="text-white" size={25} /> },
                { name: "Tailwind CSS", icon: <SiTailwindcss className="text-white" size={25} /> },
                { name: "MongoDB", icon: <SiMongodb className="text-white" size={25} /> },
              ],
        },
        {
            name:'Hakbus App',
            description:'Hakbus App brings the convenience of bus ticket booking to your mobile device. Available on the App Store and Play Store, it provides a user-friendly interface for on-the-go travelers.',
            image:'',
            tech: [
                { name: "React", icon: <FaReact className="text-white" size={25} /> },
                { name: "Node.js", icon: <FaNodeJs className="text-white" size={25} /> },
                { name: "Tailwind CSS", icon: <SiTailwindcss className="text-white" size={25} /> },
                { name: "MongoDB", icon: <SiMongodb className="text-white" size={25} /> },
              ],
        },
        {
            name:'Insylink Website/Dashboard',
            description:'Insylink Website/Dashboard serves as the online hub for the Insylink Point of Sale (POS) system designed for restaurants. Explore the website and utilize the dashboard for efficient management of restaurant operations.',
            image:'',
            tech: [
                { name: "React", icon: <FaReact className="text-white" size={25} /> },
                { name: "Node.js", icon: <FaNodeJs className="text-white" size={25} /> },
                { name: "Tailwind CSS", icon: <SiTailwindcss className="text-white" size={25} /> },
                { name: "MongoDB", icon: <SiMongodb className="text-white" size={25} /> },
              ],
        },
        {
            name:'Insylink POS App',
            description:'Insylink POS App is a mobile application (available on iOS and Android) that complements the Insylink POS system. Empower restaurant staff with a feature-rich POS solution on their mobile devices.',
            image:'',
            tech: [
                { name: "React", icon: <FaReact className="text-white" size={25} /> },
                { name: "Node.js", icon: <FaNodeJs className="text-white" size={25} /> },
                { name: "Tailwind CSS", icon: <SiTailwindcss className="text-white" size={25} /> },
                { name: "MongoDB", icon: <SiMongodb className="text-white" size={25} /> },
              ],
        },
        {
            name:'Insyllium',
            description:'Insyllium is the official website of a dynamic software development company. Explore our portfolio, services, and expertise in delivering innovative software solutions for various industries.',
            image:'',
            tech: [
                { name: "React", icon: <FaReact className="text-white" size={25} /> },
                { name: "Node.js", icon: <FaNodeJs className="text-white" size={25} /> },
                { name: "Tailwind CSS", icon: <SiTailwindcss className="text-white" size={25} /> },
                { name: "MongoDB", icon: <SiMongodb className="text-white" size={25} /> },
              ],
        },
    ];

    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const handleReadMoreClick = (project: Project) => {
      setSelectedProject(project);
    };

  return (
    <>
    <p className="text-white text-xl font-medium">Projects</p>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {myProjects?.map((project:Project)=>(
            <div className="p-4 flex flex-col gap-2 items-start justify-between bg-[#222222] rounded-lg">
                <p className="font-pnormal text-white">{project?.name}</p>
                <p className="font-pnormal text-gray-400">{project?.description}</p>
                <Drawer>
                    <DrawerTrigger asChild className="flex items-center gap-2">
                        <button className="text-green-600 font-normal" onClick={() => handleReadMoreClick(project)}>Read more <ArrowRight className="text-green-600"/></button>
                    </DrawerTrigger>
                    
                    <DrawerContent className="h-[90dvh] bg-[#222222] border-[#222222]">
                        <div className="mx-auto w-full max-w-sm px-6">
                        <DrawerHeader>
                            <DrawerTitle className="text-xl text-white">{selectedProject?.name}</DrawerTitle>
                        </DrawerHeader>
                        <div className="flex flex-wrap gap-4">
                            {selectedProject?.tech?.map((tech,index)=>(
                                <div key={index} className="bg-green-800/20 py-2 px-4 rounded-full flex-grow last:flex-grow-0">
                                    <p className="text-white text-sm md:text-lg text-center">{tech?.name}</p>
                                </div>
                            ))}
                        </div>
                        <div className="pt-4">
                            <img src={selectedProject?.image} alt="Project Image" className="object-contain block rounded-lg"/>
                        </div>
                        {/* <DrawerFooter>
                            <Button>Submit</Button>
                            <DrawerClose asChild>
                            <Button variant="outline">Cancel</Button>
                            </DrawerClose>
                        </DrawerFooter> */}
                        </div>
                    </DrawerContent>
                </Drawer>
                <div className="flex gap-2 items-center pt-2">
                {project?.tech?.map((tech, index) => (
                <div key={index}>{tech?.icon}</div>
              ))}
                </div>
            </div>
        ))}
    </div>
    </>
  );
}

export default Projects;
