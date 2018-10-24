import React, { Component } from 'react';
import { connect } from "react-redux";
import { HeaderActionCreater } from "./store";

class Header extends Component {
    componentDidMount() {
        this.props.getAsyncData()
    }
    render() {
        const { name, age, change, love } = this.props

        return (
            <div className="App">
                <h1>{name}</h1>
                <h1>{age}</h1>
                <ul style={{ textAlign: "left", width: '100px', margin: "auto" }}>
                    {
                        love.map(item => {
                            return <li key={item}>{item}</li>
                        })
                    }
                </ul>
                <button onClick={change}>changeData</button>
            </div>
        );
    }
}


const mapState = (state) => {
    return {
        name: state.getIn(["header", "name"]),
        age: state.getIn(["header", "age"]),
        love: state.getIn(["header", "love"]),
    }
}

const mapAction = (dispatch) => {
    return {
        change() {
            dispatch(HeaderActionCreater.changeData({
                name: "header改变数据",
                age: "1111改变数据",
                love: ["444", "555", "666"]
            }))
        },
        getAsyncData() {
            dispatch(HeaderActionCreater.getAsyncData({
                name: "header异步数据",
                age: "1111异步数据",
                love: ["777", "888", "999"]
            }))
        }
    }
}

export default connect(mapState, mapAction)(Header);


