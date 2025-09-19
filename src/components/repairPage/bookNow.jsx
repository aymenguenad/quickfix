import { useState, useEffect } from 'react'
import randomForms from '../../assets/random forms.png'
import randomTwo from '../../assets/random2.png'

export default function BookNow () {
    const [confPopUp, setConfPopUp]= useState(false)

    useEffect(()=>{
        if(confPopUp){
            setTimeout(()=>{
                setConfPopUp(false)
            },3000)
        }
    },[confPopUp])

    const handleBooking = () => {
        setConfPopUp(true)
    }

    return (
        <div className='bookingSection'>
            <div style={{top: confPopUp ? '0%' : '-10%'}} className='popUp'>
                <p>Consultation Booked √</p>
            </div>

            <img id='deco2' src={randomTwo} alt="deco" />
            <form id='booking' className='bookNow' action="">
            <h1>Book Now!</h1>
            <label htmlFor="">Full Name:</label>
            <input type="text" placeholder='Ex. John Doe'/>

            <label htmlFor="">Email: </label>
            <input type="text" placeholder='Ex. example@example.com'/>

            <label htmlFor="">Phone Number: </label>
            <input type="number" placeholder='Ex. 08 88 88 88 88'/>

            <label htmlFor="">Problem: </label>
            <input type="text" placeholder="Ex. Phone won't turn on, screen cracked... "/>

            <button type='button' onClick={handleBooking} >Book Now</button>
            <p>Note: Few moments after booking your consultation, you'll receive an email with more details.</p>
            </form>
        </div>
    )
}