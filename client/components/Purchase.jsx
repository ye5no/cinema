import Button from './Buttons.jsx';

class Purchase extends window.React.Component {
  render() {
    return(
      <div>
        <p>Осуществить оплату забронированных мест?</p>
        <Button.purchase user={this.props.user} seats={this.props.seats} />
      </div>
    )
  }
}

export default Purchase;