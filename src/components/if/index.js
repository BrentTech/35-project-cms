import React from 'react';
import PropTypes from 'prop-types';

/**
 *
 * Gates render funcitonality behind conditional logic.
 * @param {boolean} [condition=false]
 * @param {*} [children=null]
 * @returns React.children if conditional met
 */
const render = (condition = false, children = null) => {
  return !!condition ? children : null;
};

export /**
 *
 * Provides base If logic to build
 * then/else as needed.
 * @param {*} props
 */
const If = props =>
  React.Children.map(props.children, child =>
    React.cloneElement(child, { condition: props.condition }),
  );

export /**
 *
 * If/Then logic for when conditions are true
 * @param {*} props
 */
const Then = props => render(props.condition, props.children);

export /**
 *
 * If/Else logic for when conditions are false
 * @param {*} props
 */
const Else = props => render(!props.condition, props.children);

export /**
 *
 * Conditional logic for when condition is true
 * @param {*} props
 */
const When = props => render(props.condition, props.children);

export /**
 *
 * Conditional logic for when condition is false
 * @param {*} props
 */
const Unless = props => render(!props.condition, props.children);
