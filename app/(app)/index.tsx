import { Text, View, StyleSheet, Pressable } from 'react-native';
import { Link } from 'expo-router';

export default function Home() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
      }}
    >
      <Text>Home Page</Text>
      <Link href="/login" style={[styles.link, { color: 'green' }]}>
        Login
      </Link>
      <Link href="/about" style={styles.link}>
        About
      </Link>
      <Link href="/profile" style={styles.link}>
        Profile
      </Link>
      <Link href="/products" style={styles.link}>
        Products
      </Link>
      <Link href="/products/best-sellers/playstation" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Best Sellers</Text>
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  link: {
    color: 'blue',
    fontSize: 20,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 2,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});
