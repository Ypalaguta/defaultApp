import React, {Component} from 'react'
// import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'

class SignInPage extends Component {
    render() {
        const {classes} = this.props
        return (
            <div className={classes.app}>
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

export default withStyles(theme=>({}))(SignInPage)
