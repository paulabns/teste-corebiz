import React from 'react';

export default class Nav extends React.Component{

    render(){
        return(
         <div className="nav">
            <form>
                <input type="text" /> 
                <button><img src="/img/lupa.png" /></button>
            </form>
            <a href="" className="login"><img src="/img/login.png" /> Minha Conta</a>
            <a href=""><img src="/img/carrinho.png" /></a>
         </div>
        );
    }

}