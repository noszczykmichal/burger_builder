import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import classes from '../BuildControls/BuildControls.module.css';


const controls=[
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'},
]

const buildControls=(props)=>(
    <div className={classes.BuildControls}>
        <p>Current Price: <strong>{props.totalPrice.toFixed(2)}$</strong></p>
        {controls.map(ctr=>(
            <BuildControl 
            key={ctr.label} 
            label={ctr.label} 
            added={()=>props.ingredientAdded(ctr.type)}
            removed={()=>props.ingredientRemoved(ctr.type)}
            disabled={props.disabled[ctr.type]}
            />
        ))}
        <button 
        className={classes.OrderButton} 
        disabled={!props.purchasable} 
        onClick={props.ordered}>{props.isAuth? 'ORDER NOW' : 'SIGN UP TO ORDER'}</button>
    </div>
);

export default buildControls;