import React from 'react';
import axios from 'axios';

import List from '../list';
import Spinner from '../spinner';

let start = 0;

//CLOSURES

// **** Higher Order function *****
// return function to onclick()

export default class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [],
            loading: true
        }
    }

    next = ()=> {
        start = start+10;
        this.loadDoc();
        console.log('start->',start);
    }

    
    prev = ()=> {
        if(start>=10){
            start = start-10;
            this.loadDoc();
            console.log('start->',start);
        }
    }

    delete = (id)=> {
        console.log(id);
        let arr = this.state.users;
        arr.splice( id, 1);
        this.setState({users: arr});
    }
    
    loadDoc = ()=> 
    {
        this.setState({loading: true});
        console.log(start);
        axios.get(`https://api.github.com/users?since=${start}&per_page=10`)
        .then(response=> {
            console.log(response.data);
            if(response.data) {
                this.setState({users: response.data, loading: false});
            }
        })
        .catch(err => console.log(err));
    }

    componentDidMount() {
        start = 0;
        this.loadDoc();
    }

    render() {
    return (
    
    <div className='container text-center'>
    <h1 >Home Page</h1>
        <button className='btn btn-success' onClick={this.prev} >Prev</button>
        <button className='btn btn-warning' onClick={this.next}>Next</button>
        {this.state.loading?<Spinner />:<List delete={this.delete} users={this.state.users} />}
    </div>
    
    );}
}