var React = require('react');
var Clock = require('Clock');
var TimerControls = require('TimerControls');

var Timer = React.createClass({
  getInitialState: function() {
    return{
      seconds: 0,
      timerStatus: 'stopped'
    };
  },
  componentDidUpdate: function(prevProps, prevState) {
    if(this.state.timerStatus !== prevState.timerStatus){
      switch (this.state.timerStatus) {
        case 'started':
          this.setTimer();
          break;
        case 'stopped':
          this.setState({seconds: 0});
        case 'paused':
          clearInterval(this.timer)
          this.timer = undefined;
          break;
        default:

      }
    }
  },
  setTimer: function(){
    this.timer = setInterval(() => {
      var newCount = this.state.seconds + 1;
      this.setState({
        seconds: newCount
      })
    }, 1000)
  },
  handleSetCountdown: function(seconds){
    this.setState({
      seconds: seconds,
      timerStatus: 'started'
    });
  },
  handleStatusChange: function (newStatus) {
    this.setState({timerStatus: newStatus});
  },
  render: function() {
    var {seconds} = this.state;
    return(
      <div>
        <h3 className="page-title">Timer</h3>
        <Clock totalSeconds={seconds} />
        <TimerControls timerStatus={this.state.timerStatus} onStatusChange={this.handleStatusChange}/>
      </div>
    )
  }
})

module.exports = Timer;
