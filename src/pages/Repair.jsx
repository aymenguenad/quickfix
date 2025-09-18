import { useState, useEffect } from "react";
import HeroSection from "../components/repairPage/heroSection";
import WhyChooseUs from "../components/repairPage/whyChooseUs";
import Testimonials from "../components/repairPage/testimonials";
import BookNow from "../components/repairPage/bookNow";
import { motion } from "framer-motion";

export default function Repair () {
const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        if (window.scrollY > 200) {
            setVisible(true);
        } else {
            setVisible(false);
        }
        };

        window.addEventListener("scroll", handleScroll);

        // Nettoyage
        return () => {
        window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <motion.div 
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 0.5}}
        className="repair">
            <HeroSection />
            <WhyChooseUs />
            <Testimonials />
            <BookNow />
            <button onClick={()=>{window.scrollTo({top: '0', behavior: 'smooth'})}} style={{opacity: visible ? '1' : '0'}} className="upPage">^</button>
        </motion.div>
    )
}