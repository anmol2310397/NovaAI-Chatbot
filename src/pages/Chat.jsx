import react from 'react';
import { dataContext } from '../context/UserContext';
import { useContext } from 'react';
import { prevUser } from '../context/UserContext';
function Chat() {
    let {input, setInput, prevInput, setPrevInput} = useContext(dataContext);
    return (
        <div className="chat-page">
            <div className="user">
            <img src={prevUser.imgUrl} alt="" />
            <span>{prevUser.prompt}</span>
            </div>
            <div className="ai">
                <img src={prevUser.imgUrl} alt="" />
                <span>AI</span>
            </div>
        </div>
        
    )
}
export default Chat;