import './App.css';
import Home from './pages/home';
import Grid from './pages/grid';
import NodeState from './pages/nodeState';
import MarerialUIDrawer from './components/navigation/drawer';
import { BrowserRouter, Route, Switch }	from 'react-router-dom';

function App() {
return (
	<div className="App">	
  {/* Drawer*/}
  <MarerialUIDrawer/>

    <Switch>
        <Route path="/" exact >
            <Home/>
        </Route>
        <Route exact path='/grid'>
            <Grid/>
        </Route>
        <Route exact path='/nodeState'>
            <NodeState/>
        </Route>
    </Switch>
	</div>
);
}
export default App ;