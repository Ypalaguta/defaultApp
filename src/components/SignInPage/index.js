import React, {Component} from 'react'
import PropTypes from 'prop-types'

class SignInPage extends Component {
    render() {
        const {styles} = this.props
        return (
            <div className={styles.app}>
                <header className="App-header">
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        )
    }
}

SignInPage.propTypes = {}

export default SignInPage
