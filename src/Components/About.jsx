import "./About.css"
import logo from "../Image/logo.png"

const About=()=>{
    return(
        <div className="about-all">
            <h1>ABOUT US</h1>
            <div className="about">
                <img src={logo} alt="" />
                <div className="about-content">
                    <ul>
                        <li style={{marginBottom:"20px"}}>Khalifa Farm is an integrated farm with breeding operations and processing of commercial broilers, Noiler and Goat. We rear and distribute broilers and offer after sales technical services to customers. We produce and process broilers and goat meat for restaurants, hotels and catering services.</li>
                        <li style={{marginBottom:"20px"}}>We offer training services on how to rear fish, and feed formulation</li>
                        <li style={{marginBottom:"20px"}}>Khalifa farm as an Acqua farm for breeding and rearing of catfish</li>

                    </ul>
                </div>
            </div>

        </div>
    )
}
export default About;