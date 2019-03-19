import React, { Component } from 'react';
import './App.css';
import InputForm from './InputForm'

class App extends Component {

    render = () =>

        <div className="App">
            {/* <AppLogo /> */}
            <InputForm />
        </div>

}
// const AppLogo = () => <img className="App-logo" src='/potato.png' />;
// const AppLogo = () => <marquee><img className="App-logo" src='/potato.png' /></marquee>;

export default App;
