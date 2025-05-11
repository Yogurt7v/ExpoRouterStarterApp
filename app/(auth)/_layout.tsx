import { Slot } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';

export default function AuthLayout() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Аутентификация</Text>
      </View>
      <Slot />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    padding: 20,
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  advertisement: {
    backgroundColor: 'rgba(255, 165, 0, 0.3)',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 0.1,
    width: '100%',
    gap: 10,
  },
  link: {
    fontSize: 20,
    color: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'orange',
    backgroundColor: 'rgba(255, 165, 0,7)',
    justifyContent: 'center',
  },
});
