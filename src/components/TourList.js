import React, {useContext, useEffect} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {useParams} from "react-router-dom";
import {fetchOneTour} from "../http/toursAPI";

const TourList = observer(() => {
    const {tour} = useContext(Context)


    return (
        <div>
            {tour.Tour.map(tourItem => (
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
    );
});

export default TourList;
