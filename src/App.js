import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import { Store } from './Component/Store.js';
import Routing from './Routing.js';
function App() {
  return (
    <div>
      <Provider store={Store}>
          <Routing/>
      </Provider>
    </div>
  );
}

export default App;
