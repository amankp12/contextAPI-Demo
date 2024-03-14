// import React from 'react'
// import { useContext } from 'react'
// import { mainContext } from './main'

// const Component2 = () => {
//     const count = useContext(mainContext)
//   return (
//     <div style={{width : '100px' , height : '100px' , border : '1px solid red'}}>
//       count inside is {count}
//     </div>
//   )
// }

// export default Component2





import React, { useContext } from 'react';
import { mainContext } from './main';

const Component2 = () => {
  const isDarkMode = useContext(mainContext);

  return (
    <div
      style={{
        width: '100px',
        height: '100px',
        border: '1px solid red',
        backgroundColor: isDarkMode ? 'black' : 'white',
        color: isDarkMode ? 'white' : 'black',
      }}
    >
      {isDarkMode ? 'Dark' : 'Light'}
    </div>
  );
};

export default Component2;