import React, {useState} from 'react';
import '../App.css';
import { RiImageAiFill } from "react-icons/ri";
import { RiImageAddFill } from "react-icons/ri";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { GoPlus } from "react-icons/go";
import { FaArrowUp } from "react-icons/fa";
import { dataContext, user,prevUser } from '../context/UserContext';
import { useContext } from 'react';
import Chat from './Chat';
import { generateResponse } from '../gemini';
function Home() {
    const context = useContext(dataContext);

    console.log(context);
    let {startRes, setStartRes, popUp, setPopup, input, setInput, feature, setFeature, prevInput, setPrevInput} = useContext(dataContext);
   async function handleSubmit(e) {
        setStartRes(true);
        prevUser.data=user.data;
        prevUser.mime_type=user.mime_type;
        prevUser.imgUrl=user.imgUrl;
        prevUser.prompt=input;
        setInput("");
        let result =await generateResponse();
        console.log(result);
    }
    function handleImage(e){
        setFeature("upImg");
        let file=e.target.files[0];
        let reader=new FileReader();
        reader.onload=(event) => {
            let base64=event.target.result.split(",")[1];
            user.data=base64;
            user.mime_type=file.type;
            user.imgUrl=`data:${user.mime_type};base64,${user.data}`
    }
    // console.log(file);
    reader.readAsDataURL(file);
    }
    return (
        
            <div className="home">
                
                <nav>
                    <div className="logo">
                        NovaAI Bot
                    </div>
                </nav>
                <input type ="file" accept='image/*' hidden id='inputImg' onChange={(e) => {
                    handleImage
                }} />
                {!startRes? <div className="hero">
                    <span id="tag"> What can I help you with today?</span>
                    <div className="cate">
                        <div className="upImg" onClick={() => {
                            document.getElementById('inputImg').click()
                        }}>
                            <RiImageAddFill />
                            <span>Upload Image</span>
                        </div>
                        <div className="genImg" onClick={() => {setFeature("genImg")}}>
                            <RiImageAiFill />
                            <span>Generate Image</span>
                        </div>
                        <div className="chat" onClick={() => {setFeature("chat")}}>
                        <IoChatbubbleEllipsesOutline />
                        <span>Chat</span>
                        </div>
                    </div>
                </div>
                :
                <Chat />
}        
                

                <form className="input-box" onSubmit={(e) => {
                    e.preventDefault();
                    if(input.trim() !== "") {
                        handleSubmit(e);
                    }
                }}>
                    {popUp?
                <div className="pop-up">
                        <div className="select-up" onClick={() => {
                            document.getElementById('inputImg').click()
                        }}>
                            <RiImageAddFill />
                            <span>Upload Image</span>
                        </div>
                        <div className="select-gen" onClick={() => {setFeature("genImg")}}>
                            <RiImageAiFill />
                            <span>Generate Image</span>
                        </div>
                    </div> : null    
                }
                    
                     <div id="add" onClick={() => setPopup(prev => !prev)}>
                       { feature =="genImg"? <RiImageAiFill /> : feature == "chat"? <IoChatbubbleEllipsesOutline /> : <GoPlus />}
                    
                    </div>
                    <input type="text" placeholder="Ask Something..." onChange={(e) => setInput(e.target.value)} value={input} />
                    {input.trim() !== ""? <div id="submit">
                        <FaArrowUp />
                    </div> : null}
                    
                    
                </form>

            </div>
    );
}
export default Home;