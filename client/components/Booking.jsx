import server from '../server-interface.js';
import Button from './Buttons.jsx';
const socket = window.io();

class Booking extends window.React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: undefined,
      seats: false,
      userBooking: 0,
      
      marks: [],
      marksCounter: 0,
      
      maxReserv: this.props.maxReserv || 5,
      rows: 5,
      cols: 5,

      lastMessage: 'Выберите места'
    };
    this.checkReserv = this.checkReserv.bind(this);
    this.marksReset = this.marksReset.bind(this);
    this.changeState = this.changeState.bind(this);
    this.sendNewReservToServer = this.sendNewReservToServer.bind(this);
    this.getSeatsFromServer();
    socket
      .on('reserv', this.changeState)
      .on('free', this.changeState)
      .on('connect_error', socket.close);
  }

  componentWillReceiveProps(nextProps){
    if (this.state.user!=nextProps.user) {
      this.setState({user: nextProps.user}, this.countUserBooking);
    }
  };

  getSeatsFromServer() {
    server.action.getSeats((resp) => {
      this.setState({seats: JSON.parse(resp)}, this.countUserBooking);
    });
  };

  sendNewReservToServer() {
    const sending = {
      reserv: this.state.marks,
      flag: (this.state.marksCounter > 0)
    };
    server.action.setReserv(sending, (success) => {
      this.marksReset();
      const objSuccess = JSON.parse(success);
      let answer = (objSuccess.flag) ? 'Успешно забронированы места: ' : 'Успешно отменена бронь мест: ';
      answer += objSuccess.seats.toString();
      this.setState({lastMessage: answer});
    });
  };
  
  countUserBooking () {
    if (typeof this.state.user=='object' && this.state.seats!=false) {
      const len = this.state.seats.length;
      const reserved = [];
      for (let i = 0; i < len; i++) {
        if (this.state.seats[i].reserv == this.state.user.userID) reserved.push(this.state.seats[i].seatID);
      }
      this.setState({userBooking: reserved.length});
      this.props.onChange(reserved);
    } else {
      this.setState({userBooking: 0, lastMessage: 'Выберите места'});
      this.marksReset();
    }
  };

  changeState (data) {
    if (this.state.seats) {
      const {seats, userRes, color} = data;
      const newSeats = this.state.seats.map((seat, index) => {
        if (seats.indexOf(index+1)!=-1) {
          seat.reserv = userRes || 0;
          seat.color = color || '#FFFFFF';
        }
        return seat;
      });
      this.setState({seats: newSeats}, this.countUserBooking);
    }
  };

  checkReserv(event) {
    if (typeof this.state.user=='object' && this.state.seats!=false) {
      const num = Number(event.target.getAttribute('data-seat'));
      const earlyMarkedThisSession = (this.state.marks.indexOf(num) != -1);
      const freeSeat = (this.state.seats[num - 1].reserv == 0);
      const noLimitBooking = (this.state.userBooking + this.state.marks.length < this.state.maxReserv);
      const bookingPlus = (this.state.marksCounter >= 0);
      const bookingMinus = (this.state.marksCounter <= 0);
      const prevSessionBookingSeat = (this.state.seats[num - 1].reserv == this.state.user.userID);

      let newMarksCounter = this.state.marksCounter;
      if (earlyMarkedThisSession) {
        (this.state.marksCounter > 0) ? newMarksCounter-- : newMarksCounter++;
        this.markDown(num);
      } else
      if (freeSeat && noLimitBooking && bookingPlus && !earlyMarkedThisSession) {
        newMarksCounter++;
        this.markUp(num);
      } else
      if (prevSessionBookingSeat && bookingMinus) {
        newMarksCounter--;
        this.markUp(num);
      }
      this.setState({
        marksCounter: newMarksCounter  
      });
    }
  };

  markUp(num) {
    const newMarks = this.state.marks.slice();
    newMarks.push(num);
    this.setState({
      marks: newMarks
    });
  };

  markDown(num) {
    const newMarks = this.state.marks.slice();
    newMarks.splice(newMarks.indexOf(num), 1);
    this.setState({
      marks: newMarks
    });
  };

  marksReset() {
    this.setState({
      marks: [],
      marksCounter: 0,
    });
  };

  render() {
    const rows = new Array(Number(this.state.rows)).fill(0);
    const cols = new Array(Number(this.state.cols)).fill(0);
    const divs = rows.map((r0, indexRow) =>
        <div key={indexRow+1}>
          {
            cols.map((c0, indexCol, arr) => {
              const numSeat = indexRow*arr.length+indexCol+1;
              const selected = (this.state.marks.indexOf(numSeat)!=-1);
              const thisUser = (typeof this.state.user=='object' && this.state.seats)
              ? (this.state.seats[numSeat-1].reserv == this.state.user.userID)
              : false;
              
              const color = (this.state.seats) ? this.state.seats[numSeat-1].color : '#ffffff';
              return (
                <Button.seat 
                  key={numSeat}
                  seat={numSeat}
                  color={color}
                  
                  selected={selected}
                  thisUser={thisUser}
                  onClick={this.checkReserv}
                />);
            })
          }
        </div>
    );

    return (
      <div>
        <p>Мест доступно для бронирования: {this.state.maxReserv - this.state.userBooking}</p>
        <p>{this.state.lastMessage}</p>
        <div className="Grid">{divs}</div>
        <Button.reset marksCounter={this.state.marksCounter} onClick={this.marksReset}/>
        <Button.reserv marksCounter={this.state.marksCounter} onClick={this.sendNewReservToServer}/>
      </div>
    )
  }
}

export default Booking;