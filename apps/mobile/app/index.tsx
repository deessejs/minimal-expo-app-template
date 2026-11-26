import { Link } from 'expo-router';
import { ArrowRight } from 'lucide-react-native';
import { Pressable, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View className="flex-1 justify-center gap-4 bg-[#fbfaff] px-7">
      <Text className="text-xs font-bold tracking-[1.2px] text-[#6c5ca8]">
        YOUR MOBILE STARTING POINT
      </Text>
      <Text className="text-[34px] font-bold text-[#201a35]">Hello, DeesseJS.</Text>
      <Text className="max-w-[360px] text-[17px] leading-[25px] text-[#625d70]">
        A small Expo app for iOS and Android, ready for your next idea.
      </Text>
      <Link href="/details" asChild>
        <Pressable
          accessibilityRole="button"
          className="mt-3 flex-row items-center gap-2 self-start rounded-full bg-[#523d9a] px-4 py-3 active:opacity-80"
        >
          <Text className="text-base font-semibold text-white">Explore the second screen</Text>
          <ArrowRight color="white" size={18} />
        </Pressable>
      </Link>
    </View>
  );
}
