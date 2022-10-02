import React from "react";

import { Field, reduxForm } from "redux-form";

class StreamCreate extends React.Component {
    renderInput(/*formProps*/ { input, label }) {
        return (
            <div className="field">
                <label>{label}</label>
                <input {...input} />
            </div>
        );
    }

    onSubmit(formValues) {
        // redux-form helps making sure the code below runs and no event handling would be necessary
        // e.preventDefault();
        console.log(formValues);
    }

    render() {
        // console.log(this.props);

        return (
            <div>
                {/* handleSubmit is a function/props that comes from the redux-form library */}
                <form
                    className="ui form"
                    onSubmit={this.props.handleSubmit(this.onSubmit)}
                >
                    <Field
                        name="title"
                        component={this.renderInput}
                        label="Enter Title"
                        required
                    />
                    <Field
                        name="description"
                        component={this.renderInput}
                        label="Enter Description"
                        required
                    />
                    <button className="ui button primary">Submit</button>
                </form>
            </div>
        );
    }
}

export default reduxForm({
    form: "streamCreate",
})(StreamCreate);
