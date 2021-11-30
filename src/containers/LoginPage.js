import React, { Component } from 'react'
import styles from '../containers/LoginPage.module.scss';

class LoginPage extends Component {
    render() {
        return (
            <div className={styles.login}>
                <div className={styles.content}>
                    <h1>RateMIProfessors</h1>
                    <p>Click here to log in!</p>
                </div>
            </div> 
        )
    }
}

export default LoginPage; 