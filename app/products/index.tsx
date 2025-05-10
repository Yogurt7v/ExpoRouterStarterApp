import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { Link } from 'expo-router';
import { useEffect, useState } from 'react';
import { Image } from 'expo-image';
import { Product } from '../types/types';

export default function ProductList() {
  const [products, setProducts] = useState<{ products: Product[] }>({ products: [] });

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
        <View style={styles.container}>
          <Link
            href="/products/best-sellers/playstation"
            style={{
              fontWeight: 'bold',
              fontSize: 20,
              justifyContent: 'center',
            }}
          >
            Распродажа
          </Link>
          <Link
            href="/products/black-friday/playstation"
            style={{
              fontWeight: 'bold',
              fontSize: 20,
              justifyContent: 'center',
            }}
          >
            Чёрная пятница
          </Link>
        </View>
        {products.products?.map((product: Product) => (
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
    fontSize: 30,
    paddingTop: 20,
    fontWeight: 'bold',
  },
});
