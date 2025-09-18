import { useState, useEffect } from "react"
export default function FAQ(){
    const [openIndex ,setOpenIndex] = useState(null)
    let show
        
    const qAndA= [
        {
            question: 'What types of devices do you repair?',
            answer: 'We repair smartphones, tablets, laptops, and gaming consoles of all major brands.'
        },
        {
            question: 'How long does a typical repair take?',
            answer: 'Most common repairs, like screen replacements or battery changes, can be done in under an hour. More complex issues may take longer.'
        },
        {
            question: 'Do you use original or certified replacement parts?',
            answer: 'Yes, we only use high-quality certified parts to ensure your device works like new.'
        },
        {
            question: 'Is there a warranty on the repairs?',
            answer: 'Absolutely. All our repairs come with a 3-month warranty for your peace of mind.'
        },
        {
            question: 'Do I need an appointment, or can I walk in?',
            answer: 'Walk-ins are welcome! However, booking an appointment guarantees faster service.'
        },
        {
            question: 'How much will my repair cost?',
            answer: 'Prices depend on the type of repair and device. We provide a free diagnosis and upfront quote before starting.'
        },
        {
            question: 'Can you repair water-damaged devices?',
            answer: 'Yes, we offer water-damage treatment. While not all devices can be fully restored, we’ll do everything possible to save your data and device.'
        },
        {
            question: 'Do you offer free diagnostics?',
            answer: 'Yes, we provide free diagnostics so you know exactly what’s wrong before committing to a repair.'
        },
        {
            question: 'What payment methods do you accept?',
            answer: 'We accept cash, credit/debit cards, and mobile payments for your convenience.'
        },
        {
            question: 'Do you sell pre-owned and verified devices?',
            answer: 'Yes, we offer certified pre-owned phones, tablets, and laptops, all verified by our professionals and backed with a 3-month warranty.'
        },
    ]
    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index)
    }


    return (
        <div className="FAQBox">
        <h1 className="FAQTxt">Frequently Asked Questions</h1>
        <div className="FAQ">
            {qAndA.map((e, i)=> {
                return (
                <div style={{width: '100%'}} key={i}>
                    <div className="qnda">
                        <h2>{e.question}</h2>
                        <button onClick={()=>{toggleFAQ(i)}} >{openIndex === i ? '-' : '+'}</button>
                    </div>

                    <div className={`answer ${openIndex === i ? 'open' : ''}`}>
                    <h3>{e.answer}</h3>
                    </div>
                    
                </div>
                )
            }) }
        </div>
        </div>
    )
}