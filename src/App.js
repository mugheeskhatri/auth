import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/auth.css'
import Storage from './config/storage';
import AppRouter from './config/AppRouter';
import {Provider} from 'react-redux'
import store from './store';
function App() {
  return (
<Provider store={store}>
<AppRouter />
{/* <Storage /> */}
</Provider>   
  );
}


export default App;
