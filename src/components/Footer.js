import React from 'react';

export default class Footer extends React.Component{

    render(){
        return(
         <div className="footer">
                
                <div className="content">
                    <div>
                        <p><strong>Localização:</strong></p>
                        <p>Avenida Andrômeda, 2000. Bloca 6 e 8</p>
                        <p>Alphavile SP</p>
                        <p>brasil@corebiz.ag</p>
                        <p>+55 11 3090 1039</p>
                    </div> 
                    <div>
                        <img src="/img/logo-footer.png" />
                    </div>

                </div>

         </div>
        );
    }

}