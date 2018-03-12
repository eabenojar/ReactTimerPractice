var React = require('react');

var TimerControls = React.createClass({
  onStatusChange: function (newStatus) {
    return () => {
      this.props.onStatusChange(newStatus);
    }
  },
  timerButtons: function () {
    var { timerStatus } = this.props;
    if( timerStatus === 'started'){
      return <button className="button secondary" onClick={this.onStatusChange('paused')}>Paused</button>
    } else if (timerStatus === 'paused' || timerStatus === 'stopped') {
        return <button className="button primary" onClick={this.onStatusChange('started')}>Start</button>
    }
  },
  render: function() {
    return(
      <div>
        {this.timerButtons()}
        <button className="button alert hollow" onClick={this.onStatusChange('stopped')}>Clear</button>
      </div>
    )
  }
})

module.exports = TimerControls;
