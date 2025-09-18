import HeroSection from "../components/homepage/heroSection"
import BestOffers from "../components/homepage/BestOffers"
import UsedVerified from "../components/homepage/UsedVerified"
import FAQ from "../components/homepage/FAQ"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"


export default function HomePage (){

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
        initial={{opacity: 0}} // Pas besoin de guillemets pour les nombres
        animate={{opacity: 1}}
        transition={{duration: 0.5}} // Augmenter la durée pour la rendre visible (0.5s est une bonne valeur)
        className="homePage">
            <HeroSection />
            <BestOffers />
            <UsedVerified />
            <FAQ />
            <button onClick={()=>{window.scrollTo({top: 0, behavior: 'smooth'})}} style={{opacity: visible ? 1 : 0}} className="upPage">^</button>
        </motion.div>
    )
}