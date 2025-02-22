import { Message } from "../models/models";
import parse from 'html-react-parser';

// const transform = (domNode: any) => {
// if (domNode instanceof Element3 && domNode.name === "span") {
//     return (
//     <span
//         style={{
//         backgroundColor: "black",
//         color: "black",
//         cursor: "pointer",
//         padding: "2px 4px",
//         transition: "color 0.3s",
//         }}
//         onClick={(e) => {
//         const target = e.target as HTMLElement;
//         target.style.color = target.style.color === "black" ? "white" : "black";
//         }}
//     >
//         {parse(domNode.children.map((child) => child.data).join(""))}
//     </span>
//     );
// }
// };

interface ListProps {
    items: Message[] | null;
}
const List: React.FC<ListProps> = ({items})=>{
    return (
        <div className="flex flex-col justify-end items-start flex-1 pb-2">
            <ul>
                {items?items.map((item)=>(
                    <ListItem key={item.id} message={item}/>
                )):null}
            </ul>
        </div>
    )
}

interface ListItemProps{
    message:Message;
}
const ListItem:React.FC<ListItemProps> = ({message})=>{
    return (
        <li className="border border-1 border-gray-500 p-1 mb-1">{parse(message.content/*, { replace: transform }*/)}</li>
    )
}

export default List;