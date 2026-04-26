import { Pressable, SafeAreaView, ScrollView, Text, View } from 'react-native';
import { useRouter } from 'expo-router';
import MotionBlurBackground from '../../../src/components/MotionBlurBackground';
import DarkGlassCard from '../../../src/components/DarkGlassCard';
import RatingPrompt from '../../../src/components/RatingPrompt';
import { useMode } from '../../../src/context/ModeContext';
import { useRide } from '../../../src/context/RideContext';

export default function RideCompleteScreen() {
  const router = useRouter();
  const { mode } = useMode();
  const { activeRide, clearRide } = useRide();

  const origin = activeRide?.origin ?? 'Humber North';
  const destination = activeRide?.destination ?? 'Square One';
  const price = activeRide?.pricePerSeat ?? 6;

  function handleDone() {
    clearRide();
    router.replace('/(tabs)/(home)');
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#041134' }}>
      <MotionBlurBackground />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1, padding: 16, paddingBottom: 40 }}
      >
        <View style={{ alignItems: 'center', paddingTop: 48 }}>
          <Text
            style={{
              fontSize: 22,
              fontWeight: '700',
              color: '#F1F5F9',
              textAlign: 'center',
              marginBottom: 24,
            }}
          >
            You've arrived! 🎉
          </Text>

          <DarkGlassCard style={{ width: '100%' }}>
            <View style={{ padding: 20, gap: 8 }}>
              <Text style={{ fontSize: 16, fontWeight: '600', color: '#F1F5F9' }}>
                {origin} → {destination}
              </Text>
              <Text style={{ fontSize: 12, fontWeight: '400', color: '#94A3B8' }}>
                Trip completed at 6:12 PM
              </Text>

              <View
                style={{
                  height: 1,
                  backgroundColor: 'rgba(255,255,255,0.08)',
                  marginVertical: 8,
                }}
              />

              {mode === 'driver' ? (
                <Text style={{ fontSize: 16, fontWeight: '600', color: '#fe8e38' }}>
                  💰 ${price}.00 added to wallet
                </Text>
              ) : (
                <Text style={{ fontSize: 16, fontWeight: '600', color: '#F1F5F9' }}>
                  💳 ${price}.00 charged
                </Text>
              )}
            </View>
          </DarkGlassCard>

          <RatingPrompt onRate={() => {}} onSkip={handleDone} />
        </View>
      </ScrollView>

      <View style={{ padding: 16 }}>
        <Pressable
          onPress={handleDone}
          style={{
            backgroundColor: '#fe8e38',
            borderRadius: 8,
            height: 52,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text style={{ fontSize: 14, fontWeight: '600', color: '#041134' }}>
            Done
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
