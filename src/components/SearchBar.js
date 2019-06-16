import React from 'react';

class SearchBar extends React.Component {

    state = { term: '' };

    onInputChange = (event) => { //arrow func binding 'this' to class
        this.setState({term: event.target.value});
    };

    onFormSubmit = (event) => { //arrow func binding 'this' to class
        event.preventDefault();

        //Callback with search term from parent component
        this.props.onFormSubmit(this.state.term)
    };

    render() {
        return (//controlled component, value set by state
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input type="text" value={this.state.term} onChange={this.onInputChange}/>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar