import React, { Component } from "react";
import createFilterOptions from "react-select-fast-filter-options";
import Select from "react-select";
import axios from 'axios';



class PotatoSelect extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options: [],
            allOptions: [],
            filterOptions: createFilterOptions(props.options)
        };
    }
    handleChange = value => {
        // this is going to call setFieldValue and manually update values.topcis
        // console.log('IN HANDLE CHANGE')
        this.props.onChange("variety", value);
        // this.setState({ options: this.getSuggestions(value) });
    };


    handleBlur = () => {
        // this is going to call setFieldTouched and manually update touched.topcis
        this.props.onBlur("variety", true);
    };
    render() {
        return (
            <div style={{ margin: "1rem 0" }}>
                <label htmlFor="color">Variety </label>
                <Select
                    id="color"
                    filterOptions={this.filterOptions}
                    options={this.props.options}
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                    value={this.props.value}
                />
                {!!this.props.error && this.props.touched && (
                    <div style={{ color: "red", marginTop: ".5rem" }}>
                        {this.props.error}
                    </div>
                )}
            </div>
        );
    }
}
export default PotatoSelect