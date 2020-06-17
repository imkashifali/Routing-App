import React, { Component } from 'react'

export default class myform extends Component {

    state = {
        fullName: "",
        email:"",
        address:""
    }


    inputHandle = function(e)  {
        this.setState({ [ e.target.name ]: e.target.value });
    };
    submitScore = function(e) {
        e.preventDefault();
        console.log(this.state)
    }
   
    render() {
        return (
            <React.Fragment>
                <h1>Submit Any Query 24/7</h1>
            <form onSubmit={this.submitScore.bind(this)}>
                <div className="form-group">
                    <input type="text"
                            name="fullName"
                            placeholder="Full Name"
                            value={this.state.fullName}
                            onChange={this.inputHandle.bind(this)}
                            className="form-control"
                    />
                    </div>
                    <div className="form-group">
                    <input type="text"
                            name="email"
                            placeholder="Email"
                            value={this.state.email}
                            onChange={this.inputHandle.bind(this)}
                            className="form-control"
                    />
                    </div>
                    <div className="form-group">
                    <input type="text"
                            name="address"
                            placeholder="Address"
                            value={this.state.address}
                            onChange={this.inputHandle.bind(this)}
                            className="form-control"
                    />
                    </div>
                    <div className="form-group">
                     <input type="submit"
                            value="Submit"
                            className="btn btn-primary"
                    />
                </div>
            </form>
            </React.Fragment>
        );
    }
}
