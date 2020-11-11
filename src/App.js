import React , {useState , useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Homepage from './pages/homepage/homepage';
import ShopPage from './pages/shoppage/shoppage';
import Header from './components/header/header';
import InAndUp from './pages/sing-in-and-sing-up/sing-in-and-sing-up';
import {auth , createUser} from './firebase/firebase.utils';
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.action';
import {selectUser} from './redux/user/user.selectors';
import CheckOut from './pages/checkout/checkout';

import { Route, Switch, BrowserRouter as Router , Redirect} from 'react-router-dom';

function App({history , setCurrentUser , currentUser}) {

  useEffect( ()=>{
    let unsb = auth.onAuthStateChanged(async(user)=>{//check or something change
      if(user){
        const userAuth = await createUser(user);
        
        userAuth.onSnapshot(snap =>{
          setCurrentUser({//set in the state data
            id:snap.id,
            ...snap.data()
          });
        })
      }// if statement
      setCurrentUser(user);
      
    });
    return ()=>{
     unsb();//close connection
    }

  },[]);
  return (
    <div className="App">
        <Header></Header>
          <Switch>
            <Route history={history} exact path='/' component={Homepage}></Route>
            <Route history={history} path='/shop' component={ShopPage}></Route>
            <Route history={history} exact path='/sing' render={ ()=>
            currentUser?(<Redirect to='/'></Redirect>):(<InAndUp></InAndUp>)}></Route>
            <Route history={history} exac path='/checkout' component={CheckOut}></Route>
          </Switch>
    </div>
  );
}
const mapStateToProps = state =>({
  currentUser:selectUser(state)
})
const mapDispatchToProps = dispatch =>({
  setCurrentUser : user=>dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps , mapDispatchToProps)(App);
