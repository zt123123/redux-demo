import { FOOTER_GET_NAME } from "./actionTypes";
import { fromJS } from "immutable";

let defaultState = fromJS({
    sex: "footer",
    salary: "22222"
})

export default (state = defaultState, action) => {
    switch (action.type) {
        case FOOTER_GET_NAME:
            return state.set("sex", action.data.sex)
                .set("salary", action.data.salary)
        default:
            break;
    }
    return state
}