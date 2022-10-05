import React from 'react'
import { Image, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import { Link, useLocation } from 'react-router-native'
import home  from "../../assets/home.png"
import Favs  from "../../assets/Favs.png"

 function Tab({to,icon}) {
  const {pathname} = useLocation()
 const active = to === pathname

  return (
    <Link  underlayColor={"#"} style={{width:"50%", alignItems:"center",justifyContent:"center", backgroundColor: active? "#a4b0be":"#ecf0f1"}} to={to}>
    <View style={{ height:50,width:50,alignItems:"center",justifyContent:"center"}}>
    <Image style={{height:30,width:30}} source={icon}/>
    </View>
    </Link>
  )
}


export default function NavBar() {


 

  return (
    <View style={style.container}>
      <Tab to="/" icon={home}></Tab>
      <Tab to="/Favs" icon={Favs}></Tab>
  
    </View>
  )
}
const style = StyleSheet.create({
  container: {height:"100%" , backgroundColor: "#ecf0f1", padding: 5,position:"absolute",left: 0, right: 0, bottom: 0,flexDirection:"row",justifyContent:"space-evenly" },

})
