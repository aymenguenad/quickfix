import logo from '../assets/myLogo.png'
import { useNavigate } from 'react-router-dom'

export default function Navbar () {
    const location= window.location.pathname

    const navigate = useNavigate()
    return (
        <>
            <div onClick={()=>{navigate('/')}} className='logoContainer'>
                <img id='logo' src={logo} alt="" />
            </div>
            <div className='navs'>
                <button style={{backgroundColor: location== '/repair' &&' #FF851B', color: location== '/repair' && 'white'}} onClick={()=>{navigate('/repair')}}>Repair</button>
                <button style={{backgroundColor: location== '/location' &&' #FF851B', color: location== '/location' && 'white'}} onClick={()=>{navigate('/location')}} >Find our location</button>
            </div>
        </>
    )
}