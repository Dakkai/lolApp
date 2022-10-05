import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Image, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'
import { useParams } from 'react-router-native';


export default function ChampData() {
  const [data, setdata] = useState(null)

  const { ChampID } = useParams();
  async function GetData() {
    setdata(await axios(`http://ddragon.leagueoflegends.com/cdn/12.18.1/data/es_AR/champion/${ChampID}.json`))
  }
  useEffect(() => {
    GetData()
  }, [])
  const champ = data?.data?.data[ChampID]


  return (<>
    {data && <ImageBackground
      imageStyle={style.Bgimg}
      blurRadius={3}
      source={{ uri: `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champ.id}_0.jpg` }}>
      <ScrollView style={style.srView}>
        <View style={style.container}>
          <View style={{ padding: 5, alignItems: "center" }}>
            <Text style={{ fontWeight: "bold" }}>{champ.name}</Text>
            <Text style={{}}>{champ.title}</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Image
              style={{ width: 100, height: 100 }}
              source={{ uri: `http://ddragon.leagueoflegends.com/cdn/12.17.1/img/champion/${champ.image.full}` }} />
            <View style={{ flexDirection: "row" }}>
              {champ?.tags?.map((tag) => {
                return <Text style={{ padding: 5 }} key={tag}>{tag}</Text>
              })}
            </View>
          </View>
        </View>
        <View style={{ alignSelf: "center", flexDirection: "row" }}>
        </View>
        <Text style={{ textAlign: "center", fontWeight: "bold" }}>{champ.lore.replace(/<[^>]*>/g, "")}</Text>
        <View>
          <View >
            <View style={style.container}>
              <Text style={{ fontWeight: "bold" }}>{champ.passive.name}</Text>
              <Image
                style={style.img}
                source={{ uri: `http://ddragon.leagueoflegends.com/cdn/12.18.1/img/passive/${champ.passive.image.full}` }} />
            </View>
            <View >
              <Text>{champ.passive.description.replace(/<[^>]*>/g, "")}</Text>
            </View>
          </View>
          {champ.spells.map((spell) => {
            return <View key={spell.id}>
              <View style={style.container}>
                <Text style={{ fontWeight: "bold" }}>{spell.name}</Text>
                <Image
                  style={style.img}
                  source={{ uri: `http://ddragon.leagueoflegends.com/cdn/12.18.1/img/spell/${spell.image.full}` }} />
              </View>
              <View >
                <Text>{spell.description.replace(/<[^>]*>/g, "")}</Text>
                {spell.resource === "Sin costo" ? <Text>{spell.resource}</Text> :
                  <Text>{spell.costBurn} de {champ.partype}</Text>}
                <Text>{spell.cooldownBurn} segundos de CD</Text>
              </View>
            </View>
          })}
        </View>
      </ScrollView>
    </ImageBackground>

    }
  </>

  )
}


const style = StyleSheet.create({
  container: { justifyContent: "space-around", alignItems: "center", flexDirection: "row", padding: 5 },
  img: { width: 40, height: 40 },
  Bgimg: { backgroundColor: "#7e7e7e", opacity: 0.5 },
  srView: { padding: 5, paddingTop: 0, marginBottom: 5 }

})
