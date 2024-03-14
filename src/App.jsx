// import {React, useState, useContext } from "react";
// import { mainContext } from "./main";
// import Component from "./Component";

// const App = () => {
//   const [count, setCount] = useState(0);

//   return (
//     <div style={{width : '400px' , height : '400px' , border : '1px solid red'}}>
//       <button onClick={() => setCount(count+1)}>incr</button>
//       <mainContext.Provider value = {count}>
//         <Component />
//       </mainContext.Provider>
//     </div>
//   )
// }

// export default App

import React, { useState } from 'react';
import { mainContext } from './main';
import Component from './Component';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div style={{ width: '400px', height: '400px', border: '1px solid red' }}>
      <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
      <mainContext.Provider value={isDarkMode}>
        <Component />
      </mainContext.Provider>
    </div>
  );
};

export default App;
