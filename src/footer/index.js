import React, { Component } from 'react';
import { connect } from "react-redux";
import { FooterActionCreater } from "./store";

class Footer extends Component {
    render() {
        const { changeTo, sex, salary } = this.props

        return (
            <div className="App">
                <h1>Hello {sex}!!!</h1>
                <h1>I am {salary} years old</h1>
                <button onClick={changeTo}>changeData</button>
            </div>
        );
    }
}


const mapState = (state) => {
    return {
        salary: state.footer.salary,
        sex: state.footer.sex,
    }
}

const mapAction = (dispatch) => {
    return {
        changeTo() {
            dispatch(FooterActionCreater.changeDataTo({
                sex: "footer+++++++++",
                salary: "2222++++++++++++"
            }))
        },
        getAsyncDataTo() {
            dispatch(FooterActionCreater.getAsyncDataTo())
        }
    }
}

export default connect(mapState, mapAction)(Footer);


