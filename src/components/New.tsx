import React, { ReactElement } from 'react';
import '../css/scope/home.css';

const newProduct = [
    {
        order: "no001",
        title: "君の名は",
        img: "/img/kiminonawaJ.jpg",
    }, {
        order: "no002",
        title: "異世界藥局",
        img: "/img/isekai.jpg",
    }, {
        order: "no003",
        title: "你的名字",
        img: "img/kiminonawaC.jpg",
    }
]

class New extends React.Component {
    render() {
        return (
            <div className="centerColumn">
                <div className="title">
                    <div className="subject">
                        <p>新品上市</p>
                    </div>
                    <div className="more moreHover">
                        {/* <span (click)="changeToDetailType(detailType.New)"><span>more...</span></a> */}
                    </div>
                </div>
                <div className="cot">
                    {this.content()}
                </div>
            </div>

        );
    }

    private content() {
        let ele: ReactElement[] = [];
        newProduct.forEach(async (item, i) => {
            ele.push(
                <span key={i}>
                    {i < 2 && <div className="centerItem">
                        {/* <img alt="" src={require(item.img)}><br /> */}
                        <span className="intro">{item.title}</span>
                    </div>}
                    {i >= 2 && <div className="centerItemE">
                        {/* <img alt="" src={ require(item.img)}/><br /> */}
                        {/* <img alt="" src={require(item.img)} /><br /> */}
                        <span className="intro">{item.title}</span>
                    </div>}
                </span>)
        })
        return (ele);
    }

}

export default New;
