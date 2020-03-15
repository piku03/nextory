import React from 'react';
import './login.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomBtn from '../custom-button/custom-button.component';
import {Link} from 'react-router-dom';

const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
const letter = /^[a-zA-Z]+$/;
const passchk = /^[0-9a-zA-Z]+$/;
const validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach(
        (val) => val.length > 0 && (valid = false)
    );
    return valid;
}

class LoginComp extends React.Component {
    constructor() {
        super();
        this.state = {
            fname: "",
            lname: "",
            email: "",
            password: "",
            errors: {
                fname: '',
                lname: '',
                email: '',
                password: ''
            }
        }

    }
    handleChange = (event) => {
        const { name, value } = event.target;
        let errors = this.state.errors;
        switch (name) {
            case 'fname':
                errors.fname =
                    letter.test(value)
                        ? ''
                        : 'Invalid First Name!';
                break;
            case 'lname':
                errors.lname =
                    letter.test(value)
                        ? ''
                        : 'Invalid Last Name!';
                break;
            case 'email':
                errors.email =
                    validEmailRegex.test(value)
                        ? ''
                        : 'Invalid Email!';
                break;
            case 'password':
                errors.password =
                    (value.length < 8 || !(passchk.test(value))) ? 'Invalid Password!' : '';
                break;
            default:
                break;
        }

        this.setState({ errors, [name]: value });
    }
    formSubmit = (event) => {
        event.preventDefault();
        if (validateForm(this.state.errors)) {
            alert("Form Submitted Succefully!!!");
            this.setState({
                fname: '',
                lname: '',
                email: '',
                password: ''
            })
        } else {
            console.error('Invalid Form')
        }
    }
    render() {
        return (
            <div className="outerDiv">
                <div className="upper-container">
                    <h3>Get started today!</h3>
                </div>
                <div className="form-container">
                    <form onSubmit={this.formSubmit}>
                        <div className="form-group">
                        <FormInput name="fname"
                            type="text"
                            handleChange={this.handleChange}
                            value={this.state.fname}
                            error={this.state.errors.fname}
                            label="First name" required />
                        
                        <FormInput name="lname"
                            type="text"
                            handleChange={this.handleChange}
                            value={this.state.lname}
                            error={this.state.errors.lname}
                            label="Last name" required />
                        
                        <FormInput name="email"
                            type="email"
                            handleChange={this.handleChange}
                            value={this.state.email}
                            error={this.state.errors.email}
                            label="Email address" required />
                        
                        <FormInput name="password"
                            type="password"
                            handleChange={this.handleChange}
                            value={this.state.password}
                            error={this.state.errors.password}
                            label="Password" required />
                        <hr className="spacing"></hr>
                        <CustomBtn role="button" onclick="javascript:this.form.submit();">Claim Your Free Trial</CustomBtn>
                        </div>
                    </form>
                    <p className="terms">You are agreeing to our <Link className="option" to="/">Terms and Services</Link>
                    </p>
                </div>
            </div>
        )
    }
}
export default LoginComp;