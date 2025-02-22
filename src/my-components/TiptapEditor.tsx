import React, { useEffect, useState } from 'react';
import Toolbar from './Toolbar';
import StarterKit from '@tiptap/starter-kit';
import Spoiler from './Spoiler';
import { useEditor, EditorContent } from '@tiptap/react';
import { Button } from '@/components/ui/button';
import { Pencil, Trash2 } from 'lucide-react';

interface TiptapEditorProps{
    text?:string;
    onChange?: (text: string)=>void;
}

const TiptapEditor: React.FC<TiptapEditorProps> = ({text, onChange})=>{
    const [showToolbar, setShowToolbar] = useState(false);
    const editor = useEditor({
        content:text,
        onUpdate: ({editor})=>{
            if(onChange){
                onChange(editor.getHTML());
            }
        },
        extensions: [
            StarterKit,
            Spoiler.configure({
                HTMLAttributes: {
                    class: 'spoiler',
                    'data-spoiler': 'true',
                },
            }),
        ],
        editorProps:{
            attributes:{
                class:'flex-1 border-none focus-visible:ring-0 focus-visible:border-none focus-visible:outline-none p-1'
            }
        }
    });
    useEffect(() => {
        if (!editor) return;
        if (text === '') {
            editor.commands.clearContent();
        }
    }, [text, editor]);
    function handleToolbar(){
        if(showToolbar){
            editor?.commands.clearContent();
        }
        setShowToolbar(!showToolbar);
    }
    return (<div className='flex flex-col justify-stretch flex-1'>
                {
                    showToolbar && <Toolbar editor={editor}/>
                }
                
                <div className='flex justify-stretch items-center'>
                    <EditorContent editor={editor} className='flex flex-1 overflow-y-auto' />
                    {
                        // !showToolbar &&
                        <Button variant="ghost" 
                            className="cursor-pointer text-blue-700"
                            title={showToolbar?"Hide toolbar":"Show toolbar"}
                            onClick={handleToolbar}>
                            {showToolbar?<Trash2 className='w-4 h-4'/>:<Pencil className="w-4 h-4"/>}
                        </Button>
                    }
                </div>
                
            </div>)
}

export default TiptapEditor;