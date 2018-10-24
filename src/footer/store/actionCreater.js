import { FOOTER_GET_NAME } from "./actionTypes";


export const changeDataTo = (data) => ({
    type: FOOTER_GET_NAME,
    data
})

export const getAsyncDataTo = (data) => {
    return (dispatch) => {
        setTimeout(() => {
        	dispatch(changeDataTo(data))
        }, 2000)
    }
}