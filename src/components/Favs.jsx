import React from 'react'
import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import {  useSelector } from 'react-redux'
import { Link } from 'react-router-native'
import AddFav from './AddFav'

export default function Favs() {
    const Favs = useSelector(state => state.Favorite)
    

    
    return (
        <>
      <FlatList
      style={{height:"92%"}} 
      data={Favs} 
      renderItem={
        ({item})=>{return <View style={{flexDirection:"row",flex:3}}>
        <Link style={{flex:2}} to={`/champion/${item?.id}`}>
         <View style={{padding:10}} key={item?.id}>
        <View style={{flexDirection:'row',alignItems:"center"}}>
         <Image
         style={styles.img} 
         source={{uri:`http://ddragon.leagueoflegends.com/cdn/12.17.1/img/champion/${item?.image?.full}`}}/>
         <View style={{flexDirection:'column',paddingLeft:5,alignItems:'flex-start'}}>
         <Text style={{fontWeight:'bold',fontSize:25}} key={item?.id}>{item?.name}</Text>
         <Text style={{paddingLeft:5}} key={item?.title}>{item?.title}</Text>
         </View>
      </View>
      </View>
         </Link>
        <AddFav item={item}/>
        </View>
      }}>
      </FlatList>
      </>
    )
}
const styles = StyleSheet.create({
    img:{width:48,height:48},
   
   });
