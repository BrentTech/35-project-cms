import superagent from "superagent";

export /**
 *
 * Action for setting the model
 * @param {*} model
 * @returns Object with keys Type: Model and Payload: model
 */
const setModel = model => {
  return {
    type: "MODEL",
    payload: model
  };
};

/**
 *
 * Async API function to GET schema information
 * @param {*} model
 * @param {*} url
 */
export const getSchema = (model, url) => dispatch => {
  superagent.get(url).then(data => {
    dispatch(runGetSchema({ model: model, schema: data.body }));
  });
};

/**
 *
 * Action for retrieving Schema
 * @param {*} payload
 * @returns Object with type of action and payload
 */
const runGetSchema = payload => {
  return {
    type: "SCHEMA",
    payload: payload
  };
};

/**
 *
 *  Async API function to GET models information
 * @param {*} url
 */
export const getModels = url => dispatch => {
  superagent.get(url).then(data => {
    dispatch(runGetModels(data.body));
  });
};

/**
 *
 * Action for retrieving models
 * @param {*} payload
 * @returns Object with type of action and payload
 */
const runGetModels = payload => {
  return {
    type: "MODELS",
    payload: payload
  };
};

/**
*
* Async API function to GET all records information
* @param {*} url
*/
export const getRecords = url => dispatch => {
  superagent.get(url).then(data => {
    dispatch(runGetRecords(data.body.results));
  });
};

/**
 *
 * Action for retrieving all records
 * @param {*} payload
 * @returns Object with type of action and payload
 */
const runGetRecords = payload => {
  return {
    type: "RECORDS",
    payload: payload
  };
};

/**
 *
 * Async API function to GET a single record information
 * @param {*} url
 */
export const getRecord = url => dispatch => {
  superagent.get(url).then(data => {
    dispatch(runGetRecord(data.body));
  });
};

/**
 *
 * Action for retrieving a single record
 * @param {*} payload
 * @returns Object with type of action and payload
 */
const runGetRecord = payload => {
  return {
    type: "RECORD",
    payload: payload
  };
};

/**
 *
 *  Async API function to POST a new record
 * @param {*} model
 * @param {*} url
 * @param {*} record
 */
export const post = (model, url, record) => dispatch => {
  superagent
    .post(url)
    .send(record)
    .then(data => {
      dispatch(runPost({ model, record: data.body }));
    });
};

/**
 *
 * Action for creating a new record
 * @param {*} payload
 * @returns Object with type of action and payload
 */
const runPost = payload => {
  return {
    type: "POST",
    payload: payload
  };
};

/**
 *
 * Async API function to PUT a record update.
 * @param {*} model
 * @param {*} url
 * @param {*} record
 */
export const put = (model, url, record) => dispatch => {
  superagent
    .put(url)
    .send(record)
    .then(data => {
      dispatch(runPut({ model, record: data.body }));
    });
};

/**
 *
 * Action for updating a new record
 * @param {*} payload
 * @returns Object with type of action and payload
 */
const runPut = payload => {
  return {
    type: "PUT",
    payload: payload
  };
};

/**
 *
 * Async API function to DELETE a single record
 * @param {*} model
 * @param {*} id
 * @param {*} url
 */
export const destroy = (model, id, url) => dispatch => {
  superagent.delete(url).then(data => {
    dispatch(runDestroy({ model, id }));
  });
};

/**
 *
 * Action to Delete one record
 * @param {*} payload
 * @returns Object with type of action and payload
 */
const runDestroy = payload => {
  return {
    type: "DELETE",
    payload: payload
  };
};

/**
 *
 * Action to clear current record state
 * @returns Object with type of action
 */
export const clearRecord = () => {
  return {
    type: "CLEAR"
  };
};
