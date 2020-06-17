import React, { Component } from 'react'
import Navbar from './navbar'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './home'
import About from './about'
import contact from './contact'
import Myform from './myform'
import table from './table'
import './sass/main.scss'
import Post from './post'
import post from './post'


export default class App extends Component {
    render() {
        return (
            <Router>
            <React.Fragment>
             <Navbar/>
                <div className="container mt-4">
                  <div className="row">
                    <div className="col-lg-12">
                        <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/account" exact component={Myform}/>
                        <Route path="/About" exact  component={About}/>
                        <Route path="/contact" exact component={contact}/>
                        <Route path="/table" exact component={table}/>
                        <Route path="/post" exact component={post}/>
                        </Switch>
                    </div>
                </div>
            </div>
        </React.Fragment>
        </Router>

        )
    }
}
