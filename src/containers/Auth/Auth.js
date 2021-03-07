import React, { Component } from 'react';

import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import classes from './Auth.module.css';

class Auth extends Component {

    state = {
        controls: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your E-mail',
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Password',
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6
                },
                valid: false,
                touched: false
            }

        }
    }

    checkValidity(value, rules) {

        let isValid = true;

        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.minLength) {
            isValid = value.trim().length >= rules.minLength && isValid;
        }

        if (rules.maxLength) {
            isValid = value.trim().length <= rules.maxLength && isValid;
        }
        
        if(rules.isEmail){
            isValid= value.trim().split('').includes('@') ? true : false;
        }

        return isValid;
    }

    inputChangedHandler = (event, controlName) => {

        const updatedControls = {
            ...this.state.controls,
            [controlName]: {
                ...this.state.controls[controlName],
                value:  event.target.value,
                valid: this.checkValidity(event.target.value, this.state.controls[controlName].validation),
                touched: true
            }
        };

        this.setState({ controls: updatedControls });
    }

    render() {

        const formElementsArray = [];

        for (let key in this.state.controls) {
            formElementsArray.push({
                id: key,
                config: this.state.controls[key]
            });
        };

        const form = formElementsArray.map(formElment => (
            <Input
                key={formElment.id}
                elementType={formElment.config.elementType}
                elementConfig={formElment.config.elementConfig}
                value={formElment.config.value}
                invalid={!formElment.config.valid}
                shouldValidate={formElment.config.validation}
                touched={formElment.config.touched}
                changed={(event) => this.inputChangedHandler(event, formElment.id)}
            />
        )
        );

        return (
            <div className={classes.Auth}>
                <form>
                    {form}
                    <Button btnType='Success'>SUBMIT</Button>
                </form>
            </div >
        );
    };
}

export default Auth;