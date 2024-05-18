import React, {useContext, useEffect, useState} from 'react';
import {Context} from "../index";
import {useNavigate} from "react-router-dom";
import {observer} from "mobx-react-lite";
import '../css/Main.css'
import Main_add_tour from "../components/Main_add_tour";
import {fetchTours} from "../http/toursAPI";

const Main = observer(() => {
    const {tour} = useContext(Context)
    const navigate = useNavigate();

    const Tourses = async () => {
        try {
            let datas;
            datas = await fetchTours()
            tour.setTours(datas)
        } catch (e) {
            alert(e.datas.data)
        }

    }

    useEffect(() => {
        Tourses();
    }, []);

    return (
        <div>
            <div className="Main">
                <div className="outer_form container" style={{backgroundColor:'rgb(115,157,205)'}}>
                    <div className="row">
                        <div className="col-12">
                            <p className="text block_1">Заказать удивительный тур в невероятную страну</p>
                        </div>
                    </div>

                    <form name="CHOISE" action="#" method="post">
                        <div className="form-row flex align-items-center mb-3 justify-content-between" style={{backgroundColor:'rgb(184,203,233)'}}>

                            <div className="col-3 form-group login l " style={{marginRight: "1vw"}}>
                                <label>Куда</label>
                                <input className="i form-control" type="text" name="to"/>
                            </div>

                            <div className="col-3 form-group login l "  style={{marginRight: "1vw"}}>
                                <label>Дата вылета</label>
                                <input className="i form-control" type="date" name="departureDate"/>
                            </div>

                            <div className="col-2 login l mr-2" style={{marginRight: "1vw"}}>
                                <label>Ночи</label>
                                <input className="i form-control" type="number" min="1" name="nights"/>
                            </div>

                            <div className="col-2 login l mr-2" style={{marginRight: "1vw"}}>
                                <label>Туристы</label>
                                <input className="i form-control" type="number" name="tourists"/>
                            </div>

                            <div className="col-2  align-self-center" style={{marginRight: "1vw", marginTop: "2.8rem"}}>
                                <button style={{backgroundColor:'rgb(60,90,92)'}} type="submit" className="btn btn-success align-self-center">Подобрать</button>
                            </div>
                        </div>
                    </form>
                </div>

                <div>
                    {tour.Tours.map(tourItem => (
                        <div key={tourItem.id} onClick={() => navigate(`/tour/${tourItem.id}`)}>
                            <h2>{tourItem.name}</h2>

                            <p>Цена: {tourItem.price_per_one}</p>
                            <p>Тип тура: {tourItem.tour_type}</p>
                            {tourItem.images.map(image => (
                                <img key={image.id} src={process.env.REACT_APP_API_URL + image.path + image.filename + image.context_type} alt={image.alt} width={image.size.split('x')[0]} height={image.size.split('x')[1]} />
                            ))}
                        </div>
                    ))}
                </div>
                <Main_add_tour />
        </div>

        </div>
    );
});

export default Main;
