import React, { useEffect, useState } from 'react';
import { View, Image, FlatList } from 'react-native';
import logoImg from '../../assets/logo-nlw-esports.png'
import { GameCard, GameData } from '../../components/GameCard';
import { Heading } from '../Heading';
import { styles } from './styles';
import { GAMES } from '../../utils/games';
export function Home() {
  const [games, setGames] = useState<GameData[]>([])
  useEffect(()=>{
    fetch('http://192.168.10.106:3333/games')
      .then(response => response.json())
      .then(dataa => setGames(dataa))
  }, [])
  return (
    <View style={styles.container}>
      <Image source={logoImg} style={styles.logo}/>
      <Heading 
      title="Encontre seu duo!"
      subtitle="Selecione o game que deseja jogar..."
      />
      <FlatList
      data={games}
      keyExtractor ={item => item.id}
      renderItem = {({item})=> (<GameCard data={item}/>)}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.contentList}
      />
    </View>
  );
}