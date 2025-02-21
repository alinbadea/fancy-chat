import { useState } from 'react';
import Chat from './my-components/Chat';
import { Message } from './models/models';

function App() {
  const [items, setItems] = useState<Message[]>([]);

  function handleUser1Send(text: string){
    setItems([...items,{
      id: items.length+1,
      from: 1,
      to: 2,
      content: text
    }]);
  }
  function handleUser2Send(text: string){
    setItems([...items,{
      id: items.length+1,
      from: 2,
      to: 1,
      content: text
    }]);
  }
  return (
    <>
      <div className='h-[100vh] 
      grid grid-cols-2 gap-2 flex-1'>
        <Chat onSend={handleUser1Send} messages={items.filter(m=>m.to==1)}/>
        <Chat onSend={handleUser2Send} messages={items.filter(m=>m.to==2)}/>
      </div>
    </>
  )
}

export default App
