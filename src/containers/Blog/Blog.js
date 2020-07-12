import React, { Component } from 'react';
import {Route, Link} from "react-router-dom";
import Posts from "./Posts/Posts";
import './Blog.css';
import NewPost from "./NewPost/NewPost";

class Blog extends Component {
    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?search=true'
                            }}>New Post</Link></li>
                        </ul>
                    </nav>
                </header>
                <Route exact path='/' component={Posts}/>
                <Route exact path='/new-post' component={NewPost}/>
            </div>
        );
    }
}

export default Blog;