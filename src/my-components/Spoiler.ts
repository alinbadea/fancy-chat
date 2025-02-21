import {Mark, RawCommands, mergeAttributes} from '@tiptap/core';


const Spoiler = Mark.create({
    name: 'spoiler',
    group: 'inline',
    inline: true,
    selectable: false,
    atom: true,

    addOptions: () => {
        return {
            HTMLAttributes:{
                class:"spoiler",
                "data-spoiler": "true",
            }
        };
    },

    parseHTML() {
        return [
          {
            tag: 'span.spoiler',
          },
        ];
    },
    
    renderHTML({ HTMLAttributes }) {
        return ['span', mergeAttributes(this.options.HTMLAttributes, HTMLAttributes), 0];
    },

    addCommands() {
        return {
          toggleSpoiler: () => ({ chain }) => {
            return chain().toggleMark(this.name).run();
          },
        } as Partial<RawCommands>;;
    },
});

export default Spoiler;