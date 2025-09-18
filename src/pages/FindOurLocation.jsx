import "leaflet/dist/leaflet.css"
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import { motion } from "framer-motion"

export default function FindOurLocation (){

    return (
        <motion.div 
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 0.5}}
        className="location">
            <div className="infos">
                <div>
                    <h2>address: </h2>
                    <p>123 Tech Street, London, UK  </p>
                </div>
                <div>
                    <h2>Phone: </h2>
                    <p>+44 20 7946 0123 </p>
                </div>
                <div>
                    <h2>Email: </h2>
                    <p>support@quickfixrepair.com </p>
                </div>
                <div>
                    <h2>Time: </h2>
                    <p>Mon - Sat: 9:00 AM - 7:00 PM | Sun: Closed </p>
                </div>

            </div>
            <div className="map">
            <MapContainer center={[51.50735, -0.12776]} zoom={18}>
                <Marker position={[51.50735, -0.12776]} >
                </Marker>
                <TileLayer 
                    attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
                    url= 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
                />  
            </MapContainer>
            </div>
        </motion.div>
    )
}