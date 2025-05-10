import { Text, View, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function Home() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 4,
      }}
    >
      <Text>Home Page</Text>
      <Link href="/about" style={styles.link}>
        About
      </Link>
      <Link href="/profile" style={styles.link}>
        Profile
      </Link>
      <Link href="/products" style={styles.link}>
        Products
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  link: {
    color: 'blue',
  },
});
