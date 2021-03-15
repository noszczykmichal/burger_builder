import React from 'react';
import classes from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => {
    let navMenu = (
        <ul className={classes.NavigationItems}>
            <NavigationItem link="/">Burger Builder</NavigationItem>
            <NavigationItem link="/auth">Authenticate</NavigationItem>
        </ul>
    )

    if (props.isAuthenticated) {
        navMenu = (
            <ul className={classes.NavigationItems}>
                <NavigationItem link="/">Burger Builder</NavigationItem>
                <NavigationItem link="/my-orders">Orders</NavigationItem>
                <NavigationItem link="/logout">Logout</NavigationItem>
            </ul>
        )
    }

    return navMenu;
};

export default navigationItems;