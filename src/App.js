import './App.css';
import { Provider } from 'react-redux';
import ChessboardContainer from './ChessboardContainer';
import store from './Redux/Store';

function App() {
  return (
    <Provider store={store}>
    <>

      <ChessboardContainer />
    </>
   
  </Provider>
  );
}

export default App;
