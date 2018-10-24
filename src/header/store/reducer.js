import { fromJS } from "immutable";
import { HEADER_GET_NAME } from "./actionTypes";

let defaultState = fromJS({
    name: "header",
    age: "1111",
    love: ["111", "222", "333"]//此时数组也变成了immutable对象，改变数据时候也要转换成immutable对象
})

export default (state = defaultState, action) => {
    switch (action.type) {
        case HEADER_GET_NAME:
            //bad
            // return state
            //     .set("name", action.data.name)
            //     .set("age", action.data.age)
            //     .set("love", action.data.love)
            
            //good
            return state.merge({
                "name": ction.data.name,
                "age": action.data.age,
                "love": action.data.love
            })
        default:
            break;
    }
    return state
}