import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function useStorage() {
  const [data, setData] = useState()


  const storeData = async (value) => {		
    try {
        if(value){
            console.log(value);
            await AsyncStorage.setItem('@Favs', JSON.stringify(...value))
        }else await AsyncStorage.setItem('@Favs', JSON.stringify(""))
    } catch (e) {
      console.log(e);
    }
  }

   const getData = async () => {
      try {
        const value = await AsyncStorage.getItem('@Favs')
        if(value !== null) {
         setData(JSON.parse(value))
        }
      } catch(e) {
        console.log(e);
      }
    }

 
        const clearStorage = async() => {
            AsyncStorage.clear();
        }
    
    useEffect(() => {
      getData()
    }, [])
    
  
  
    return [data,storeData,clearStorage]
}
