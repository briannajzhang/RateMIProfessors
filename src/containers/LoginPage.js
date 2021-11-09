import React, { Component } from 'react'
import styles from '../containers/LoginPage.module.scss';

class LoginPage extends Component {
    render() {
        return (
            <div class={styles.login}>
                <div class={styles.content}>
                    <h1>RateMIProfessors</h1>
                    <p>Click here to log in!</p>
                </div>
            </div> 
        )
    }
}

export default LoginPage; 