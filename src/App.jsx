import './App.css';
import Card from './components/card/Card';
import Grid from './components/UI/grid/Grid';
import UserCard from './components/userCard/UserCard';

function App() {
  return (
    <div className='App container'>
      <h1>React</h1>
      <Card />
      <Grid>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Grid>

      {/* <UserCard /> */}
    </div>
  );
}

export default App;
