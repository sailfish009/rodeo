import _ from 'lodash';
import React from 'react';
import commonReact from '../../services/common-react';
import './history-viewer.css';
import EmptySuggestion from '../empty/empty-suggestion';
import HistoryList from './history-list';

/**
 * @class PackagesViewer
 * @extends ReactComponent
 */
export default React.createClass({
  displayName: 'HistoryViewer',
  propTypes: {
    filter: React.PropTypes.string.isRequired,
    history: React.PropTypes.array.isRequired
  },
  shouldComponentUpdate: function (nextProps) {
    console.log('HistoryViewer', 'shouldComponentUpdate', !commonReact.shallowEqual(this, nextProps));
    return !commonReact.shallowEqual(this, nextProps);
  },
  render: function () {
    const props = this.props,
      className = commonReact.getClassNameList(this),
      contents = [];

    console.log('HistoryViewer', 'render', props);

    if (props.history && props.history.length) {
      contents.push(<HistoryList {...props}/>);
    } else {
      contents.push(<EmptySuggestion label="Run a command."/>);
    }

    return <div className={className.join(' ')}>{contents}</div>;
  }
});
