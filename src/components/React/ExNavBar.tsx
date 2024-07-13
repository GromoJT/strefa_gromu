import ExZoneLogo from "../../assets/Images/ExZoneLogo.png"
import * as css from './styles/ExNavBar.module.css'

const ExNavBar = () =>{
    
    return(
        <nav className={css.Nav}>
            <a href="/exzone" className={css.logoMark} aria-label="Go home">
                <img
                    src={ExZoneLogo.src}  
                    width={75} 
                    alt="Logo"/>
            </a>
            <div className={css.loginRegisterDiv}>
                <a>Login</a>
                <a>Register</a>
            </div>
            

        </nav>
    )
}

export default ExNavBar;