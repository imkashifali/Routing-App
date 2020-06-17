import React, { Component } from 'react'
import Axios from 'axios'

export default class post extends Component {
    state = {
        posts : []
    }

    componentDidMount(){
        Axios.get("https://jsonplaceholder.typicode.com/posts").then((response)=>{
            this.setState({posts: response.data})
        })

    }
    render() {
        return (
            <div>
                {this.state.posts.map((post) => (
                    <React.Fragment key={post.id}>
                        <tr>
                            <h4>ID: {post.id}</h4>
                            <h6>Tittle : {post.title}</h6>
                            <p>{post.body}</p>
                        </tr>
                    
                        </React.Fragment>
                )
                    
                )}
            </div>
        )
    }
}
