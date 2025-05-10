import { Image } from 'expo-image';
import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Product } from '.';

export default function ProductDetail() {
  const { id } = useLocalSearchParams();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch(`https://dummyjson.com/products/${id}`).then((res) =>
        res.json()
      );
      setProduct(res);
    };

    fetchProduct();
  }, [id]);

  return (
    <View style={styles.container}>
      {product && (
        <View style={{ flexWrap: 'wrap', gap: 10, alignItems: 'center' }}>
          <View style={{ flexDirection: 'row', gap: 10 }}>
            {product.images.map((image) => (
              <Image
                key={image}
                source={{ uri: image }}
                style={{ width: 300, height: 300 }}
              />
            ))}
          </View>
          <Text>{product.title}</Text>
          <Text>{product.brand}</Text>
          <Text>{product.category}</Text>
          <Text>{product.price}</Text>
        </View>
      )}
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
