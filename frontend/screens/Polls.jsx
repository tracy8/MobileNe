import React from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import ListPoll from '../components/ListPoll';


export default function Polls() {
  const polls = [
    {
      title: 'Kalisa Ivan',
      nationalID: '1234567567865434589',
      image: require('../assets/img/person1.png'),
      gender:'male',
      missionStatement: 'Work with the government hand in hand to give the best i can to the people! ',
    },
  ];

  const renderItem = ({ item, index }) => (
    <ListPoll key={`poll#${index}`} items={item} />
  );

  return (
    <SafeAreaView>
      <FlatList data={polls} renderItem={renderItem} />
    </SafeAreaView>
  );
}
