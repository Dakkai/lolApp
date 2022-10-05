import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Text, View, TouchableHighlight, TouchableWithoutFeedback, StyleSheet } from 'react-native'

import { Delfav, setFav } from '../redux/actions'


export default function AddFav({item}) {
    const Fav = useSelector(state => state.Favorite)
    const dispatch = useDispatch()

    const isFav = Fav?.some(fav=>fav?.id === item.id)

    const FavHandler = (item) => {
        if (Fav?.some(e=>e.id===item.id)) {
          dispatch(Delfav(item))
        } else {
          dispatch(setFav(item))
        }
      }
      const emoji = isFav ? "✖":"🖤"

  return (
    <TouchableWithoutFeedback  onPress={() => {FavHandler(item)}}>
    <View style={style.container}>
        <Text style={{alignItems:"center"}}>{emoji}</Text>
    </View>
  </TouchableWithoutFeedback >
  )
}
 
const style = StyleSheet.create({
  container:{ width: 80, height:80,justifyContent:"center",alignItems:"center"},

})
