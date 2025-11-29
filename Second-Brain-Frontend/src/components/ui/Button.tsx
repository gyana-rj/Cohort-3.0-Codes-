import type { ReactElement } from "react";

interface ButttonProps {
    variant : "primary" | "secondary",
    size : "sm" | "md" | "lg",
    text : string,
    startIcon? : ReactElement,
    endIcon? : ReactElement,
    onClick : () => void
}

const variantStyles = {
    "primary" : "bg-purple-600 text-white",
    "secondary" : "bg-purple-300 text-blue-600"
}

const sizeStyles = {
    "sm" : "py-1 px-2 rounded-sm",
    "md" : "py-2 px-4 rounded-md",
    "lg" : "py-4 px-6 rounded-lg"
}

const defaultStyles = "rounded-md flex"

export const Button = (props : ButttonProps) => {
    return <button className= {`${variantStyles[props.variant]}${defaultStyles} ${sizeStyles[props.size]}`}>
    {props.startIcon ? <div className="pr-2 py-1">{props.startIcon}</div> : null} 
    {props.text}
    {props.endIcon}
    </button>
}

<Button variant="primary" size = "md" text = "share" onClick={() => {}}/>