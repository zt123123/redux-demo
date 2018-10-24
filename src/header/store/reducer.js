import { fromJS } from "immutable";
import { HEADER_GET_NAME } from "./actionTypes";

let defaultState = fromJS({
    name: "header",
    age: "1111"
})

export default (state = defaultState, action) => {
    switch (action.type) {
        case HEADER_GET_NAME:
            return state
                .set("name", action.data.name)
                .set("age", action.data.age)
        default:
            break;
    }
    return state
}