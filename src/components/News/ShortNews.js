import React from 'react';
import {Link} from "react-router-dom";

import './ShortNews.css'

// Using "Stateless Functional Components"
export default function(props) {
    let link='./resources/';
    return (
        <div className="news-list">
            {props.newsList.map(news => {
                let date = new Date(news.createdAt);
                let stringDate = date.getDate()+' '+(date.getMonth()+1)+' '+date.getFullYear();
                return (

                    <div key={news.id} className="news-list-item">
                        <div className="short_news">
                            <div className="title_news"><Link>{news.title}</Link></div>
                            <div className="photo_news">
                                <img width={190} height={120} src={link+news.imgURL} alt="Новый трейлер третьего сезона"/>
                                <div className="date_news">{stringDate}</div>
                            </div>
                            <div className="info_news">
                                <div className="desc_news">
                                    Уже совсем скоро. Мы находимся всего в шести неделях от долгожданной премьеры 3 сезона сериала "Мистер Робот", которая состоится 11 октября 2017 года. Это означает, что пришло время освежить память, начиная со второго сезона....
                                </div>
                            </div>
                        </div>
                    </div>

                );
            })}

        </div>

    );
}