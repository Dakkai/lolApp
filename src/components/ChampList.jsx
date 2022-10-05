import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FlatList, Text, View, Image, StyleSheet } from 'react-native'
import { Link } from 'react-router-native'
import AddFav from './AddFav'



export default function ChampList() {
  const [Champions, setChampions] = useState(null)




  async function GetData() {
    setChampions(await axios("https://ddragon.leagueoflegends.com/cdn/12.17.1/data/es_AR/champion.json"))
  }
  useEffect(() => {
    GetData()
  }, [])

  const champs = []
  if (Champions) {
    for (const champ in Champions?.data?.data) {
      champs.push(Champions?.data?.data[champ])
    }
  }



  return (
    <>
      <FlatList
        style={{}}
        data={champs}
        renderItem={
          ({ item }) => {
            return <View style={{ flexDirection: "row", flex: 3 }}>
              <Link underlayColor={"#ced6e0"} style={{ flex: 2 }} to={`/champion/${item.id}`}>
                <View style={{ padding: 10 }} key={item.id}>
                  <View style={{ flexDirection: 'row', alignItems: "center" }}>
                    <Image
                      style={styles.img}
                      source={{ uri: `http://ddragon.leagueoflegends.com/cdn/12.17.1/img/champion/${item.image.full}` }} />
                    <View style={{ flexDirection: 'column', paddingLeft: 5, alignItems: 'flex-start' }}>
                      <Text style={{ fontWeight: 'bold', fontSize: 25 }} key={item.id}>{item.name}</Text>
                      <Text style={{ paddingLeft: 5 }} key={item.title}>{item.title}</Text>
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
  img: { width: 48, height: 48 },

});