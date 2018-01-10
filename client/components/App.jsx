import Auth from './Auth.jsx';
import Booking from './Booking.jsx';
import Purchase from './Purchase.jsx';
import server from '../server-interface.js';

import './App.less';

function getCookie(name) {
  const matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

class App extends window.React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: getCookie('user'),
      seats: [],
    };
    this.changeUser = this.changeUser.bind(this);
    this.changeBooking = this.changeBooking.bind(this);
  }

  changeUser(newData) {
    this.setState({user : newData});
  }

  changeBooking(newData) {
    this.setState({seats : newData});
  }
  
  resetAll() {
    server.action.resetAll(()=>{});
  }
  
  render() {
    return (
      <div className="App-mainContainer" align="center">

        <div className="App-content">
          <h1 className="App-header">Cinema Booking</h1>
          <div className="row">
            <div className="col-xs-12 col-md-4">
              <Auth user={this.state.user} onChange={this.changeUser}/>
            </div>
            <div className="col-xs-12 visible-xs visible-sm">
              <hr size="2" />
            </div>
            <div className="col-xs-12 col-md-4">
              <Booking user={this.state.user} maxReserv={Number(getCookie('maxReserv')) || 5} onChange={this.changeBooking}/>
            </div>
            <div className="col-xs-12 visible-xs visible-sm">
              <hr size="2" />
            </div>
            <div className="col-xs-12 col-md-4">
              <Purchase user={this.state.user} seats={this.state.seats} />
            </div>
          </div>
        </div>
        
        <div className="App-footer" style={{display: (typeof this.state.user=='object') ? 'block' : 'none'}}>
          <button
            className="btn btn-default"
            onClick={this.resetAll}>Сбросить все резервы</button>
        </div>
        
      </div>
    );
  }
}

export default App;
