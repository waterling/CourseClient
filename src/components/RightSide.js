import React, {Component} from 'react';
import {VK, Group} from 'react-vk';
import OwlCarousel from 'react-owl-carousel';
import {Divider} from "material-ui";
import {shopLink} from "../etc/config";

export default class RightSide extends Component{
    render(){
        return(
            <div className="sidebar">
                <div className="title">
                    <h1>Наша группа ВКонтакте</h1>
                </div>
                <Divider/>
                <br/>
                <div className="widget-vk">
                    <VK  apiId={6284646}>
                        <Group groupId={127893232} />
                    </VK>
                </div>
                <div className="title">
                    <h1>Товары из магазина</h1>
                </div>
                <Divider/>
                <br/>
                <OwlCarousel
                    className="owl-theme"
                    items={1} autoplay
                    loop margin={5} mouseDrag touchDrag pullDrag dots={false}
                >
                    <div className="item">
                        <a href={shopLink+'products/5'}>
                            <img src="/image/shop1.jpg"/>
                        </a>
                    </div>
                    <div className="item">
                        <a href={shopLink+'products/10'}>
                            <img src="/image/shop2.jpg"/>
                        </a>
                    </div>
                    <div className="item">
                        <a href={shopLink+'products/7'}>
                            <img src="/image/shop3.jpg"/>
                        </a>
                    </div>
                    <div className="item">
                        <a href={shopLink+'products/6'}>
                            <img src="/image/shop4.jpg"/>
                        </a>
                    </div>
                    <div className="item">
                        <a href={shopLink+'products/9'}>
                            <img src="/image/shop5.jpg"/>
                        </a>
                    </div>
                </OwlCarousel>


            </div>
        )
    }
}