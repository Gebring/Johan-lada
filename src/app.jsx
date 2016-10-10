import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { browserHistory, hashHistory,  Router, Route, Link, withRouter } from 'react-router'

import Start from './start'
import Ladan from './johans_lada'

export default class extends React.Component {
    render() {
        return(
            <div>
                <Router history={hashHistory}>
                    <Route path="/" component={Start} />
                    <Route path="/johans_lada" component={Ladan} />
                </Router>
            </div>
        )
    }
}
