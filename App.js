import React from 'react';
import { View, Button } from 'react-native';
import Toast from 'react-native-toast-message';


const App = () => {
  const showToast = () => {
    Toast.show({
      type: 'success',
      text1: 'Thành công!',
      text2: 'Đây là ví dụ về Toast thành công'
    });
  };


  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Hiển thị Toast" onPress={showToast} />
      <Toast />
    </View>
  );
};


export default App;
