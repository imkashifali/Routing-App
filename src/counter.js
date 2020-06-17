import React, { Component } from 'react'

export default class counter extends Component {
    state = {
        number: 0,
    }
    counter = () => {
        this.setState({number:this.state.number + 1})
    }
    render() {
        return (
            <div>
                <button  onClick={this.counter}>Click me</button>
                    <h1>{this.state.number}</h1>
            </div>
        )
    }
}
