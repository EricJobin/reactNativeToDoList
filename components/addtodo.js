import React, {useState} from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
//<MaterialIcons name='add-circle-outline'size={18} color='#333'/>
// import Icon from 'react-native-vector-icons/FontAwesome';

export default function AddToDo({submitHandler}) {

  const [text, setText] = useState('');

  const changeHandler = (val)=>{
    setText(val);
  }

  // *********************************
  // Added this code to try and clear TextInput on Submit
  // Text seems to clear in State (if you hit 'add task' again it says it's too short), but text is still showing on screen.
  // Come back to this later, add this function in on button
  // const addNewTodo = (text) =>{
  //   submitHandler(text)
  //   setText('')
  // }
  //*******************************/

  return (
    <View>
      {/* <MaterialIcons name='add-circle-outline'size={18} color='#333'/> */}
      <TextInput
        style={styles.input}
        placeholder='New Task'
        onChangeText={changeHandler}
      />
      <Button
        onPress={()=>submitHandler(text)}
        // onPress={()=>addNewTodo(text)}
        // icon={<MaterialIcons name='add-circle-outline'size={18} color='#333'/>}
        // icon={
        //   <Icon
        //     name="arrow-right"
        //     size={15}
        //     color="white"
        //   />
        // }
        title='Add Task'
        color='coral'
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginTop: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 10,
    paddingTop: 8,
    paddingBottom: 4,
    paddingLeft: 6,
    backgroundColor: '#fff',
  },
});