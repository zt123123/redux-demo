import React ,{Component} from 'react';
import { connect } from "react-redux";
import { changeData,getAsyncData } from "./store/actionCreater";
import './App.css';

class App extends Component {
  componentDidMount(){
    this.props.getAsyncData()
  }

  render(){
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
    name: state.name,
    age: state.age,
  }
}

const mapAction = (dispatch) => {
  return {
    change() {
      dispatch(changeData({
        name: "tian",
        age: 1000
      }))
    },
    getAsyncData(){
      dispatch(getAsyncData())
    }
  }
}

export default connect(mapState, mapAction)(App);
