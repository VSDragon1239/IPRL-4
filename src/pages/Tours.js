import {useContext, useEffect} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {useParams} from "react-router-dom";
import {fetchOneTour} from "../http/toursAPI";

const Tour = observer(() => {
    const {tour} = useContext(Context)
    const {id} = useParams();

    const Tours_id = async () => {
        try {
            let data;
            data = await fetchOneTour(id)
            tour.setTour(data)
        } catch (e) {
            alert(e.data)
        }
    }

    useEffect(() => {
        Tours_id()
    }, []);

    return (
            <div>
                {tour.Tour.map(tourItem => (
                    <div><h2>{tourItem.name}</h2>
                        <p>Страна: {tourItem.country}</p>
                        <p>Город: {tourItem.city}</p>
                        <p>Дата начала: {tourItem.date_start}</p>
                        <p>Дата окончания: {tourItem.date_end}</p>
                        <p>Тип тура: {tourItem.tour_type}</p>
                        <p>Вместимость: {tourItem.capacity}</p>
                        <p>Цена: {tourItem.price_per_one}</p>
                        <p>Описание: {tourItem.discription}</p>
                        {tourItem.images.map(image => (
                            <img key={image.id} src={image.path + image.filename + image.content_type} alt={image.alt} width={image.size.split('x')[0]} height={image.size.split('x')[1]} />
                        ))}</div>
                ))}

            </div>
    );
});


export default Tour;
