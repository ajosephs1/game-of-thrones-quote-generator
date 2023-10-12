import './App.css'
import background from './assets/got-house-emblem.png'
import Quotes from './Quotes';
const App = () => {
  
  return (
    <div className="App">
      <img src={background} className='background' alt='game of thrones house emblem' />
      <Quotes />
    </div>
  );
}

export default App;
