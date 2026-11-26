import { Link } from 'expo-router';
import { ArrowLeft } from 'lucide-react-native';
import { Pressable, Text, View } from 'react-native';

export default function DetailsScreen() {
  return (
    <View className="flex-1 justify-center gap-4 bg-[#fbfaff] px-7">
      <Text className="text-[30px] font-bold text-[#201a35]">Your next screen</Text>
      <Text className="max-w-[360px] text-[17px] leading-[25px] text-[#625d70]">
        This route lives in its own file. Add another route by adding a file to the app folder.
      </Text>
      <Link href="/" asChild>
        <Pressable
          accessibilityRole="button"
          className="mt-3 flex-row items-center gap-2 self-start rounded-full bg-[#523d9a] px-4 py-3 active:opacity-80"
        >
          <ArrowLeft color="white" size={18} />
          <Text className="text-base font-semibold text-white">Back home</Text>
        </Pressable>
      </Link>
    </View>
  );
}
