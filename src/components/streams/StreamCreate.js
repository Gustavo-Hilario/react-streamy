import React from "react";

import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";

import { createStream } from "../../actions";

class StreamCreate extends React.Component {
    renderError({ error, touched }) {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }

    // We should change this to a arrow function so THIS can work inside that.

    // META will be responsible for reading errors and others
    renderInput = (/*formProps*/ { input, label, meta }) => {
        // console.log(meta);
        const className = `field ${meta.error && meta.touched ? "error" : ""}`;
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} autoComplete="off" />
                {this.renderError(meta)}
            </div>
        );
    };

    onSubmit = (formValues) => {
        // redux-form helps making sure the code below runs and no event handling would be necessary
        // e.preventDefault();

        // console.log(formValues);
        this.props.createStream(formValues);
    };

    render() {
        // console.log(this.props);

        return (
            <div>
                {/* handleSubmit is a function/props that comes from the redux-form library */}
                <form
                    className="ui form error"
                    onSubmit={this.props.handleSubmit(this.onSubmit)}
                >
                    <Field
                        name="title"
                        component={this.renderInput}
                        label="Enter Title"
                    />
                    <Field
                        name="description"
                        component={this.renderInput}
                        label="Enter Description"
                    />
                    <button className="ui button primary">Submit</button>
                </form>
            </div>
        );
    }
}

const validate = (formValues) => {
    const errors = {};

    if (!formValues.title) {
        // Errors should have the same name after . as the Field Component. Otherwise redux-form won't be able to correlated both things – errors with their respective field
        errors.title = "You must enter a title";
    }

    if (!formValues.description) {
        errors.description = "You must enter a description";
    }

    return errors;
};

const formWrapped = reduxForm({
    form: "streamCreate",
    validate,
})(StreamCreate);

export default connect(
    /*should be mapStateToProps function*/ null,
    { createStream } /*action creator*/
)(formWrapped);
