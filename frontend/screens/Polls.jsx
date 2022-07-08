import React from 'react';

export default function Polls() {
  const polls = [
    {
      title: 'John Doe',
      image: require('../assets/img/person1.png'),
      description: 'Marketing director at MiVote',
    },
    {
      title: 'Jane Doe',
      image: require('../assets/img/person2.jpg'),
      description: 'Vice-Chief of Finance Department',
    },
    {
      title: 'John Doe',
      image: require('../assets/img/person1.png'),
      description: 'Marketing director at MiVote',
    },
    {
      title: 'Jane Doe',
      image: require('../assets/img/person2.jpg'),
      description: 'Vice-Chief of Finance Department',
    },
    {
      title: 'John Doe',
      image: require('../assets/img/person1.png'),
      description: 'Marketing director at MiVote',
    },
    {
      title: 'Jane Doe',
      image: require('../assets/img/person2.jpg'),
      description: 'Vice-Chief of Finance Department',
    },
  ];

  const renderItem = ({ item, index }) => (
    <ListItem key={`poll#${index}`} items={item} />
  );

  return (
    <SafeAreaView>
      <FlatList data={polls} renderItem={renderItem} />
    </SafeAreaView>
  );
}
