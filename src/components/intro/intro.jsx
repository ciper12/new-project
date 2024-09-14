import React from 'react';
import './intro.css';
import bg from '../../assets/image.svg';
import text from '../../assets/Header.png';
import google from '../../assets/Badge.svg';
import store from '../../assets/Group.svg';



const Intro = () => {
    return(
       <section id='body'>
            <div className="bodyContent">
               
                <span className="drinkText">Refresh yourself <br />with <span className="drinkBrand">Drinkable</span></span>
                <p className="introText">We are presenting you one of the best coffe app Drinkable. <br /> Refresh yourself with Drinkable. You can find 100+ coffe <br /> Near your location.</p>
                <p className="downText">Download from</p>
                <a className='goog' href=""><img src={google} alt="" /></a>
                <a className='apps' href=""><img src={store} alt="" /></a>
            </div>
            <img src={bg} alt="" className="main" />
       </section>
    );
  
  }
  
  export default Intro