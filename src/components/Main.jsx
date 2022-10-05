import React  from 'react'
import {  StyleSheet, View } from 'react-native'
import {  Route, Routes } from 'react-router-native'
import ChampList from './ChampList'
import ChampData from './ChampData'
import NavBar from './NavBar'
import Favs from './Favs'
import Constants from "expo-constants"



export default function Main() {

  return (
<View style={style.container}>
  <View style={{flex:14}}>
    <Routes>
      <Route path='/'exact element={<ChampList/>}/>
      <Route path='/Champion/:ChampID' element={<ChampData/>}/>
      <Route path='/Favs' element={<Favs />}/>
    </Routes>
  </View>
    <View style={{flex:1}}>
    <NavBar />
    </View>
    </View>
  
  )
}
const style = StyleSheet.create({
  container:{position:"relative",backgroundColor:"#bdc3c7",paddingTop: Constants.statusBarHeight,flex:15},

})
