import { Send } from "lucide-react";
import { Button } from "../components/ui/button";
import List from "./List";
import { useState } from "react";
import { Message } from "../models/models";
import TiptapEditor from "./TiptapEditor";

interface ChatProps{
    onSend: (text: string)=>void;
    messages: Message[] | null;
}
const Chat: React.FC<ChatProps> = ({onSend, messages})=>{
    const [text, setText] = useState('this is a test message');
    function handleSend(){
        onSend(text);
        setText('');
    }
    return (
        <div className="flex flex-col 
        justify-between align-start
        p-5 border border-gray-700 m-1">
            <List items={messages}/>
            <div className="flex justify-start items-center max-h-[7rem]
                border border-gray-400">
                <TiptapEditor text={text} onChange={setText}/>
                <Button variant="ghost" 
                    className="cursor-pointer self-end"
                    onClick={handleSend}>
                    <Send className="text-blue-700" size="32"/>
                </Button>
            </div>
        </div>
    )
}
export default Chat;