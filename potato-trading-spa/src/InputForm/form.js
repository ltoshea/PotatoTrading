import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import PotatoSelect from './potato-select.js'
import CompanySelect from "./company-select.js";
import axios from "axios";

export const Form = props => {
    const {
        values: { variety, fee, company },
        errors,
        touched,
        handleChange,
        isValid,
        setFieldTouched,
        setFieldValue,
        options,
        companyoptions
    } = props;

    const change = (name, e) => {
        e.persist();
        handleChange(e);
        setFieldTouched(name, true, false);
    };

    return (
        <form
            onSubmit={() => {
                // axios.post('https://localhost:44339/api/product/newprice', {
                axios.post('https://potatotradingwebapi20190316095132.azurewebsites.net/api/product/newprice', {
                    variety: props.values.variety.value,
                    storageCompany: props.values.company.value,
                    fee: props.values.fee
                })
                    .then(function (response) {
                        console.log(response);
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
                // console.log(props.values.variety.value);
                // console.log(props.values.company.value);
                // console.log(props.values.fee);
            }}
        >
            {/* <AutoSuggestPotato /> */}
            {/* <TextField
            id="variety"
            name="variety"
            helperText={touched.variety ? errors.variety : ""}
            error={touched.variety && Boolean(errors.variety)}
            label="Potato Variety"
            value={variety}
            onChange={change.bind(null, "variety")}
            suggestions={props.suggestions}
            fullWidth
        /> */}

            <PotatoSelect
                value={variety}
                onChange={setFieldValue}
                onBlur={setFieldTouched}
                error={errors.variety}
                touched={touched.variety}
                options={options}
            />
            <CompanySelect
                value={company}
                onChange={setFieldValue}
                onBlur={setFieldTouched}
                error={errors.company}
                touched={touched.company}
                options={companyoptions}
            />
            <TextField
                id="fee"
                name="fee"
                helperText={touched.fee ? errors.fee : ""}
                error={touched.fee && Boolean(errors.fee)}
                label="Storage Fee"
                fullWidth
                value={fee}
                placeholder='00.00'
                onChange={change.bind(null, "fee")}
            />

            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                disabled={!isValid}
            >
                Submit
        </Button>
        </form>
    );
};

