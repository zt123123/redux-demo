import React, { Component } from 'react';
import { connect } from "react-redux";
import { HeaderActionCreater } from "./store";

class Header extends Component {
    componentDidMount() {
        this.props.getAsyncData()
    }
    render() {
        const { name, age, change } = this.props

        return (
            <div className="App">
                <h1>{name}</h1>
                <h1>{age}</h1>
                <button onClick={change}>changeData</button>
            </div>
        );
    }
}


const mapState = (state) => {
    return {
        name: state.getIn(["header", "name"]),
        age: state.getIn(["header", "age"]),
    }
}

const mapAction = (dispatch) => {
    return {
        change() {
            dispatch(HeaderActionCreater.changeData({
                name: "header改变数据",
                age: "1111改变数据"
            }))
        },
        getAsyncData() {
            dispatch(HeaderActionCreater.getAsyncData({
                name: "header异步数据",
                age: "1111异步数据"
            }))
        }
    }
}

export default connect(mapState, mapAction)(Header);


