import {type Editor} from '@tiptap/react';
import {Bold, Italic, KeyRound, List, ListOrdered} from 'lucide-react';
import { Toggle } from '../components/ui/toggle';

interface ToolbarProps{
    editor: Editor | null;
}

const Toolbar: React.FC<ToolbarProps> = ({editor})=>{
    if(!editor) return null;
    function getClassName(action:string){
        return editor?.isActive(action)?'border border-black':'';
    }
    return (
        <div className="flex justify-start align-center border-b border-gray-400 flex-1">
            <Toggle size="sm" 
                pressed={editor.isActive("bold")}
                className={getClassName('bold')}
                onPressedChange={()=>editor.chain().focus().toggleBold().run()}
                >
                    <Bold/>
            </Toggle>
            <Toggle size="sm" 
                pressed={editor.isActive("italic")}
                className={getClassName('italic')}
                onPressedChange={()=>editor.chain().focus().toggleItalic().run()}
                >
                    <Italic/>
            </Toggle>
            <Toggle size="sm" 
                pressed={editor.isActive("bulletList")}
                className={getClassName('bulletList')}
                onPressedChange={()=>editor.chain().focus().toggleBulletList().run()}
                >
                    <List/>
            </Toggle>
            <Toggle size="sm" 
                pressed={editor.isActive("orderedList")}
                className={getClassName('orderedList')}
                onPressedChange={()=>editor.chain().focus().toggleOrderedList().run()}
                >
                    <ListOrdered/>
            </Toggle>
            <Toggle size="sm" 
                pressed={editor.isActive("spoiler")}
                className={getClassName('spoiler')}
                onPressedChange={()=>editor.chain().focus().toggleSpoiler().run()}
                >
                    <KeyRound/>
            </Toggle>
        </div>
    )
}

export default Toolbar;