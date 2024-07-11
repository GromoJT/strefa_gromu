interface LinkReactProps {
    text:string;
    href:string;
    style:string;
    icon?: {
        name:string;
        side: "left" | "right";
    };
    isFilled?:boolean;
    borderVisible?: boolean;
    isVerticalSubelement?:boolean;
    classes?: string;
}

export default function LinkReact({text,href,style,icon,isFilled,borderVisible,isVerticalSubelement,classes,...rest}:LinkReactProps){
    return(
        <a 
            href={href}
            className={[
                "link",
                isVerticalSubelement ? "subElement": "",
                classes,
                style,
                isFilled ? "filled":"",
                borderVisible ? "bordered" : ""
            ].toString().replaceAll(","," ")}

                {...rest}

        >

        {/* {
            icon && icon.side === "left" && (
                // <Icon name={icon.name} height={24} width={24} />
            )
        } */}
        <span>{text}</span>
        {/* {
            icon && icon.side === "right" && (
                // <Icon name={icon.name} height={24} width={24} />
            )
        } */}

        </a>
    )
}