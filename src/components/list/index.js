import React from 'react';

//<-- -->
//Fragment in react lib;
// <--- --->

import Card from '../card';

export default function List(props) {
    console.log(props.users);
    
    let createList = ()=> {
        
        return props.users.map((current, index) => {
               return <Card user={current} index={index} deleteUser={props.delete} key={index} />;
        })
    }


    return (
        <div className='w-100 mt-2 clearfix bg-light text-center'>
            <h1>Users</h1>
            {createList()}
        </div>
    );
}