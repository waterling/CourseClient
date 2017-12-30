import React from 'react';
import * as newsApi from '../api/news-api';
import * as seriesApi from '../api/series-api';
import {connect} from "react-redux";
import ShortNews from './News/ShortNews';
import NewSeries from './OnlineSeries/NewSeries';
import './home.css';
import {Divider} from "material-ui";



class Home extends React.Component {
    componentDidMount(){
        newsApi.getLastNews(6);
        seriesApi.getLastSeries(3);
    }
    componentWillUnmount(){
        newsApi.clearStoreNews();
    }

    render() {
        let key = this.props.newsList.length;
        return (
            <div className="home">
                <div className="title">
                    <h1>Последние добавленные серии</h1>
                </div>
                <Divider/>
                <br/>
                {/*<div className="new_series_block">*/}
                    <NewSeries link={'/online/series/'} seriesList={this.props.seriesList} />
                {/*</div>*/}
                <div className="title_2">
                    <h2>Новости сериала</h2>
                </div>
                <Divider/>
                <br/>
                <ShortNews newsList={this.props.newsList} key={key} progress={false} buttons={[{
                    text: 'Learn More',
                    link: '/news/'
                }]} />
                <Divider/>
                <br/>
                <div className="desc_cat">
                    Уважаемые посетители сайта, данный ресурс посвящен исключительно телесериалу под названием «Мистер Робот». Здесь Вы можете посмотреть американский телепроект онлайн и совершенно бесплатно. С нами Вам не нужно ждать окончания надоедливой рекламы, проходить долгую и изнурительную процедуру регистрации. На нашем сайте Вы мгновенно приступаете к просмотру, а все серии доступны в хорошем качестве HD 720 с озвучкой от LostFilm. Администраторы сайта внимательно следят за выходом новых серий, как только появляется озвучка — серии сразу же доступны к просмотру. Мы заботимся о том, чтобы Ваш досуг был комфортным и без лишних неудобств. «Мистер Робот» — это американский сериал в жанре психологической драмы. Идея создания принадлежит Сэму Эсмейлу, а трансляция первого сезона началась на телеканале USA Network. Премьера пилотной серии Мистера Робота началась на фестивале SXSW и затем была размещена на YouTube. Первая серия настолько понравилась зрителям, что было принято единогласное решение снимать 2 сезон! История рассказывает нам об Эллиоте Алдерсене — молодом программисте, который работает на компанию Allsafe, что занимается кибербезопасностью американских корпораций. Неизвестные хакеры хотят завербовать Эллиота, чтобы обрушить мощь корпораций и начать управлять миром. Удастся ли им это? Сериал Мистер робот смотреть онлайн в HD 720.
                </div>
            </div>
        );
    }
}
const mapStateToProps = function(store) {
    return {
        seriesList: store.seriesState.seriesList,
        newsList: store.newsState.newsList
    };
};

export default connect(mapStateToProps)(Home);
