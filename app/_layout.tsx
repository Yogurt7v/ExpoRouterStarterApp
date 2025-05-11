import { Link, Slot } from 'expo-router';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

export default function RootLayout() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Link href="/" style={styles.text}>
          My First Expo App
        </Link>
      </View>
      <Slot />
      <View style={styles.footer}>
        <Text style={styles.text}>Footer</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'lightblue',
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  footer: {
    justifyContent: 'flex-end',
    padding: 20,
    backgroundColor: 'lightblue',
    width: '100%',
    borderTopWidth: 1,
    borderTopColor: 'black',
  },
  text: {
    fontSize: 20,
    fontFamily: 'Roboto',
    width: '20%',
  },
});
