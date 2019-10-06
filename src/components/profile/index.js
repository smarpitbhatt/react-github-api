import React from 'react';
import axios from 'axios';


//    <-- Params -->
//      path = '/user/profile/:id'
//      access by math.params
//

export default class Profile extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            user: {}
        }
    }

    componentDidMount() {
        console.log(this.props);
        let url = new URL(window.location);
        var login = url.searchParams.get('login');

        axios.get(`https://api.github.com/users/${login}`)
        .then(response => {
            console.log(response);
            this.setState({user: response.data});    
        })

    }

    createProfile() {
        let user = this.state.user;
        return (
            <div className='bg-light w-100 p-3 m-0 rounded border border-primary text-center'>
                <div className='card w-50 h-25 mx-auto my-2 rounded'>
                    <img className='w-25 h-50 mx-auto rounded' src={user.avatar_url} alt={user.login}></img>
                    {user.login}
                </div>
                {user.name} <br /> 
                {user.blog}              
            </div>
        );
    }

    render() {
    return(
        <div>
            <h1>Profile</h1>
            {this.createProfile()}
        </div>
    )};
}