import React, { Component } from 'react';
import { connect } from "react-redux";
import { HeaderActionCreater } from "./store";

class Header extends Component {
    render() {
        const { name, age, change } = this.props

        return (
            <div className="App">
                <h1>Hello {name}!!!</h1>
                <h1>I am {age} years old</h1>
                <button onClick={change}>changeData</button>
            </div>
        );
    }
}


const mapState = (state) => {
    return {
        name: state.header.name,
        age: state.header.age,
    }
}

const mapAction = (dispatch) => {
    return {
        change() {
            dispatch(HeaderActionCreater.changeData({
                name: "header+++++++++",
                age: "1111++++++++++++"
            }))
        },
        getAsyncData() {
            dispatch(HeaderActionCreater.getAsyncData())
        },
    }
}

export default connect(mapState, mapAction)(Header);


