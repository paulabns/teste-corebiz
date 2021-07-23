import React from 'react';
import ButtonMob from './header/ButtonMob';
import Logo from './header/Logo';
import Nav from './header/Nav';

export default class Header extends React.Component{

    render(){
        return(
         <div className="header">
             <Logo />
             <Nav />
             <ButtonMob />
         </div>
        );
    }

}