import React from 'react';

export default class Signup extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <h1> SIGNUP </h1>
                <button><Link to='/main_page'>Sign Up</Link></button>
            </div>
        )
    }
}