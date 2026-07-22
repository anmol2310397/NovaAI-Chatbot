import { prevUser } from "./context/UserContext";
import { dataContext } from "./context/UserContext";
import { useContext } from "react";
import { user } from "./context/UserContext";


const Api_Url="https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash:generateContent?key=AQ.Ab8RN6I_mAYCpsvCNCi5NVJy3PvlxHs8UdnuNgZzjnT9MBIxbg"
export async function generateResponse() {
    let RequestOption = {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            "contents": [
    {
      "parts": [
        {
          "text": prevUser.prompt
        },
        prevUser.data?[{

          "inline_data": {
            "mime_type": prevUser.mime_type,
            "data": prevUser.data
          }
        }
        ]:[]
      
    ]}
  ]
        })
    }
    try{
        let response = await fetch(Api_Url,RequestOption)
        let data =await response.json()
        console.log(data);
        let apiResponse=data.candidates[0].content.parts[0].text.replace(/\*\*(.*?)\*\*/g, '$1').trim()
        return apiResponse
    }
    catch{
      console.log("Error in API call")
    }
}
