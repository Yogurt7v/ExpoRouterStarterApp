import { Text, View, StyleSheet } from 'react-native';

export default function About() {
  return (
    <View style={styles.container}>
      <Text>About Page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
