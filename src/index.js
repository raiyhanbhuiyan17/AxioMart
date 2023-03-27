import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reducer, { initialState } from "./reducer";
import { StateProvider } from "./StateProvider";

//we have to set up parent level data layer architecture where from the parent level all the components.
// Our parent component is App. once we set that with thhis data layer then we can access everything from the children.


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <StateProvider initialState={initialState} reducer={reducer}>
       <App />
     </StateProvider>
  </React.StrictMode>
);

