import { SafeAreaView, Text, View } from 'react-native';
import MotionBlurBackground from '../../src/components/MotionBlurBackground';

export default function RidesScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#041134' }}>
      <MotionBlurBackground />
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', gap: 8 }}>
        <Text style={{ fontSize: 22, fontWeight: '700', color: '#F1F5F9' }}>
          Rides
        </Text>
        <Text style={{ fontSize: 14, fontWeight: '400', color: '#94A3B8' }}>
          Coming soon
        </Text>
      </View>
    </SafeAreaView>
  );
}
