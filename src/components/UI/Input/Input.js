import React from 'react';

import classes from './Input.module.css';

const input = (props) => {
    let inputElement = null;
    const inputClasses=[classes.InputElement];
    const checkboxClasses=[classes.Label];
    
    if(props.invalid && props.shouldValidate && props.touched){
        inputClasses.push(classes.Invalid);
        checkboxClasses.push(classes.Invalid);
    }

    switch (props.elementType) {
        case ('input'):
            inputElement = <input
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value} 
                onChange={props.changed}/>;
            break;
        case ('textarea'):
            inputElement = <textarea
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value} 
                onChange={props.changed}/>;
            break;
        case ('select'):
            inputElement = (
                <select
                    className={inputClasses.join(' ')}
                    value={props.value} 
                    onChange={props.changed}>
                    {props.elementConfig['options'].map(option => (
                        <option  key={option.value} value={option.value}>
                            {option.displayValue}
                        </option>
                    ))}
                </select>);
            break;
        case ('input_checkbox'):
            inputElement=(
            <label className={checkboxClasses.join(' ')}>
                <input className={classes.InputCheckbox} {...props.elementConfig}
                onChange={props.changed}/>{props.label}
            </label>);
            break;
        default:
            inputElement = <input
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value} 
                onChange={props.changed}/>;
    }

    return (
        <div className={classes.Input}>
            {inputElement}
        </div>
    );
};


export default input;