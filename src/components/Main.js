import React from 'react';
import NewsLetter from './main/NewsLetter';
import Slider from './main/Slider';
import Vitrine from './main/Vitrine';

export default class Main extends React.Component{

    render(){
        return(
         <div>
             <Slider />
             <Vitrine />
             <NewsLetter />
         </div>
        );
    }

}