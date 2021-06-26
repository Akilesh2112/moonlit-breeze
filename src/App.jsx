import {BrowserRouter as Router, Route} from 'react-router-dom'
import MainPage from './pages/main'
import {Blah} from './components/blah'

import './App.css';

function App() {

    return (
        <Router>
            <Route path="/" component={MainPage}/>
            <Route path="/table"> <Blah></Blah></Route>
        </Router>
    );
}

export default App;
