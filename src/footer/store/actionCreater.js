import { FOOTER_GET_NAME } from "./actionTypes";


export const changeDataTo = (data) => ({
    type: FOOTER_GET_NAME,
    data
})

export const getAsyncDataTo = () => {
    return (dispatch) => {
        setTimeout(() => {
        	dispatch(changeDataTo({
        		salary:"new footer",
        		sex:"new 22222"
        	}))
        }, 2000)
    }
}