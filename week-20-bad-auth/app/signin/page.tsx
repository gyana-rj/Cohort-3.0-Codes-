"use client"
import axios from "axios";
export default function SignIn(){
    return <div className="text-white">
        SignIn
        <br />
        <input type="text" />
        <input type="text" />
        <button onClick={async () => {
            const res = await axios.post("http://localhost:3000/api/signin", {
                username : "add",
                password : "skjn"
            })
            localStorage.setItem("token", res.data.token)
        }} >SignIn</button>

    </div>
}