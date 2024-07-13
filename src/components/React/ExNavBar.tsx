import ExZoneLogo from "../../assets/Images/ExZoneLogo.png"

const ExNavBar = () =>{
    
    return(
        <nav >
            <a href="/exzone" aria-label="Go home">
                <img
                    src={ExZoneLogo.src}  
                    width={75} 
                    alt="Logo"/>
            </a>
            <div>
                <a>Login</a>
                <a>Register</a>
            </div>
            

        </nav>
    )
}

export default ExNavBar;