import { HEADER_GET_NAME } from "./actionTypes";
import { fromJS } from "immutable";


export const changeData = (data) => {
    //此时love是普通js对象，要转换成immutable对象，reducer才能正确处理(改变state)
    data.love && (data.love = fromJS(data.love))
    return {
        type: HEADER_GET_NAME,
        data
    }
}

export const getAsyncData = (data) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(changeData(data))
        }, 2000)
    }
}