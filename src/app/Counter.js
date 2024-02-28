import React from 'react'
import { RootState } from './Store';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment,incrementByAmount } from './counterSlice'
import { useAppSelector, useAppDispatch } from './hooks'
import { Button, Text, TextInput, View } from 'react-native';

export function Counter() {
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()
  let inputText = '';

  const handleAddNumber = () => {
    const number = parseInt(inputText);
    if (!isNaN(number)) {
      dispatch(incrementByAmount(number));
    }
  };

  return (
    
    <View>
      <View style={{alignItems:'center'}}>
      <Text style={{margin:20,backgroundColor:'yellow',fontSize:30,fontWeight:'bold',color:'black'
      }}>{count}</Text>

      <View style={{flexDirection:'row',marginTop:30}}>
      <Button
          title="Increment value"
          onPress={()=>dispatch(increment())}
        >
          Increment
        </Button>
        
        <View style={{marginLeft:10}}>
        <Button
          title="Decrement value"
          color='black'
          onPress={()=>dispatch(decrement())}

        >
          Decrement
        </Button>

      
        </View>
      </View>
        
<View style={{margin:40}}>


      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={(text) => (inputText = text)}
        placeholder="Enter number to add"
        keyboardType="numeric"
      />
      <Button 
      style={{marginTop:20}}
      onPress={handleAddNumber}
      title="Add Number"/>

      </View>

      </View>
    </View>
  )
}