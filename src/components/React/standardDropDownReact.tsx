import { useRef } from "react";
import LinkReact from "./LinkReact";

interface standardDropDownReactProps{
    text:string;
    elements:{ name: string; path: string; }[];
    message:string;
}

export default function standardDropDownReact({text,elements,message}:standardDropDownReactProps){
    const dropDawnRef = useRef(null)

    function handleClick(){
        dropDawnRef.current?.classList.add("show")
    }

    return(
        <div data-message={message}>
            <button id={"navDropDown_"+message.toLowerCase()} className="link primary dropdownBtn" onClick={handleClick}>
            {text}
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32">
                <path fill="white" d="M8.037 11.166L14.5 22.36c.825 1.43 2.175 1.43 3 0l6.463-11.195c.826-1.43.15-2.598-1.5-2.598H9.537c-1.65 0-2.326 1.17-1.5 2.6z" />
            </svg>
            </button>
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
        </div>
    )
}