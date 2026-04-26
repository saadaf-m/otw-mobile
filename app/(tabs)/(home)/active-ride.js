import { Pressable, SafeAreaView, Text, View } from 'react-native';
import { useRouter } from 'expo-router';
import MotionBlurBackground from '../../../src/components/MotionBlurBackground';
import DarkGlassCard from '../../../src/components/DarkGlassCard';
import TripShareBanner from '../../../src/components/TripShareBanner';
import SOSButton from '../../../src/components/SOSButton';
import StatusPill from '../../../src/components/StatusPill';
import VerifiedBadge from '../../../src/components/VerifiedBadge';
import { useMode } from '../../../src/context/ModeContext';
import { useRide } from '../../../src/context/RideContext';
import drivers from '../../../src/data/drivers.json';
import passengers from '../../../src/data/passengers.json';

export default function ActiveRideScreen() {
  const router = useRouter();
  const { mode } = useMode();
  const { activeRide } = useRide();

  const driver = activeRide
    ? drivers.find(d => d.id === activeRide.driverId)
    : drivers[0];

  const passenger = passengers[0];

  const origin = activeRide?.origin ?? 'Humber North';
  const destination = activeRide?.destination ?? 'Square One';

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#041134' }}>
      <MotionBlurBackground />

      {/* Map placeholder */}
      <View
        style={{
          height: 300,
          backgroundColor: '#082161',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 10,
        }}
      >
        <Text style={{ fontSize: 16, fontWeight: '500', color: '#94A3B8' }}>
          Live Map
        </Text>
        {/* Pulsing dot placeholder */}
        <View
          style={{
            width: 12,
            height: 12,
            borderRadius: 6,
            backgroundColor: '#fe8e38',
          }}
        />
      </View>

      <View style={{ flex: 1, padding: 16, gap: 12 }}>
        {/* Share banner */}
        <TripShareBanner onShare={() => {}} />

        {/* Ride info */}
        <DarkGlassCard>
          <View style={{ padding: 16, gap: 10 }}>
            {/* Person info */}
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
              <View
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 22,
                  backgroundColor: '#082161',
                  borderWidth: 1,
                  borderColor: 'rgba(255,255,255,0.15)',
                }}
              />
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 16, fontWeight: '600', color: '#F1F5F9' }}>
                  {mode === 'passenger' ? driver?.name : passenger.name}
                </Text>
                {mode === 'passenger' && driver?.verified && <VerifiedBadge />}
              </View>
              <StatusPill status="confirmed" />
            </View>

            {/* Route */}
            <Text style={{ fontSize: 16, fontWeight: '600', color: '#F1F5F9' }}>
              {origin} → {destination}
            </Text>
            <Text style={{ fontSize: 12, fontWeight: '400', color: '#94A3B8' }}>
              Arriving in ~12 min
            </Text>
          </View>
        </DarkGlassCard>
      </View>

      {/* Bottom actions */}
      <View
        style={{
          flexDirection: 'row',
          gap: 12,
          paddingHorizontal: 16,
          paddingBottom: 24,
        }}
      >
        <SOSButton onPress={() => {}} />
        <Pressable
          onPress={() => router.push('/(tabs)/(home)/ride-complete')}
          style={{
            flex: 1,
            backgroundColor: '#fe8e38',
            borderRadius: 8,
            height: 48,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text style={{ fontSize: 14, fontWeight: '600', color: '#041134' }}>
            Complete Ride
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
