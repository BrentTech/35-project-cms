import React from "react";
import { connect } from "react-redux";
import Form from "react-jsonschema-form";
import { When } from "../if";

import * as actions from "./actions.js";

const API = process.env.REACT_APP_API;

// Auto-Hide some of the mongo specific fields
const uiSchema = {
  _id: { "ui:widget": "hidden" },
  __v: { "ui:widget": "hidden" }
};

class Record extends React.Component {
  /**
   *Creates an instance of Record.
   * @param {*} props
   * @memberof Record
   */
  constructor(props) {
    super(props);
    this.state = { schemas: {} };
  }

  // Runs whenever props change (pre-render)
  /**
   *
   * Pre-Render function to retrieve state
   * @param {*} props
   * @param {*} state
   * @returns Empty object
   * @memberof Record
   */
  static getDerivedStateFromProps(props, state) {
    if (props.model && !props.schemas[props.model]) {
      let url = `${API}/${props.model}/schema`;
      props.getSchema(props.model, url);
    }
    return {};
  }

  /**
   *
   * Function for error handling
   * @memberof Record
   */
  handleError = error => {
    console.error(error);
  };

  /**
   *
   * Function to process user interaction
   * on webform and dispact update or create actions
   * @memberof Record
   */
  handleSubmit = form => {
    if (form.formData._id) {
      let url = `${API}/${this.props.model}/${form.formData._id}`;
      this.props.put(this.props.model, url, form.formData);
    } else {
      let url = `${API}/${this.props.model}`;
      this.props.post(this.props.model, url, form.formData);
    }
  };

  /**
   *
   * Render function that builds a webform
   * available for user interaction with
   * populated information based on record
   * selected
   * @returns JSX Markup
   * @memberof Record
   */
  render() {
    return (
      <When condition={this.props.schemas[this.props.model]}>
        <Form
          schema={this.props.schemas[this.props.model] || {}}
          uiSchema={uiSchema}
          formData={this.props.record}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
          onError={this.handleError}
        />
      </When>
    );
  }
}

/**
 *
 * Maps the application to local props
 * @param {*} state
 */
const mapStateToProps = state => ({
  record: state.records.record,
  schemas: state.records.schemas,
  model: state.records.model
});

/**
 *
 * Maps application functions from reducer
 * to location props.
 * @param {*} dispatch
 * @param {*} getState
 */
const mapDispatchToProps = (dispatch, getState) => ({
  getRecord: url => dispatch(actions.getRecord(url)),
  getSchema: (model, url) => dispatch(actions.getSchema(model, url)),
  post: (model, url, record) => dispatch(actions.post(model, url, record)),
  put: (model, url, record) => dispatch(actions.put(model, url, record))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Record);
