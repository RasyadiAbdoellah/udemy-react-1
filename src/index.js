 import React from 'react'
 import ReactDOM from 'react-dom'

const API_KEY = 'AIzaSyAUNRbvz3pbKA8sBRoL_67mSAA2u_ySxnQ'

 // Create component, then show on DOM

 // below is a component class instantiate by doing <App />
 const App = () => {
     return <div> Hi! </div>
 }


 ReactDOM.render(<App />, document.querySelector('.container'))