import React, {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import SignInPage from 'components/SignInPage'

export default class Root extends Component {
    render() {
        return (
            <Switch>
                <Route path='/signIn' component={SignInPage} />
            </Switch>
        )
    }
}
Root.propTypes = {

}
