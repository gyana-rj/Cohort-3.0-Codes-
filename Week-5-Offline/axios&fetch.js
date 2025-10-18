const { response, text } = require("express");
const axios = require("axios");

// async function main(){
//     const response = await fetch("https://www.postb.in/1740207729034-2684113210998", {
//         method : "POST"
//     });
//     const textualData = await response.text();
//     console.log(textualData);
// }


async function main(){
    const response = await axios.post("https://httpdump.app/dumps/f3bf1401-e9d0-42c5-8c48-f409124bd07b",{
        username : "kirat",
        password : "123456"
    },{
        headers : {
            Authorization : "Bearer 123"
        }
    });
    console.log(response.data);

}
main();