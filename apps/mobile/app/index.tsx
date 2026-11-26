import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.eyebrow}>YOUR MOBILE STARTING POINT</Text>
      <Text style={styles.title}>Hello, DeesseJS.</Text>
      <Text style={styles.description}>
        A small Expo app for iOS and Android, ready for your next idea.
      </Text>
      <Link href="/details" style={styles.link}>
        Explore the second screen →
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 28,
    gap: 16,
  },
  eyebrow: {
    color: '#6c5ca8',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1.2,
  },
  title: {
    color: '#201a35',
    fontSize: 34,
    fontWeight: '700',
  },
  description: {
    color: '#625d70',
    fontSize: 17,
    lineHeight: 25,
    maxWidth: 360,
  },
  link: {
    alignSelf: 'flex-start',
    color: '#523d9a',
    fontSize: 16,
    fontWeight: '600',
    marginTop: 12,
    paddingVertical: 10,
  },
});
