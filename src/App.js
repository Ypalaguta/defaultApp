import React, {Component} from 'react'
import Root from './components/Root'
import store from './redux'
import {Provider} from 'react-redux'
import {ConnectedRouter} from 'react-router-redux'
import history from './common/history'

import './app.css'

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <Root/>
                </ConnectedRouter>
            </Provider>
        )
    }
}

export default App