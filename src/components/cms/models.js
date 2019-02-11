import React from "react";
import { connect } from "react-redux";

import * as actions from "./actions.js";

const styles = {
  clickable: { cursor: "pointer" },
  delete: {
    color: "red",
    cursor: "pointer",
    marginLeft: ".5em"
  }
};

const API = process.env.REACT_APP_API;

class Models extends React.Component {
  /**
   *
   * Function that sets local variables if
   * component mounted successfully
   * @memberof Models
   */
  componentDidMount() {
    let url = `${API}/models`;
    this.props.getModels(url);
  }

  /**
   *
   * Function that sets model and gets all records
   * on the param passed (model)
   * @memberof Models
   */
  selectModel = model => {
    let url = `${API}/${model}`;
    this.props.clearRecord();
    this.props.setModel(model);
    this.props.getRecords(url);
  };

  /**
   *
   * Render function that builds a list of models
   * available for user interaction
   * @returns JSX Markup
   * @memberof Models
   */
  render() {
    return (
      <ul>
        {this.props.models &&
          this.props.models.map((model, i) => (
            <li
              key={`models-${i}`}
              onClick={() => {
                this.selectModel(model);
              }}
            >
              <span style={styles.clickable}>{model}</span>
            </li>
          ))}
      </ul>
    );
  }
}

/**
 *
 *
 * @param {*} state
 */
const mapStateToProps = state => ({
  models: state.records.models
});

/**
 *
 *
 * @param {*} dispatch
 * @param {*} getState
 */
const mapDispatchToProps = (dispatch, getState) => ({
  setModel: model => dispatch(actions.setModel(model)),
  getModels: url => dispatch(actions.getModels(url)),
  getRecords: url => dispatch(actions.getRecords(url)),
  clearRecord: () => dispatch(actions.clearRecord())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Models);
