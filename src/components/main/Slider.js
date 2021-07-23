import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const styles = {
  paperContainer: {
      height: 420, 
      backgroundImage: `url(${"./img/slider/slider.png"})`
  }
};


    
  export default class SimpleSlider extends React.Component {
    render() {
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      return (
        <div className="SimpleSlider"> 
          <Slider {...settings}>

            <div>
                <div className="slider" style={styles.paperContainer}> 
                    <div> 
                      <h2>
                        <p>Olá, o que vocêestá buscando? </p>
                        <p><strong>Criar ou migrar o seu e-commerce?</strong></p>
                      </h2>
                    </div>
                </div>
            </div>

            <div>
                <div className="slider" style={styles.paperContainer}> 
                    <div> 
                      <h2>
                        <p>Olá, o que vocêestá buscando? </p>
                        <p><strong>Criar ou migrar o seu e-commerce?</strong></p>
                      </h2>
                    </div>
                </div>
            </div>

            <div>
                <div className="slider" style={styles.paperContainer}> 
                    <div> 
                      <h2>
                        <p>Olá, o que vocêestá buscando? </p>
                        <p><strong>Criar ou migrar o seu e-commerce?</strong></p>
                      </h2>
                    </div>
                </div>
            </div> 
          </Slider>
        </div>
      );
    }
  }

  


