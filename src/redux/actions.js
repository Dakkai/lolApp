export const SET_FAV = "SET_FAV"
export const DEL_FAV = "DEL_FAV"

export function setFav(payload){
    return {
      type: SET_FAV,
      payload
    }
  }
export function Delfav(payload){
    return {
      type: DEL_FAV,
      payload
    }
  }
  