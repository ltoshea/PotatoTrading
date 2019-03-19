import React, { Component } from "react";
import { Formik } from "formik";
import withStyles from "@material-ui/core/styles/withStyles";
import { Form } from "./form";
import Paper from "@material-ui/core/Paper";
import * as Yup from "yup"
import axios from 'axios';
import './form.css';

const validationSchema = Yup.object({
    variety: Yup.string("Enter a potato variety")
        .required("Potato Variety is required"),
    fee: Yup.number("Enter the storage fee ($xx.xx)")
        .required("Storage Fee is required")
        .positive(),
});

class InputForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            variety: [],
            fee: [],
            company: [],
            options: [],
            companyoptions: []
        };
    }

    componentDidMount() {
        axios.get('https://localhost:44339/api/product/names')
            .then((response) => response.data.map(ele => { return { value: ele, label: ele } }))
            .then((response) => this.setState({ options: response }))
        axios.get('https://localhost:44339/api/product/storage')
            .then((response) => response.data.map(ele => { return { value: ele, label: ele } }))
            .then((response) => this.setState({ companyoptions: response }))
    };

    render = () => {
        const classes = this.props;
        //var values = { variety: "" | this.state.variety, fee: "" };
        return (
            <React.Fragment>
                <div className={classes.container}>
                    <Paper elevation={1} className={classes.paper}>
                        <h1>Potato Trader</h1>
                        <Formik
                            initialValues={{}}
                            validationSchema={validationSchema}
                            enableReinitialize={true}
                            render={props => <Form {...props} options={this.state.options} companyoptions={this.state.companyoptions} />}
                        />
                    </Paper>
                </div>
            </React.Fragment>
        );
    }
}

export default InputForm;