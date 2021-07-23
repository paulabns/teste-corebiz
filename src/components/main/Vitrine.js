import React, { Component } from 'react';  
import api from './api';
  
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Rating from 'react-rating';
 


export default class Vitrine extends Component {

    state = {
        produtos: [],
    }

    async componentDidMount(){
        const responde = await api.get('./api/v1/products');  
        this.setState({produtos: responde.data});
    }  


    render(){

        var settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            initialSlide: 0,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  initialSlide: 2
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
                }
              }
            ]
          };


        const {produtos} = this.state;

        console.log(produtos);
 
        return(
            <div className="vitrineProdutos">
                <h1>Mais Vendidos</h1> 

                <Slider {...settings}>
                {produtos.map(produto => ( 
                     <div key={produto.productId}> 
                        <img src={produto.imageUrl}  />  
                          <p>{produto.productName}</p>
                          <Rating
                            initialRating={produto.stars}
                            readonly
                            emptySymbol={<img src="img/star.png" className="icon" />}
                            fullSymbol={<img src="img/star-full.png" className="icon" />}
                            /> 
                          <p>de:  R$ {produto.listPrice}</p>
                          <p className="price">por: R$ {produto.price}</p>   
                                                
                    </div>
                     ))} 
                </Slider>

            </div>


        );

    };

  };
  


