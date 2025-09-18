import clientOne from '../../assets/positive-joyful-spanish-man-with-beard-wearing-blue-t-shirt-brightly-smiling-feeling-happy-about-day-off-work-people-emotions-concept.jpg'
import clientTwo from '../../assets/clientTwo.jpg'
import clientThree from '../../assets/clientThree.jpg'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Testimonials () {
    const [testimonial, setTestimonial] = useState(0)
    const [direction, setDirection]= useState('right')

    // ✅ Précharger toutes les images au montage
    useEffect(() => {
        const imgs = [clientOne, clientTwo, clientThree]
        imgs.forEach((src) => {
            const img = new Image()
            img.src = src
        })
    }, [])

    const nextTestimonial = () => {
        if (testimonial < 2) {
            setTestimonial(prev => prev + 1)
        } else {
            setTestimonial(0)
        }
        setDirection('right')
    }

    const prevTestimonial = () => {
        if (testimonial > 0) {
            setTestimonial(prev => prev - 1)
        } else {
            setTestimonial(2)
        }
        setDirection('left')
    }

    return (
        <div className="testimonials">
            <div className="tText">
                <h1>What Our Clients Say</h1>
                <h2>We’re proud of the trust our customers place in us. Here’s what some of them had to say about their Quick Fix experience:</h2>
            </div>
            <div className="tCards">
                <button onClick={prevTestimonial}>{'<'}</button>
                <AnimatePresence mode='wait'>
                    {testimonial === 0 && 
                        <motion.div 
                            key={0} 
                            initial={{ x: direction === 'right' ? 100 : -100, opacity: 0 }} 
                            animate={{ x: 0, opacity: 1 }} 
                            exit={{ x: direction === 'right' ? -100 : 100, opacity: 0 }} 
                            transition={{ duration: 0.3 }} 
                            className="card"
                        >
                            <img src={clientOne} alt="client" loading="eager" />
                            <div className="textCard">
                                <h2>⭐⭐⭐⭐⭐</h2>
                                <p>“I dropped my phone and the screen completely shattered. I thought I’d lose all my data, but Quick Fix repaired it in just 2 hours and it looks brand new! The staff was friendly and kept me updated the whole time. I’ll definitely come back if I ever need another repair.”</p>
                                <h2>– Jorge M.</h2>
                            </div>
                        </motion.div>
                    }

                    {testimonial === 1 && 
                        <motion.div 
                            key={1} 
                            initial={{ x: direction === 'right' ? 100 : -100, opacity: 0 }} 
                            animate={{ x: 0, opacity: 1 }} 
                            exit={{ x: direction === 'right' ? -100 : 100, opacity: 0 }} 
                            transition={{ duration: 0.3 }} 
                            className="card"
                        >
                            <img src={clientTwo} alt="client" loading="eager"/>
                            <div className="textCard">
                                <h2>⭐⭐⭐⭐⭐</h2>
                                <p>“My laptop suddenly stopped turning on and I was afraid I’d lose all my work. The technician quickly diagnosed the problem and replaced the faulty part the same day. The price was fair, and they even gave me a warranty on the repair. Super professional service.”</p>
                                <h2>– James K.</h2>
                            </div>
                        </motion.div>
                    }

                    {testimonial === 2 && 
                        <motion.div 
                            key={2} 
                            initial={{ x: direction === 'right' ? 100 : -100, opacity: 0 }} 
                            animate={{ x: 0, opacity: 1 }} 
                            exit={{ x: direction === 'right' ? -100 : 100, opacity: 0 }} 
                            transition={{ duration: 0.3 }} 
                            className="card"
                        >
                            <img src={clientThree} alt="client" loading="eager"/>
                            <div className="textCard">
                                <h2>⭐⭐⭐⭐⭐</h2>
                                <p>“I brought in my son’s game console after it stopped reading discs. The Quick Fix team explained exactly what was wrong, fixed it in less than 24 hours, and tested it with me before handing it back. Reliable, affordable, and trustworthy—I recommend them to everyone.”</p>
                                <h2>– Amine R.</h2>
                            </div>
                        </motion.div>
                    }
                </AnimatePresence>
                <button onClick={nextTestimonial} >{'>'}</button>
            </div>
        </div>
    )
}
