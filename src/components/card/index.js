
import React from 'react';
import {Link} from 'react-router-dom';

export default function Card(props) {
    let user = props.user;
    let deleteUser = props.deleteUser;
    let index = props.index;

    return (
        <div className='row'>
            <div className='card w-50 h-25 mx-auto my-2 rounded'>
                <img className='w-25 h-50 mx-auto rounded' src={user.avatar_url} alt={user.login}></img>
                <Link to={`/profile?login=${user.login}`}><button className='btn'>{user.login}</button></Link>
            </div>
            <div className='col-md-2 my-auto'>
                <button onClick={()=> {deleteUser(index)}} className='btn btn-danger'>delete</button>
            </div>
        </div>
    );
}
