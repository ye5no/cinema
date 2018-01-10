import './Buttons.less';

export default {
  seat : (props) => {
    const backgroundColor = props.color;
    const color = '#'+(parseInt(backgroundColor.replace('#',''), 16) ^ 0xFFFFFF | 0x1000000).toString(16).substring(1);

    const style = {
      opacity: (props.thisUser || props.selected) ? 1 : 0.65,
      border: (props.selected) ? '2px dashed '+color : '2px solid #ffffff',
      backgroundColor : backgroundColor,
      color: color
    };

    return (
      <button
        className = 'buttonSeat'
        data-seat={props.seat}
        style={style}
        onClick={props.onClick}
      >
        {props.seat}
      </button>
    )
  },
  reset: (props) => {
    return(
      <button
        className="btn btn-default buttonReset"
        style={{display: (props.marksCounter==0) ? 'none' : 'block'}}
        onClick={props.onClick}
      >
        Снять выделение
      </button>
    );
  },
  signUp: (props) => {
    return(
      <button
        className="btn btn-default"
        onClick={props.onClick}
      >
        Зарегистрироваться
      </button>
    );
  },
  logIn: (props) => {
    return (
      <button className="btn btn-default" onClick={props.onClick}>Войти</button>
    )
  },
  logOut: (props) => {
    return (
      <button className="btn btn-default buttonLogout" onClick={props.onClick}>
        <span className="glyphicon glyphicon-log-out"/>
      </button>
    )
  },
  reserv: (props) => {
    const flag = (props.marksCounter>0) ? 'buttonReserv-plus' : 'buttonReserv-minus';
    const className = 'btn btn-default buttonReserv ' + flag;
    const style = {display: (props.marksCounter==0) ? 'none' : 'block'};
    const text = (props.marksCounter>0) ? 'Забронировать' : 'Снять бронь';
    return (
      <button
        className={className}
        style={style}
        onClick={props.onClick}
      >{text}</button>
    )
  },
  purchase: (props) => {
    const showIt = (typeof props.user=='object' && props.seats.length!==0);
    const text =  showIt ? 'ID'+props.user.userID+': '+props.seats.toString() : 'Ничего не забронировано';
    return (
      <button
        className="btn btn-default"
        disabled={!showIt}
      >{text}</button>
    )
  }
}