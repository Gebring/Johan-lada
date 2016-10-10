import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {Link} from 'react-router'


export default class extends React.Component {
    render() {
        return(
            <nav>
                <ul>
                    <li>
                        <Link to="/johans_lada" activeClassName="active-banan">Johan lada</Link>
                    </li>
                    <li>
                        <Link to="/" activeClassName="active-banan">start</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}
