import { Pressable, SafeAreaView, ScrollView, Text, View } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import MotionBlurBackground from '../../../../src/components/MotionBlurBackground';
import DarkGlassCard from '../../../../src/components/DarkGlassCard';
import VerifiedBadge from '../../../../src/components/VerifiedBadge';
import NewDriverBadge from '../../../../src/components/NewDriverBadge';
import LevelBadge from '../../../../src/components/LevelBadge';
import { useMode } from '../../../../src/context/ModeContext';
import { useRide } from '../../../../src/context/RideContext';
import rides from '../../../../src/data/rides.json';
import drivers from '../../../../src/data/drivers.json';

export default function RideDetailScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const { mode } = useMode();
  const { setActiveRide } = useRide();

  const ride = rides.find(r => r.id === id);
  const driver = ride ? drivers.find(d => d.id === ride.driverId) : null;

  if (!ride || !driver) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#041134', alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ color: '#94A3B8' }}>Ride not found</Text>
      </SafeAreaView>
    );
  }

  function handleCTA() {
    setActiveRide(ride);
    router.push('/(tabs)/(home)/active-ride');
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#041134' }}>
      <MotionBlurBackground />

      {/* Header */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 16,
          paddingTop: 8,
          paddingBottom: 12,
          gap: 12,
        }}
      >
        <Pressable onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={24} color="#F1F5F9" />
        </Pressable>
        <Text style={{ fontSize: 18, fontWeight: '600', color: '#F1F5F9' }}>
          Ride Details
        </Text>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 120 }}
      >
        {/* Map placeholder */}
        <View style={{ marginHorizontal: 16, marginBottom: 16 }}>
          <View
            style={{
              height: 180,
              backgroundColor: '#082161',
              borderRadius: 12,
              alignItems: 'center',
              justifyContent: 'center',
              gap: 8,
            }}
          >
            <Ionicons name="map-outline" size={28} color="#94A3B8" />
            <Text style={{ fontSize: 14, fontWeight: '400', color: '#94A3B8' }}>
              Map
            </Text>
          </View>
        </View>

        {/* Driver info */}
        <View style={{ marginHorizontal: 16, marginBottom: 12 }}>
          <DarkGlassCard>
            <View style={{ padding: 16 }}>
              <View style={{ flexDirection: 'row', gap: 14, alignItems: 'flex-start' }}>
                <View
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: 32,
                    backgroundColor: '#082161',
                    borderWidth: 1,
                    borderColor: 'rgba(255,255,255,0.15)',
                  }}
                />
                <View style={{ flex: 1 }}>
                  <Text style={{ fontSize: 18, fontWeight: '600', color: '#F1F5F9' }}>
                    {driver.name}
                  </Text>
                  <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 6, marginTop: 6 }}>
                    {driver.verified && <VerifiedBadge />}
                    {driver.isNewDriver && <NewDriverBadge />}
                    <LevelBadge level={driver.level} />
                  </View>
                  {driver.totalRides > 0 && (
                    <Text style={{ fontSize: 12, fontWeight: '400', color: '#94A3B8', marginTop: 6 }}>
                      ⭐ {driver.rating} · {driver.totalRides} rides
                    </Text>
                  )}
                </View>
              </View>

              <Text style={{ fontSize: 12, fontWeight: '400', color: '#94A3B8', marginTop: 12, lineHeight: 18 }}>
                {driver.bio}
              </Text>

              <Text style={{ fontSize: 11, fontWeight: '400', color: '#94A3B8', marginTop: 8 }}>
                {driver.vehicle.year} {driver.vehicle.make} {driver.vehicle.model} · {driver.vehicle.colour} · {driver.vehicle.plate}
              </Text>
            </View>
          </DarkGlassCard>
        </View>

        {/* Ride info */}
        <View style={{ marginHorizontal: 16 }}>
          <DarkGlassCard>
            <View style={{ padding: 16, gap: 8 }}>
              <Text style={{ fontSize: 16, fontWeight: '600', color: '#F1F5F9' }}>
                {ride.origin} → {ride.destination}
              </Text>
              <Text style={{ fontSize: 12, fontWeight: '400', color: '#94A3B8' }}>
                Departing {ride.departureTime}
              </Text>
              <Text style={{ fontSize: 12, fontWeight: '400', color: '#94A3B8' }}>
                {ride.seatsAvailable} {ride.seatsAvailable === 1 ? 'seat' : 'seats'} available
              </Text>
              <Text style={{ fontSize: 16, fontWeight: '600', color: '#fe8e38' }}>
                ${ride.pricePerSeat} / seat
              </Text>
              <Text style={{ fontSize: 14, fontWeight: '400', color: '#F1F5F9', marginTop: 4, lineHeight: 20 }}>
                {ride.description}
              </Text>
            </View>
          </DarkGlassCard>
        </View>
      </ScrollView>

      {/* CTA */}
      <View style={{ padding: 16, paddingBottom: 24 }}>
        <Pressable
          onPress={handleCTA}
          style={{
            backgroundColor: '#fe8e38',
            borderRadius: 8,
            height: 52,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text style={{ fontSize: 14, fontWeight: '600', color: '#041134' }}>
            {mode === 'passenger' ? 'Request Ride' : 'Accept Request'}
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
