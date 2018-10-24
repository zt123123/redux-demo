import React, { Component } from 'react';
import { connect } from "react-redux";
import { FooterActionCreater } from "./store";

class Footer extends Component {
    componentWillMount() {
        this.props.getAsyncDataTo()
    }
    render() {
        const { changeTo, sex, salary } = this.props

        return (
            <div className="App">
                <h1>{sex}</h1>
                <h1>{salary}</h1>
                <button onClick={changeTo}>changeData</button>
            </div>
        );
    }
}


const mapState = (state) => {
    return {
        salary: state.getIn(["footer", "sex"]),
        sex: state.getIn(["footer", "salary"]),
    }
}

const mapAction = (dispatch) => {
    return {
        changeTo() {
            dispatch(FooterActionCreater.changeDataTo({
                salary: "footer改变数据",
                sex: "2222改变数据"
            }))
        },
        getAsyncDataTo() {
            dispatch(FooterActionCreater.getAsyncDataTo({
                salary: "footer异步数据",
                sex: "22222异步数据",
            }))
        }
    }
}

export default connect(mapState, mapAction)(Footer);


