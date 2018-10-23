import { FOOTER_GET_NAME } from "./actionTypes";

let defaultState = {
    sex: "footer",
    salary: "22222"
}

export default (state = defaultState, action) => {
    let newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case FOOTER_GET_NAME:
            newState.sex = action.data.sex
            newState.salary = action.data.salary
            break;
        default:
            break;
    }
    return newState
}