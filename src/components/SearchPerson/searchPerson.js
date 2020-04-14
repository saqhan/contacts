import React, { Component } from 'react';

import './searchPerson.css';

export default class SearchPerson extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            term:''
        }
        this.onUpdateSearch = this.onUpdateSearch.bind(this)
    }

    onUpdateSearch(e) {
        const term = e.target.value;

        this.setState({term});
        this.props.onUpdateSearch(term);

    }
    
    render() {
        return (
            <div className="search">
                <input
                    className=""
                    type="text" 
                    placeholder="Введите имя.."
                    onChange={this.onUpdateSearch}
                />
            </div>
        );
    }
};