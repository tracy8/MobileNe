import React from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import ListPoll from '../components/ListPoll';


export default function Polls() {
  const polls = [
    {
      title: 'Names: Kalisa Ivan',
      nationalID: 'NationalID: 1234567567865434589',
      image: require('../assets/img/person1.png'),
      gender:'Gender: male',
      missionStatement: 'MissionStatement: My personal mission statement is that I want to provide a safe space and productive learning environment for students so they can play and grow. Im excited to work in an environment that prioritizes children development and allows me to use my skills and childcare experience in my role. ',
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
