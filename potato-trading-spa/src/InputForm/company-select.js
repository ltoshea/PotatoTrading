import React, { Component } from "react";
import createFilterOptions from "react-select-fast-filter-options";
import Select from "react-select";

class CompanySelect extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            filterOptions: createFilterOptions(props.options)
        };
    }

    handleChange = value => {
        this.props.onChange("company", value);
    };
    handleBlur = () => {
        this.props.onBlur("company", true);
    };

    render() {
        return (
            <div style={{ margin: "1rem 0" }}>
                <Select
                    id="color"
                    filterOptions={this.filterOptions}
                    options={this.props.options}
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                    value={this.props.value}
                    placeholder="Choose a company..."
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
export default CompanySelect;
