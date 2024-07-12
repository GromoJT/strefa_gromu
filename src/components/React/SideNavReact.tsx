import navData from "../../data/navData";
import { IoClose } from "react-icons/io5";
import VerticalDropDown from "./VerticalDropDownReact";
import LinkReact from "./LinkReact";

const SideNavReact = () =>{
    
    return(
        <div className="vertical-nav-container" id="vertical-nav-container">
            <div className="closeButton" id="closeIcon">
            <IoClose size={35}/>
            </div>
            <ul className="verticalBar">
                {
                    navData.map((item) => (
                        item.type ==="dropdown" ? 
                        <VerticalDropDown 
                            text={item.name} 
                            elements={item.elements} 
                            message={item.name}/>
                        :
                        <LinkReact 
                            href={item.path as string} 
                            text={item.name} 
                            style="primary" 
                            isVerticalSubelement={false}
                            isFilled={false}
                            borderVisible={false}
                            data-navLink
                            />
                    ))
                }
            </ul>
        </div> 
    )
}

export default SideNavReact;