import 'tiptap/core';

declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    toggleSpoiler: {
      toggleSpoiler: () => ReturnType;
    };
  }
}