import { useState } from 'react';
import { data } from './data';
import './App.css';

function App() {
  const [gifts, setGifts] = useState(data);

  const removeGift = (id) => {
    let newGifts = gifts.filter(gift => gift.id !== id);
    setGifts(newGifts);
  }

  return (
    <div>
      <div className='container'>
        <h1>List of my {gifts.length} gifts</h1>
      </div>

      {gifts.map((gift => {
        const {id, itemName, image} = gift;

        return (
          <div key={id}>
            <div className='container'>
              <h2>{id}. {itemName}</h2>
            </div>
            
            <div className='container'>
              <img src={image} alt='Gift' width="300px"/>
            </div>

            <div className='container'>
              <button onClick={() => removeGift(id)}>Delete</button>
            </div>
          </div>
        )
      }))}

      <div className='container'>
        <button onClick={() => setGifts([])}>Delete All</button>
      </div>
      
    </div>
  );
}

export default App;
