import React from 'react';
import './App.sass';
import {Route} from "react-router-dom";
import Header from "./components/1_Header/Header";
import Navbar from "./components/2_Navbar/Navbar";
import Footer from "./components/13_Footer/Footer";
import ManePage from "./components/componentsManePage/ManePage";
import HeaderNews from "./components/HeaderNews/HeaderNews";
import ContentHeaderBlock from "./components/componentsManePage/3_ContentHeaderBlock/ContentHeaderBlock";

class App extends React.Component {
    state = {
        clicked: false,
    }
    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }

    render() {
        return (
            <>
                <Header state={this.state}/>
                <Navbar state={this.state} handleClick={this.handleClick}/>
                <Route exact path='/' render={() => (<ManePage state={this.state}/>)}/>
                <Route exact path='/headerNews' render={() => (<HeaderNews/>)}/>
                <Footer/>
            </>
        );
    }
}

export default App;
