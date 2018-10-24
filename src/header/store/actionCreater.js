import { HEADER_GET_NAME } from "./actionTypes";


export const changeData = (data) => ({
    type: HEADER_GET_NAME,
    data
})

export const getAsyncData = (data) => {
    return (dispatch) => {
        setTimeout(() => {
        	dispatch(changeData(data))
        }, 2000)
    }
}