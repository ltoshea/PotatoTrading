
import React, { Component } from "react";
import axios from 'axios';
import Autosuggest from 'react-autosuggest';

// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = suggestion => suggestion.name;

// Use your imagination to render suggestions.


class AutoSuggestPotato extends React.Component {
    constructor() {
        super();

        // Autosuggest is a controlled component.
        // This means that you need to provide an input value
        // and an onChange handler that updates this value (see below).
        // Suggestions also need to be provided to the Autosuggest,
        // and they are initially empty because the Autosuggest is closed.
        this.state = {
            value: '',
            suggestions: [],
            names: null
        };
    }

    componentDidMount = () => {

        axios.get('https://localhost:44339/api/product/names')
            .then(response => {
                // console.log(response);
                let state = this.state;
                state.names = response.data;
                this.setState(state);
            });
    }

    renderSuggestion = suggestion => (
        <div onClick={this.onSelect} value={suggestion}>
            {suggestion}
        </div>
    );

    onSelect = async (e) => {
        let value = e.target.getAttribute('value');
        // alert(value);
        console.log('onSelect')
        console.log(this.state)
        console.log(value)
        await this.setState({
            value: value
        });
        console.log(this.state);
        //alert(this.state.value);
    }

    // Teach Autosuggest how to calculate suggestions for any given input value.
    getSuggestions = value => {
        // console.log(value);
        // console.log(this.state);
        if (value) {
            const inputValue = value.trim().toLowerCase();
            const inputLength = inputValue.length;

            return inputLength === 0 ? [] : this.state.names.filter(
                lang => lang.toLowerCase().slice(0, inputLength) === inputValue
            );
        }
    };

    onChange = async (event, { newValue }) => {
        console.log('1onchange');
        console.log(this.state);
        console.log('newval: ' + newValue)
        let state = this.state;
        state.value = typeof newValue !== 'undefined' ? newValue : state.value;
        await this.setState(state);
        console.log(this.state);
    };

    // Autosuggest will call this function every time you need to update suggestions.
    // You already implemented this logic above, so just use it.
    onSuggestionsFetchRequested = async ({ value }) => {
        console.log('2fetch');
        console.log(this.state);

        let state = this.state;
        state.suggestions = this.getSuggestions(value);
        await this.setState(state);

        console.log(this.state)
    };

    // Autosuggest will call this function every time you need to clear suggestions.
    onSuggestionsClearRequested = async () => {
        console.log('3clear');
        console.log(this.state);
        let state = this.state;
        state.suggestions = [];
        await this.setState(state);
        console.log(this.state)
    };

    render() {
        const { value, suggestions } = this.state;

        // Autosuggest will pass through all these props to the input.
        const inputProps = {
            placeholder: 'Type a potato',
            value,
            onChange: this.onChange
        };

        // Finally, render it!
        return this.state.names ? <Autosuggest
            suggestions={suggestions}
            onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
            onSuggestionsClearRequested={this.onSuggestionsClearRequested}
            getSuggestionValue={getSuggestionValue}
            renderSuggestion={this.renderSuggestion}
            inputProps={inputProps}
        /> : null
            ;
    }
}
export default AutoSuggestPotato;