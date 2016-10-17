import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {Link} from 'react-router'
import Nav from './nav'

export default class extends React.Component {
    render() {
        return(
            <div>
                <Nav />
                <h1>ladan</h1>
                // <Link to="/johans_lada" activeClassName="active-banan">Johan lada</Link>
            </div>
        )
    }
}



