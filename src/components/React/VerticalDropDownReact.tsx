import { RiArrowDropDownLine } from "react-icons/ri";
import LinkReact from "./LinkReact";


interface Props{
    text: string;
    elements:any;
    classes?: string;
    message:string;
}


const VerticalDropDown = ({
    text,
    elements,
    classes,
    message,
    ...rest
}:Props) =>{

    return(
        <>
            <button className="link primary dropdownBtn">
                {text}
                <RiArrowDropDownLine />
            </button>
            <ol>
                {
                    elements.map((e:{path:string;name:string}) =>(
                        <LinkReact 
                        text={e.name} 
                        href={e.path} 
                        style={"data-navLink"} />
                    ))
                }
            </ol>
        </>
        
    )
}

export default VerticalDropDown;