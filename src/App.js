import React, { useState } from 'react'; //eslint-disable-line
import Counter from './Counter'; //eslint-disable-line
import Info from './Info'; //eslint-disable-line

const App = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <button 
        onClick={() => {
          setVisible(!visible);
      }}
      >
        {visible ? '숨기기' : '보이기'}
      </button>
      <hr />
      {visible && <Info />}
    </div>
  );
};

export default App;