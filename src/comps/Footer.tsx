import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="flex items-center justify-between flex-col gap-8 sm:flex-row px-6 sm:px-0 py-8 pb-12">
        <a href={'/#navbar'}><h1 className="font-bold text-3xl text-white">MR</h1></a>
        <div className="flex items-center gap-4">
        <p className="text-gray-400 text-sm font-medium">
                +389 70 250 259
            </p>
            <p className="text-gray-400 text-sm font-medium">
                007lazi@gmail.com
            </p>
        </div>
        <div className="flex items-center gap-4 justify-center">
            <div className="flex items-center gap-4">
                <a href="https://www.facebook.com/muiz.rexhepi1" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-gray-100 text-lg" />
                </a>
                <a href="https://www.instagram.com/muiz.rexhepi/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="text-gray-100 text-lg" />
                </a>
                <a href="https://www.linkedin.com/in/muiz-rexhepi/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="text-gray-100 text-lg" />
                </a>
                <a href="https://github.com/Knuckleclot" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="text-gray-100 text-lg" />
                </a>
            </div>
        </div>
    </div>  
  )
}

export default Footer