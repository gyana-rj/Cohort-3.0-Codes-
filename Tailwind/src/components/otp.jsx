import { useRef, useState } from "react";
import { Button } from "./button";
export function Otp({ number }){
    const ref = useRef(Array(number).fill(0));
    const [otpValues, setOtpValues] = useState(Array(number).fill(""));
    const [disabled, setDisabled] = useState(true);

    return <div className="flex flex-col items-center">
         <div className="flex justify-center">
        {Array(number).fill(1).map((x, index) => <SubOtpBox reference = {e => ref.current[index] = e}key = {index} onDone={() => {
           if(index + 1 >= number){
            return
        }
        ref.current[index + 1].focus();
        }} onBack = {() => {
            if(index == 0){
                return
            }
            ref.current[index - 1].focus();
        }} />)}
        </div>
        <br />
        <Button disabled={disabled} > Sign up </Button>
        
    </div>
}

function SubOtpBox({reference, onDone, onBack}){
    const [inputBoxVal, setInputBoxVal] = useState("");
    return <div>
        <input value={inputBoxVal} ref = {reference} onKeyUp = {(e) => {
            if(e.key === "Backspace" && inputBoxVal === ""){
                onBack()
            }
        }}onChange = {(e) => {
            const val = e.target.value
            if (/^\d$/.test(val)) {
                setInputBoxVal(val);
                onDone();
            }
            else{
                setInputBoxVal("");
            }
        }} type="text" className=" m-1 w-[40px] h-[50px] rounded-xl bg-blue-500 outline-none px-4 text-white"/>
    </div>
}