import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { Link } from 'expo-router';
import { useEffect, useState } from 'react';
import { Image } from 'expo-image';

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch('https://dummyjson.com/products').then((res) => res.json());
      setProducts(res);
    };
    fetchProducts();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Products</Text>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {products.products?.map((product) => (
          <Link key={product.id} href={`/products/${product.id}`}>
            <View
              style={{
                flexDirection: 'row',
                gap: 10,
                alignItems: 'center',
                padding: 20,
              }}
            >
              <Image
                source={{ uri: product.thumbnail }}
                style={{ width: 100, height: 100 }}
              ></Image>
              <Text>{product.title}</Text>
              <Text
                style={{
                  color: 'green',
                  fontWeight: 'bold',
                  fontSize: 16,
                }}
              >
                {product.price} $
              </Text>
            </View>
          </Link>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },
  scrollView: {
    width: '100%',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
