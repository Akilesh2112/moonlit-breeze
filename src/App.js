import {BrowserRouter as Router , Route} from 'react-router-dom'
import MainPage from './pages/main'
import './App.css';

function App() {
  
  return (
   <Router> 
     <Route path="/">
       <div>
       <img src="http://ikazme.com/wp-content/uploads/2018/08/helloworld.png"/> 
      </div> 
     </Route>
     <Route path ="/main" component={MainPage}/>
   </Router>
  );
}

export default App;
