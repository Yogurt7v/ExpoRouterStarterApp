import { Slot, Link } from 'expo-router';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function RootLayout() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Products</Text>
      </View>
      <Slot />

      <View style={styles.advertisement}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            gap: 10,
            flexDirection: 'row',
          }}
        >
          <Link href="/products/best-sellers/playstation" style={styles.link}>
            Распродажа
          </Link>
          <Link href="/products/black-friday/playstation" style={styles.link}>
            Чёрная пятница
          </Link>
        </ScrollView>
      </View>
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
