import React from 'react';
import './Blog.scss'

export default class Blog extends React.Component {
    render() {
        return(
            <section id='blog' ref={(section) => { this.Blog = section; }}>Blog Works</section>
        );
    }
}