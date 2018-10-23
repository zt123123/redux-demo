import { GET_NAME } from "./actionTypes";


export const changeData = (data) => ({
    type: GET_NAME,
    data
})

export const getAsyncData = () => {
    return (dispatch) => {
        setTimeout(() => {
        	dispatch(changeData({
        		name:"lisi",
        		age:2000
        	}))
        }, 2000)
    }
}