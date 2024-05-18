import React from 'react';

import Ellipse_16 from '../images/Ellipse 16.png';
import Ellipse_17 from '../images/Ellipse 17.png';
import Ellipse_18 from '../images/Ellipse 18.png';
import Ellipse_19 from '../images/Ellipse 19.png';
import "../css/FooterBar.css"

const FooterBar = () => {
    return (
        <footer
            className="row d-flex align-items-center justify-content-center"
        >
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-12 rect_1">
                        <div className="ikonki">
                            <a href="https://t.me/Festfull" target="_blank">
                                <img src={Ellipse_19} alt="Дима" width="50em"
                                     height="50em" title="Ляпин_Дмиртрий" /> </a>
                            <a href="https://t.me/plusninap" target="_blank">
                                <img src={Ellipse_16} alt="Настя" width="50em"
                                     height="50em" title="Плюснина_Анастасия" />
                            </a>
                            <a href="https://t.me/Kristpik" target="_blank">
                                <img src={Ellipse_18} alt="Даша" width="50em"
                                     height="50em" title="Дергилёва_Дарья" />
                            </a>
                            <a href="https://t.me/Asceladdd" target="_blank">
                                <img src={Ellipse_17} alt="Я" width="50em"
                                     height="50em" title="Патруков_Максим" />
                            </a>
                        </div>
                        <p className="text eight"> Мы в соцсетях </p>
                    </div>

                    <div className="col-lg-4 col-md-4 col-sm-6 rect_2">
                        <div className="rectangle">
                            <p className="text eleven">
                                helpYou@gmail.com
                            </p>
                        </div>
                        <p className="text ten">
                            Служба поддержки
                        </p>
                    </div>

                    <div className="col-lg-4 col-md-4 col-sm-6 rect_3">
                        <div className="rectangle">
                            <p className="text eleven">
                                8(900) 000-00-00
                            </p>
                        </div>
                        <p className="text ten">
                            Служба поддержки
                        </p>
                    </div>

                    <div
                        className="col-lg-12 col-md-12 col-sm-12 niz justify-content-center">
                        <p className="text twelve">
                            © 2023 Путешествуй по России
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterBar;