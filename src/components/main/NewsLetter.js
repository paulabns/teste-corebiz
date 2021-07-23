import React from 'react';

export default class NewsLetter extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            nome: '',
            email: ''
        }

        this.Cadastrar = this.Cadastrar.bind(this);
 
    }

    Cadastrar(event){
        const {nome, email} = this.state;

        if(nome !== '' && email !== '') {
            alert('nome');
        }else{
            this.setState({error: 'Falta nome'});
        }

        event.preventDefault();


    }

    render(){
        return(
         <div className="newsletter">
            <h3>Participe de nossas news com promoções e novidades!</h3>

            <form onSubmit={this.Cadastrar}>
                <input type="text" name="nome" value={this.state.nome} onChange={(e) => this.setState({nome: e.target.value})} />
                <input type="email" name="email" value={this.state.email} onChange={(e) => this.setState({email: e.target.value})} />
                <button type="submit">Eu quero!</button>
                {this.state.error &&  <p>{this.state.error}</p>}
            </form>

            <p>{this.state.nome}</p>
         </div>
        );
    }

}