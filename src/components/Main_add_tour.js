import React from 'react';
import Egipt from "../images/Rectangle 108.png";
import Image19 from "../images/image 19.png";
import Baikal from "../images/Байкал.png";
import U_Korea from "../images/Южная Корея.png";

const MainAddTour = () => {
    return (
        <div className="kartinki_turi">
            <div className="container freim one_1">
                <div className="row">
                    <p className="col-12 text_freim_one_1">Лучшие предложения</p>
                </div>
                <div className="row flex-row">
                    <div className="col-8 tur_pic_big BIG position-relative flex-column">
                        <img className="tur_pic_big BIG" src={Egipt} alt="Epsilon" width="695px" height="695px" title="Egipt"/>
                        <div className="text_in_pic_big position-absolute bottom-0 start-0">
                            <p className="v_kartinke">Египет</p>
                            <p className="v_kartinke">90 327 ₽</p>
                        </div>
                        <div className="pic_in_pic_big position-absolute bottom-0 end-0">
                            <img className="strelka_big" src={Image19} alt="perehod" width="79px" height="72px"/>
                        </div>
                    </div>

                    <div className="col-4 flex-column">
                        <div className="row">
                            <div className="col-12 tur_pic_big position-relative mb-2">
                                <img className="tur_pic_big small" src={Baikal} alt="Epsilon" width="695px" height="695px" title="Egipt"/>
                                <div className="text_in_pic_big position-absolute bottom-0 start-0">
                                    <p className="v_kartinke">Байкал</p>
                                    <p className="v_kartinke">20 327 ₽</p>
                                </div>
                                <div className="pic_in_pic_big position-absolute bottom-0 end-0">
                                    <img className="strelka_big" src={Image19} alt="perehod" width="79px" height="72px"/>
                                </div>
                            </div>

                            <div className="col-12 tur_pic_big position-relative">
                                <img className="tur_pic_big small" src={U_Korea} alt="Epsilon" width="695px" height="695px" title="Egipt"/>
                                <div className="text_in_pic_big position-absolute bottom-0 start-0">
                                    <p className="v_kartinke">Южная Корея</p>
                                    <p className="v_kartinke">190 856 ₽</p>
                                </div>
                                <div className="pic_in_pic_big position-absolute bottom-0 end-0">
                                    <img className="strelka_big" src={Image19} alt="perehod" width="79px" height="72px"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default MainAddTour;