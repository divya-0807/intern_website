import { IoSettingsSharp } from "react-icons/io5";
import { FaImage, FaLeaf } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

export const MISSION_PARA1 = "We believe that ensuring AI systems in healthcare are ethical and unbiased is essential to achieving equitable patient outcomes. Our mission is to lead the development of AI tools that enhance trust and transparency in healthcare.";

export const MISSION_PARA2 = "Rigorous research and development require collaboration and commitment. With a dedicated team and cutting-edge tools, we tackle the challenges of bias and compliance in AI. Join our mission to build a healthcare system that serves everyone fairly. Reach out via email for more information.";

export const MISSION_PARA3 = "We value every contribution, whether it’s in research, development, or spreading awareness. At FairMD, we are constantly evolving our solutions, improving documentation, and implementing ethical standards in AI.";

export const FIGURE_LIST = [
    {
        icon: <IoSettingsSharp className="text-white text-5xl" />, 
        title: "Bias Detection and Mitigation",
        description: "Developing innovative software to ensure medical AI models are fair, equitable, and compliant with the latest regulations",
    },
    {
        icon: <FaImage   className="text-white text-5xl" />, 
        title: "Empowering NHS Trusts",
        description: "Helping healthcare providers test and deploy ethical AI systems that reduce disparities and improve patient outcomes",
    },
    {
        icon: <FaLeaf  className="text-white text-5xl"  />,
        title: "Closing Healthcare Gaps",
        description: "Aiming to build trust in AI-driven healthcare by addressing data biases and promoting equitable care across diverse populations",
    },
    {
        icon: <FaLeaf  className="text-white text-5xl" />,
        title: "Compliance Tools",
        description: "Our tools ensure your AI systems comply with the latest healthcare regulations, maintaining transparency and trust in AI-driven care.",
    },
];

export const CONTACT_US = "​We are a dedicated team of experts committed to transforming healthcare through ethical AI. Our solutions are designed to ensure fairness, equity, and compliance in medical AI models. We partner with healthcare providers and organizations of all sizes, helping them to implement and manage AI systems that improve patient outcomes and build trust in technology-driven care.";
export const CONTACT_DETAILS = {
    title: "FairMD Ltd. | 15892761",
    address: "1 Royal Street, Canterbury House London SE1 7LL",
    phoneno: {
        icon: <FaPhoneAlt />, // Store the icon separately
        text: "+44 74357 96246", // Store the text separately
    },
    mail: {
        icon: <IoMdMail />, // Store the icon separately
        text: "contact@fairmd.ai", // Store the text separately
    },
};