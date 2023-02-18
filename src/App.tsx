import { useState, ReactElement } from 'react'
import './App.css'


function DynamicForm() {
  return (
    <div>
      <select>
        <option value="form1">form 1</option>
        <option value="form2">form 2</option>
        <option value="form3">form 3</option>
      </select>
    </div>
  );
}


function MainForm() {
  return (
    <p>
      <h2>Refactor this component input a data input form</h2>
      <ul>
        <li>A "Topic" input that takes maximum 50 charactors. This field is required.</li>
        <li>A "Content" multi-line input. This field is required.</li>
        <li>A "Submit" button that sends user inputs to the backend API.</li>
      </ul>
      <DynamicForm/>
    </p>
  )
}


function ItemList() {
  return (
    <div>
      <p>Load all the items from backend API and display as bullet points.</p>
      <button>Click this button to refresh</button>
    </div>
  );
}


function App() {
  return (
    <div className="App">
      <MainForm/>
      <hr/>
      <ItemList/>
    </div>
  )
}

export default App
