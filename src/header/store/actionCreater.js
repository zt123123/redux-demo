import { HEADER_GET_NAME } from "./actionTypes";


export const changeData = (data) => ({
    type: HEADER_GET_NAME,
    data
})

export const getAsyncData = () => {
    return (dispatch) => {
        setTimeout(() => {
        	dispatch(changeData({
        		name:"new header",
        		age:"new 1111"
        	}))
        }, 2000)
    }
}