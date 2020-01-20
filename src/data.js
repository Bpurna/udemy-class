import React, { Component } from 'react';
import CardList from './component/card-list/card-list.component';

export default class Data extends Component {
    constructor() {
        super();
        this.state = {
            monstars: []
        }
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())//response we are getting in the format of json
            .then(user => { this.setState({ monstars: user }) });
    }

    render() {
        return (
            <div>
                <CardList monstars={this.state.monstars} />
            </div>
        )
    }
}