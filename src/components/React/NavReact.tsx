'use client'
import ToMaszCoMasz_Logo from "../../assets/Images/ToMaszCoMasz_Logo.png";
import navData from "../../data/navData.js";
import StandardDropDownReact from "./standardDropDownReact.tsx";
import LinkReact from "./LinkReact.tsx";
import { useEffect, useState } from "react";
import { setWindowWidth,windowWidth } from "../../data/stores/windowWidthStore.js";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

export const prerender = false;

const NavReact = () => {

    const [sideMenuOpen,setSideMenuOpen] = useState(false);
    
    useEffect(()=>{
        function updateSize() {
            setWindowWidth(window.innerWidth)
            
          }
          window.addEventListener('resize', updateSize);
          updateSize();
          return () => window.removeEventListener('resize', updateSize);
    },[])



 
    return(
        <nav aria-label="Primary">
            <div className="navbar">
                <a href="/" className="logomark" aria-label="Go home">
                <img
                    src={ToMaszCoMasz_Logo.src}  
                    width={75} 
                    alt="Logo"/>
                </a>

                <ul className="normalTopBar">
                    {
                        navData.map((item,index) => (
                            item.type ==="dropdown" ? 
                            <StandardDropDownReact 
                                key={index} 
                                text={item.name} 
                                elements={item.elements} 
                                message={item.name}/>
                            :
                            <LinkReact 
                            key={index} 
                            text={item.name} 
                            href={item.path as string} 
                            style={"primary"}  
                            isFilled={false} 
                            borderVisible={false} 
                            isVerticalSubelement={false}                                                
                            />
                        ))
                    }
                </ul>

                <div className="burgerButton" id="menuIcon" >
                    <RxHamburgerMenu size="35px"/>
                </div>




            </div>
        </nav>
    )
}

export default NavReact;