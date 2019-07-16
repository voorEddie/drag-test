import React from 'react';
import './App.css';

import DragBase from './components/DragBase';

function App() {
  return (
    <div className="App">
      <DragBase
        repeater={[
          {id: 1, name: 'R1'},
          {id: 2, name: 'R2'},
          {id: 3, name: 'R3'},
          {id: 4, name: 'R4'},
        ]}
        unitWidth={200}
        unitHeight={80}
      />
    </div>
  );
}

export default App;
