import './App.css';
import HomeAuto from './homeAuto';

function App() {
  return (
    <HomeAuto onToggle={(isRain) => console.log(`Toggle to ${isRain ? "rainy" : "sunny"}`)}/>
  );
}

export default App;
