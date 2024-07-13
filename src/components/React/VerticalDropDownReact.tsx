import { RiArrowDropDownLine } from "react-icons/ri";
import LinkReact from "./LinkReact";
import { useState } from "react";


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

    const [dropDownOpen,setDropDownOpen]=useState(false)

    return(
        <>
            <button className="link primary dropdownBtn" onClick={()=>setDropDownOpen((prev)=>!prev)}>
                {text}
                <RiArrowDropDownLine />
            </button>
           {
            dropDownOpen ?
            <ol>
            {
                elements.map((e:{path:string;name:string},index) =>(
                    <LinkReact 
                    key={index}
                    text={e.name} 
                    href={e.path} 
                    style={"data-navLink subElement"} />
                ))
            }
        </ol>
        : null
           }
        </>
        
    )
}

export default VerticalDropDown;