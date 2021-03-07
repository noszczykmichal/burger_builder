import React from 'react';
import classes from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/">Burger Builder</NavigationItem>
        <NavigationItem link="/my-orders">Orders</NavigationItem>  
        <NavigationItem link="/auth">Log in</NavigationItem>       
    </ul>
);

export default navigationItems;