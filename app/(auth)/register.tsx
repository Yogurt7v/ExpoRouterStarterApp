import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function Register() {
  const [user, setUser] = useState({
    nickName: '',
    email: '',
  });

  useEffect(() => {
    console.log('nickName:', user.nickName, 'email:', user.email);
  }, [user, setUser]);

  return (
    <View style={styles.container}>
      <Text>register</Text>
      <TextInput
        value={user.nickName}
        placeholder="Nickname"
        style={styles.nickName}
        onChange={(e) =>
          setUser({
            ...user,
            nickName: e.nativeEvent.text,
          })
        }
      ></TextInput>
      <TextInput
        placeholder="email"
        style={styles.nickName}
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.nativeEvent.text })}
      ></TextInput>
      <Button title="Register" onPress={() => router.replace('/profile')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  nickName: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    width: 200,
    borderRadius: 10,
  },
});
