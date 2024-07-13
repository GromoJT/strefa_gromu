import { useEffect, useRef, useState } from "react";
import LinkReact from "./LinkReact";
import { TiArrowSortedDown } from "react-icons/ti";

interface standardDropDownReactProps{
    text:string;
    elements:{ name: string; path: string; }[];
    message:string;
}

export default function standardDropDownReact({text,elements,message}:standardDropDownReactProps){
    const dropDawnRef = useRef<HTMLInputElement>(null)
    const [openDropDown,setOpenDropDown] = useState(false)




    return(
        <div data-message={message}>
            <button id={"navDropDown_"+message.toLowerCase()} className="link primary dropdownBtn" onClick={()=>setOpenDropDown((prev)=>!prev)}>
            {text}
            <TiArrowSortedDown />
            </button>

            {
                openDropDown ? 
                <div id={"dropContent_"+message.toLowerCase()} className="dropdown-content" ref={dropDawnRef}>
                {
                    elements.map( (e: { path: string; name: string; }) => (
                    <LinkReact
                            key={e.path}
                            href={e.path}
                            text={e.name}
                            style="primary"
                            isFilled={false}
                            borderVisible={false}
                            isVerticalSubelement={false} 
                    />
                    ))
                }
            </div>
            :null
            }
            
        </div>
    )
}