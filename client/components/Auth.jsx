import Button from './Buttons.jsx';
import server from '../server-interface.js';
import './Auth.less';

class Auth extends window.React.Component {
  constructor(props) {
    super(props);
    this.email = '';
    this.password = '';
    this.logIn = this.logIn.bind(this);
    this.signUp = this.signUp.bind(this);
    this.logOut = this.logOut.bind(this);
    this.getUser = this.getUser.bind(this);
    if (typeof this.props.user=='string') this.getUser();
  }

  logIn() {
    if (this.email.trim() && this.password.trim())
      server.auth.logIn({email: this.email, password: this.password}, this.getUser);
  }

  signUp() {
    if (this.email.trim() && this.password.trim())
      server.auth.signUp({email: this.email, password: this.password}, this.getUser);
  }
  
  logOut() {
    server.auth.logOut(() => {
      this.props.onChange(undefined);
    });
  }

  getUser() {
    server.auth.getUser((resp) => {
      this.props.onChange(JSON.parse(resp));
    });
  }

  tabToggle(event) {
    event.preventDefault();
    window.$(event.target).tab('show');
  }

  render() {
    const setEmail = (e) => {
      this.email = e.target.value;
    };
    const setPassword = (e) => {
      this.password = e.target.value;
    };

    if (typeof this.props.user=='object') {
      const backGround = this.props.user.color;
      const color = '#'+(parseInt(backGround.replace('#',''), 16) ^ 0xFFFFFF | 0x1000000).toString(16).substring(1);
      const style = {backgroundColor: backGround, color: color, borderColor: color};
      return(
        <div className="Auth-panel" align="left">
          <p>{this.props.user.email}<Button.logOut onClick={this.logOut}/></p>
          <p>ID: {this.props.user.userID}</p>
          <p>Цвет брони: <span className="Auth-colorState" style={style}>{this.props.user.color}</span></p>
        </div>
      )
    } else {
      return(
        <div>
          <ul className="nav nav-tabs" id="navTab">
            <li className="active"><a href="#authin" onClick={this.tabToggle}>Вход</a></li>
            <li><a href="#authup" onClick={this.tabToggle}>Регистрация</a></li>
          </ul>
          <div className="Auth-panel Auth-panel-signOut">
            <div>
              <input type="email" className="form-control Auth-fields" placeholder="email" onChange={setEmail}/>
              <input type="password" className="form-control Auth-fields" placeholder="password" onChange={setPassword}/>
            </div>
            <div className="tab-content">
              <div className="tab-pane active" id="authin">
                <Button.logIn onClick={this.logIn}/>
              </div>
              <div className="tab-pane" id="authup">
                <Button.signUp onClick={this.signUp}/>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
}

export default Auth;