import React from 'react';
import './App.css';
import UseEffectHook from './UseEffectHook/UseEffectHook';

function App() {
  const [visible, setVisible] = React.useState(true)

  const handleToggle = () => {
    setVisible((visible) => !visible)
  }

  return (
    <div className="App">
      {visible && <UseEffectHook />}
      <button className='btn' onClick={handleToggle}>HIDE</button>
    </div>
  );
}

export default App;
