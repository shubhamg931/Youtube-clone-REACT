import React, {Component} from 'react';

class SearchBar extends Component{

    constructor(props){
        super(props);

        this.state = { term: '' };
    }

    render(){
        return (
            <div className="search-bar">
                <div className="row">
                    <div className="col-xs-2 logo">
                        <img src="../../style/beerusTube.png"/>
                    </div>
                    <div className="col-xs-10">
                        <input
                            placeholder="SearchBar"
                            value={this.state.term}
                            onChange={(event)=>this.onInputChange(event.target.value)}/>
                    </div>
                </div>
            </div>
        );
    }

    onInputChange(term){
        this.setState({term});
        this.props.onSearchChange(term);
    };
}

export default SearchBar;