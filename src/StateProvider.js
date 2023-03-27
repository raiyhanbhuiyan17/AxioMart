import React, { createContext, useContext, useReducer } from "react";

// this creates the data layer. Prepares the data Layer
export const StateContext = createContext();

// Wrap our app and provide the Data layer
//reducer has current state and dispatch method to alter the current state
// we'll be getting all the features that are necessary to build this data layer and to push the information into the layer and then pull back the information from the layer. 
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Pull information from the data layer
export const useStateValue = () => useContext(StateContext);