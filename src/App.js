import './App.css';
import NodeState from './pages/blockchain/nodeState';
import Dashboard from './pages/blockchain/dashboard';
import Login from './pages/Login';
import UserListController from './pages/useraccount/UserListController';
import AddUserController from './pages/useraccount/AddUserController';
import UserLoginController from './pages/useraccount/UserLoginController';
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

        <Route exact path='/nodeState'>
            <NodeState/>
        </Route>
        <Route  path='/dashboard'>
            <Dashboard/>
        </Route>
        <Route exact path='/UserListController'>
            <UserListController/>
        </Route>
        <Route exact path='/AddUserController'>
            <AddUserController/>
        </Route>
        <Route exact path='/UserLoginController'>
            <UserLoginController/>
        </Route>
    </Switch>
    <Footer/>
	</div>
);
}
export default App ;