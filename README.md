<b>#COMMANDS</b><br/>
npm create vite@latest<br/>
npm i<br/>
npm i @reduxjs/toolkit<br/>
npm i react-redux<br/>
npm run dev<br/>

<b>#TERMS</b><br/>
<b>Store:</b>A centralized container that holds the application's entire state tree. It’s the single source of truth.<br/>
<b>State:</b> The immutable object that represents the current data or state of the application.<br/>
<b>Slice:</b> In Redux Toolkit, a slice represents a modular piece of the Redux state. It includes the state, reducers (logic to update the state), and actions related to a specific feature or domain of the application. Each slice simplifies managing and organizing state by breaking it into smaller, focused parts.<br/>
<b>Action:</b> An object with a type field (and optionally a payload) that describes an event or change to be made to the state.<br/>
<b>Reducer:</b> A pure function that takes the current state and an action, and returns a new state based on the action type.<br/>
<b>Dispatch:</b> A method used to send an action to the store, triggering the reducers to process the state update.<br/>
<b>Middleware:</b> Code that sits between dispatching an action and the moment it reaches the reducer, often used for logging, asynchronous actions, or other side effects.<br/>
<b>Selector:</b> A function that extracts specific pieces of data from the state for components to use.<br/><br/><br/>

COUNTER INCREMENT AND DECREMENT USING REDUX
