import './App.css';
import Home from './pages/home';
import Grid from './pages/grid';
import NodeState from './pages/nodeState';
import Dashboard from './pages/dashboard';
import Login from './pages/Login';
import MarerialUIDrawer from './components/navigation/drawer';
import { BrowserRouter, Route, Switch }	from 'react-router-dom';
import Footer from '../src/components/footer';
function App() {
return (
	<div className="App">	
  {/* Drawer*/}
  <MarerialUIDrawer/>

    <Switch>
        <Route path="/" exact >
            <Login/>
        </Route>
        <Route exact path='/grid'>
            <Grid/>
        </Route>
        <Route exact path='/nodeState'>
            <NodeState/>
        </Route>

        <Route  path='/dashboard'>
            <Dashboard/>
        </Route>
    </Switch>
    <Footer/>
	</div>
);
}
export default App ;