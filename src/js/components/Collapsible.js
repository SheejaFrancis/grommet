// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import TransitionGroup from 'react-addons-transition-group';
import classnames from 'classnames';
import Box from './Box';

import CSSClassnames from '../utils/CSSClassnames';

const CLASS_ROOT = CSSClassnames.COLLAPSIBLE;

class Collapse extends Component {
  componentWillEnter (callback) {
    const node = ReactDOM.findDOMNode(this);
    const contentHeight = node.clientHeight;
    node.classList.remove('animate');
    node.style.height = 0;
    setTimeout(() => {
      node.classList.add('animate');
      node.style.height = `${contentHeight}px`;
      setTimeout(callback, parseFloat(getComputedStyle(node).transitionDuration) * 1000);
    });
  }

  componentDidEnter () {
    const node = ReactDOM.findDOMNode(this);
    node.style.height = '';
  }

  componentWillLeave (callback) {
    const node = ReactDOM.findDOMNode(this);
    const contentHeight = node.clientHeight;
    node.style.height = `${contentHeight}px`;
    setTimeout(() => {
      node.classList.add('animate');
      node.style.height = 0;
      setTimeout(callback, parseFloat(getComputedStyle(node).transitionDuration) * 1000);
    });
  }

  render() {
    const classes = classnames(
      CLASS_ROOT,
      this.props.className
    );

    return <div {...this.props} className={classes} />;
  }
};

class Collapsible extends Component {
  render () {
    const Component = this.props.animate ? TransitionGroup : Box;

    return (
      <Component>
        {this.props.active &&
          <Collapse {...this.props} />
        }
      </Component>
    );
  }
};

Collapsible.propTypes = {
  active: PropTypes.bool,
  animate: PropTypes.bool
};

Collapsible.defaultProps = {
  animate: true
};

export default Collapsible;
