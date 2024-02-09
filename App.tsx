import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import Portfolio from './src/screens/Portfolio';
import Colors from './src/constants/Colors';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.innerContainer}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Upstox Holding</Text>
          </View>
          <Portfolio />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  innerContainer: {
    flex: 1,
    backgroundColor: Colors.GREY,
  },
  header: {
    backgroundColor: Colors.PURPLE,
    padding: 16,
  },
  headerText: {
    color: Colors.WHITE,
    fontWeight: 'bold',
  },
});
