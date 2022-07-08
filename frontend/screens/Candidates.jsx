import React from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import ListItem from '../components/ListItem';

export default function Candidates() {
  const candidates = [
    {
      title: 'Kalisa Ivan',
      image: require('../assets/img/person1.png'),
      description: 'Marketing director',
      votes: '12 votes',
    },
    {
      title: 'Yvette Runi',
      image: require('../assets/img/person2.jpg'),
      description: 'Chief of Finance',
      votes: '10 vites',
    },
    {
      title: 'Kabera James',
      image: require('../assets/img/person1.png'),
      description: 'Marketing director',
      votes: '12 votes',
    },
    {
      title: 'Murenzi Tracy',
      image: require('../assets/img/person2.jpg'),
      description: 'Vice-Chief of Finance Department',
      votes: '30 votes', 
    },
    {
      title: 'Egide Gaspard',
      image: require('../assets/img/person1.png'),
      description: 'Marketing director at Vote',
      votes: '12 votes',
    },
    {
      title: 'Karemera Nice',
      image: require('../assets/img/person2.jpg'),
      description: 'Vice-Chief of Finance Department',
      votes: '40 votes',
    },
  ];

  const renderItem = ({ item, index }) => (
    <ListItem key={`candidate#${index}`} items={item} />
  );

  return (
    <SafeAreaView>
      <FlatList data={candidates} renderItem={renderItem} />
    </SafeAreaView>
  );

}
