import React from 'react';
import TravlImgCard from './home'
import './App.css';
import './home.css';
import './topBar.css'
import Topbar from './topBar';


function App() {

  const trvlImgData = [
    {
      "id": "1",
      "title": "Croissants | Flour and Stone",
      "thumbnail": "https://i.imgur.com/hUsenJx.jpg"
    },
    {
      "id": "2",
      "title": "Santorini Island's Greece",
      "thumbnail": "https://i.imgur.com/dXpuo9T.jpg"
    },
    {
      "id": "3",
      "title": "Bagan, Myanmar",
      "thumbnail": "https://i.imgur.com/GuWgKAU.jpg"
    },
    {
      "id": "4",
      "title": "Li River, China",
      "thumbnail": "https://i.imgur.com/5qDtOiC.jpg"
    },
    {
      "id": "5",
      "title": "Eiffel Tower",
      "thumbnail": "https://i.imgur.com/kawk5j2.jpg"
    },
    {
      "id": "6",
      "title": "Cinque Terre | Italy",
      "thumbnail": "https://i.imgur.com/nJsevTH.jpg"
    }
  ]

  const trvlCards = trvlImgData.map((elem) => {
    return(
      <TravlImgCard thumbnail = {elem.thumbnail} title = {elem.title} />
    );
  }) 

  return (
    <div>
      
       <Topbar />
       <div className="ImgGrid">
         {trvlCards}
        </div>
    </div>
    
  );
}

export default App;
