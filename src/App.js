import React, { Component } from 'react';

import BoardForm from './App_BoardForm';
import BoardList from './App_BoardList';

import Login from './Login';

class App extends Component {
    
    render() {
        return (
            <div>
                <Login/>
            </div>
        );
    }
}

export default App;