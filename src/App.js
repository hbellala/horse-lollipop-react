import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Horse Eating a Lollipop</h1>
        <p>A photo-realistic image generated with MidJourney AI</p>
      </header>
      <main className="App-main">
        <div className="image-container">
          <img
            src="https://mjcdn.ttapi.io/attachments/1364514447573651580/1364752972940185622/adrian1_hernandez42125_Photorealistic_image_of_a_horse_eating_a_86cb1c97-9747-460e-8a48-772bd61852da.png?ex=680ad0c0&is=68097f40&hm=46d08ca24e02131ea7434435c47d822e99ff9e4a39d0070ed9e454c3e718d77c&"
            alt="Horse eating a lollipop"
            className="horse-image"
          />
          <div className="image-caption">
            <p>This image was created using MidJourney AI technology</p>
          </div>
        </div>
      </main>
      <footer className="App-footer">
        <p>&copy; {new Date().getFullYear()} - Horse Lollipop React App</p>
      </footer>
    </div>
  );
}

export default App;