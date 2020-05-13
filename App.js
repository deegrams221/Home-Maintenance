import React, {useState} from 'react';
import {StyleSheet, View, Button, FlatList} from 'react-native';
import MaintenanceItem from './components/MaintenanceItem';
import MaintenanceInput from './components/MaintenanceInput';

export default function App() {
  const [maintenanceItems, setMaintenanceItems] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  // add
  const addItemHandler = (itemTitle) => {
    setMaintenanceItems(currentItems => [
      ...currentItems,
      {id: Math.random().toString(), value: itemTitle}
    ]);
    setIsAddMode(false);
  };

  // delete
  const removeItemHandler = itemId => {
    setMaintenanceItems(currentItems => {
      return currentItems.filter((item) => item.id !== itemId);
    });
  }

  // cancel
  const cancelItemAdditionHandler = () => {
    setIsAddMode(false);
  };

  return (
    <View style={styles.screen}>
      <Button title="Add New Item" onPress={() => setIsAddMode(true)} />
      <MaintenanceInput
        visible={isAddMode}
        onAddItem={addItemHandler}
        onCancel={cancelItemAdditionHandler}
      />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={maintenanceItems}
        renderItem={itemData => (
          <MaintenanceItem
            id={itemData.item.id}
            onDelete={removeItemHandler}
            title={itemData.item.value}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});
