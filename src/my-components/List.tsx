import { Message } from "../models/models";
import parse, {Element, DOMNode, HTMLReactParserOptions} from 'html-react-parser';

const transform = (domNode: DOMNode) => {
    if(!(domNode instanceof Element) ||
        domNode.name !== "span" ||
        domNode.attribs.class !== "spoiler") {
        return;
    }
    
    return (
    <span
        style={{
            backgroundColor: "rgba(0, 0, 255, 0.5)",
            color: "black",
            cursor: "pointer",
            padding: "2px 4px",
            userSelect: "none",
            filter: "blur(5px)",
            transition: "filter 0.3s ease, background-color 0.3s ease",
        }}
        onClick={(e) => {
            const target = e.target as HTMLElement;
            target.style.filter = target.style.filter === "blur(5px)" ? "none" : "blur(5px)";
            target.style.backgroundColor = target.style.backgroundColor === "rgba(0, 0, 255, 0.5)" ? "transparent" : "rgba(0, 0, 255, 0.5)";
            target.style.userSelect = target.style.userSelect === "none" ? "auto" : "none";
        }}
    >
        {
            parse(domNode.children.
                filter((child)=> child.type === 'text')
                .map((child) => child.data)
                .join(""))
        }
    </span>
    );
};
const options:HTMLReactParserOptions = {
    replace: transform
};
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
        <li className="border border-1 border-gray-500 p-1 mb-1">
            {parse(message.content, options)}
        </li>
    )
}

export default List;