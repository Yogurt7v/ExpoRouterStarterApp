import { useLocalSearchParams } from 'expo-router';
import { Text, View, StyleSheet } from 'react-native';

export default function RestDetail() {
  const { rest } = useLocalSearchParams<{ rest: string[] }>();

  return (
    <View style={styles.container}>
      <Text>Перехватывающие пути</Text>
      <Text>Детали: {rest.join('/')}</Text>
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
