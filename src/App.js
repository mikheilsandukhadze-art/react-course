import Todo from './components/Todo';

function App() {
  return (
    <div>
      <h2>{props.text}</h2>
      <Todo text="Learn React" />
      <Todo text="master React" />
      <Todo text="Explore the full React course" />
    </div>
  );
}                         

export default App;
