import { View, Text, TouchableOpacity, Image, StyleSheet, Modal, Alert , Pressable } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useState } from "react";

export default function ListPoll({ items }) {
    const [modalVisible, setModalVisible] = useState(false);
  const { navigate } = useNavigation();
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={items.image} style={styles.image} />
      <View>
        <Text style={styles.title}>{items.title}</Text>
        <Text style={styles.nationalID}>{items.nationalID}</Text>
        <Text style={styles.gender}>{items.gender}</Text>
        <Text style={styles.missionStatement}>{items.missionStatement}</Text>
        <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>You can only vote once!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Thank you</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Vote</Text>
      </Pressable>
    </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop:120,
    padding: 16,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  title: {
    fontSize: 18,
    paddingHorizontal: 16,
  },
  missionStatement: {
    fontSize: 15,
    color: '#827F7F',
    paddingHorizontal: 16,
  },
  gender :{
    fontSize: 15,
    color: '#827F7F',
    paddingHorizontal: 16,
  },
  nationalID: {
    fontSize: 15,
    color: '#827F7F',
    paddingHorizontal: 16,
  },
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: 80
  },
  modalView: {
    margin: 40,
    backgroundColor: "white",
    borderRadius: 8,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft:60,
    paddingRight:60,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#0B4890",
  },
  buttonClose: {
    backgroundColor: "#0B4890",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }

});
