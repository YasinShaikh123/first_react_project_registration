import React from 'react';
import { NavLink } from "react-router-dom";
import Button from 'react-bootstrap/Button';
class Otpinput extends React.Component {

  constructor(props) {
    super(props);
    this.state = { value: '', otp1: "", otp2: "", otp3: "", otp4: "", otp5: "", disable: true };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(value1, event) {

    this.setState({ [value1]: event.target.value });
  }

  handleSubmit(event) {

    const data = new FormData(event.target);
    console.log(this.state);
    event.preventDefault();
  }

  inputfocus = (elmnt) => {
    if (elmnt.key === "Delete" || elmnt.key === "Backspace") {
      const next = elmnt.target.tabIndex - 2;
      if (next > -1) {

        elmnt.target.form.elements[next].focus()
      }
    }
    else {
      console.log("next");
     
        const next = elmnt.target.tabIndex;
        if (next < 5) {
          elmnt.target.form.elements[next].focus()
        }
    }

  }

  render() {
    return (
      <div className='otp-page'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-6'>
                    <div className='header'>
                        <h4>Welcome Priyanka Joshi</h4>
                        <h2>Please Enter OTP</h2>
                    </div>
                <form onSubmit={this.handleSubmit}>
                    <div className="otpContainer">
                        <input
                            name="otp1"
                            type="text"
                            autoComplete="off"
                            className="otpInput"
                            value={this.state.otp1}
                            onKeyPress={this.keyPressed}
                            onChange={e => this.handleChange("otp1", e)}
                            tabIndex="1" maxLength="1" onKeyUp={e => this.inputfocus(e)}

                        />
                        <input
                            name="otp2"
                            type="text"
                            autoComplete="off"
                            className="otpInput"
                            value={this.state.otp2}
                            onChange={e => this.handleChange("otp2", e)}
                            tabIndex="2" maxLength="1" onKeyUp={e => this.inputfocus(e)}

                        />
                        <input
                            name="otp3"
                            type="text"
                            autoComplete="off"
                            className="otpInput"
                            value={this.state.otp3}
                            onChange={e => this.handleChange("otp3", e)}
                            tabIndex="3" maxLength="1" onKeyUp={e => this.inputfocus(e)}

                        />
                        <input
                            name="otp4"
                            type="text"
                            autoComplete="off"
                            className="otpInput"
                            value={this.state.otp4}
                            onChange={e => this.handleChange("otp4", e)}
                            tabIndex="4" maxLength="1" onKeyUp={e => this.inputfocus(e)}
                        />

                        </div>
                        <div className='proceed-btn'>
                                <NavLink className="navbar-link" to="/Profile">Proceed</NavLink>
                        </div>
                        <div className='resent-otp'>
                          <p>Didn't receive OTP? <NavLink className="navbar-link" to="#">Resend OTP</NavLink></p>
                        </div>
                    </form>
                </div>
                <div className='col-md-6'>
                    <div className='candidate'>
                        <h2>Instructions for Candidate</h2>
                        <ul>
                            <li>OTP Received on Email should be entered here</li>
                            <li>Resend OTP will resend the OTP on email again</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
}


export default Otpinput;