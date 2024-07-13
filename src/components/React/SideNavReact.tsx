import navData from "../../data/navData";
import { IoClose } from "react-icons/io5";
import VerticalDropDown from "./VerticalDropDownReact";
import LinkReact from "./LinkReact";

interface SideNavReactProps{
    close: () => void;
}

const SideNavReact = ({close}:SideNavReactProps) =>{
    
    return(
        <div className="vertical-nav-container" id="vertical-nav-container">
            <div className="closeButton" id="closeIcon" onClick={close}>
            <IoClose size={35}/>
            </div>
            <ul className="verticalBar">
                {
                    navData.map((item,index) => (
                        item.type ==="dropdown" ? 
                        <VerticalDropDown
                            key={index}
                            text={item.name} 
                            elements={item.elements} 
                            message={item.name}/>
                        :
                        <LinkReact 
                            key={index}
                            href={item.path as string} 
                            text={item.name} 
                            style="primary" 
                            isVerticalSubelement={false}
                            isFilled={false}
                            borderVisible={false}
                            />
                    ))
                }
            </ul>
        </div> 
    )
}

export default SideNavReact;