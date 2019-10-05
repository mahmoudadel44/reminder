import React, { Component } from 'react';
import Navbar from './components/Navbar';
import AppForm from './components/AppForm';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducer from './reducers/remainderReducer'
const store=createStore(reducer)
class App extends Component {
    render() {
        return (
            <Provider store ={store}>
             <Navbar/>
             <AppForm/>
            </Provider>
        );
    }
}

export default App;