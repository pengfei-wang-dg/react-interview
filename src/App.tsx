import './App.css';


function MainForm() {
  return (
    <div>
      <p>Refactor this component to a data input form</p>
      <ul>
        <li>A "Topic" input that takes a maximum of 50 characters. This field is required.</li>
        <li>A "Content" multi-line input. This field is required.</li>
        <li>A "Submit" button sends user inputs to the backend API.</li>
      </ul>
    </div>
  );
}


function ItemList() {
    return (
      <div>
        <p>Load all the items from the backend API and display them as bullet points.</p>
        <button>Click this button to refresh the list</button>
      </div>
    );
}


function App() {
  return (
    <div className="App">
        <h2>My Form</h2>
        <MainForm/>
        <hr/>
        <ItemList/>
    </div>
  );
}


export default App;
