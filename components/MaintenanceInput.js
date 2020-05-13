import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Button, Modal} from 'react-native';

const MaintenanceInput = props => {
  const [enteredItem, setEnteredItem] = useState('');

  const itemInputHandler = (enteredText) => {
    setEnteredItem(enteredText);
  };

  const addItemHandler = () => {
    props.onAddItem(enteredItem);
    setEnteredItem('');
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Home Maintenance Item"
          style={styles.textContainer}
          onChangeText={itemInputHandler}
          value={enteredItem}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="CANCEL" color="red" onPress={props.onCancel} />
          </View>
          <View style={styles.button}>
            <Button style={styles.button} title="ADD" onPress={addItemHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textContainer: {
    width: '80%',
    height: 50,
    padding: 10,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 10
  },
  buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: '60%'
  },
  button: {
      width: '40%'
  }
})

export default MaintenanceInput;