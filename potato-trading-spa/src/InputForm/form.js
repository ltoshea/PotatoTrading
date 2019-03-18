import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import AutoSuggestPotato from './autosuggest.js';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import { Select } from "@material-ui/core";
import PotatoSelect from './potato-select.js'

export const Form = props => {
    const {
        values: { variety, fee },
        errors,
        touched,
        handleChange,
        isValid,
        setFieldTouched,
        setFieldValue,
        options
    } = props;

    const change = (name, e) => {
        e.persist();
        handleChange(e);
        setFieldTouched(name, true, false);
    };

    return (
        <form
            onSubmit={() => {
                console.log(props.values.variety.value);
                console.log(props.values.variety.value);
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
            <TextField
                id="fee"
                name="fee"
                helperText={touched.fee ? errors.fee : ""}
                error={touched.fee && Boolean(errors.fee)}
                label="Storage Fee"
                fullWidth
                value={fee}
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

