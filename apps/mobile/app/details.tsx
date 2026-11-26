import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function DetailsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your next screen</Text>
      <Text style={styles.description}>
        This route lives in its own file. Add another route by adding a file to the app folder.
      </Text>
      <Link href="/" style={styles.link}>
        ← Back home
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
  title: {
    color: '#201a35',
    fontSize: 30,
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
