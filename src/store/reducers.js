import { GET_NAME } from "./actionTypes";

let defaultState = {
    name: "zhang",
    age: 23
}

export default (state = defaultState, action) => {
    let newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case GET_NAME:
            newState.name = action.data.name
            newState.age = action.data.age
            break;
        default:
            break;
    }
    return newState
}