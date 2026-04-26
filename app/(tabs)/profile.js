import { Pressable, SafeAreaView, ScrollView, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import MotionBlurBackground from '../../src/components/MotionBlurBackground';
import DarkGlassCard from '../../src/components/DarkGlassCard';
import VerifiedBadge from '../../src/components/VerifiedBadge';
import LevelBadge from '../../src/components/LevelBadge';
import { useMode } from '../../src/context/ModeContext';
import drivers from '../../src/data/drivers.json';
import rides from '../../src/data/rides.json';

const me = drivers[0]; // Marcus Chen

const recentRides = rides.filter(r => r.driverId === me.id).slice(0, 3);

export default function ProfileScreen() {
  const { mode } = useMode();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#041134' }}>
      <MotionBlurBackground />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
      >
        {/* Avatar + identity */}
        <View style={{ alignItems: 'center', paddingTop: 32, paddingBottom: 8 }}>
          <View
            style={{
              width: 80,
              height: 80,
              borderRadius: 40,
              backgroundColor: '#082161',
              borderWidth: 2,
              borderColor: 'rgba(255,255,255,0.15)',
              marginBottom: 12,
            }}
          />
          <Text style={{ fontSize: 18, fontWeight: '600', color: '#F1F5F9' }}>
            {me.name}
          </Text>
          <View style={{ flexDirection: 'row', gap: 6, marginTop: 8 }}>
            <VerifiedBadge />
            <LevelBadge level={me.level} />
          </View>
          <Text style={{ fontSize: 11, fontWeight: '400', color: '#94A3B8', marginTop: 6 }}>
            Member since {me.memberSince}
          </Text>
        </View>

        {/* Stats */}
        <View style={{ marginHorizontal: 16, marginTop: 16 }}>
          <DarkGlassCard>
            <View style={{ flexDirection: 'row', padding: 16 }}>
              {[
                { label: 'Rating', value: `⭐ ${me.rating}` },
                { label: 'Total Rides', value: me.totalRides },
                { label: 'Level', value: me.level },
              ].map((stat, i) => (
                <View
                  key={stat.label}
                  style={{
                    flex: 1,
                    alignItems: 'center',
                    borderLeftWidth: i > 0 ? 1 : 0,
                    borderLeftColor: 'rgba(255,255,255,0.08)',
                  }}
                >
                  <Text style={{ fontSize: 16, fontWeight: '600', color: '#F1F5F9' }}>
                    {stat.value}
                  </Text>
                  <Text style={{ fontSize: 11, fontWeight: '400', color: '#94A3B8', marginTop: 2 }}>
                    {stat.label}
                  </Text>
                </View>
              ))}
            </View>
          </DarkGlassCard>
        </View>

        {/* Streak */}
        <View style={{ marginHorizontal: 16, marginTop: 12 }}>
          <DarkGlassCard>
            <View style={{ padding: 16 }}>
              <Text style={{ fontSize: 16, fontWeight: '600', color: '#F1F5F9' }}>
                🔥 3 day streak
              </Text>
              <View
                style={{
                  height: 4,
                  backgroundColor: 'rgba(255,255,255,0.08)',
                  borderRadius: 2,
                  marginTop: 12,
                  overflow: 'hidden',
                }}
              >
                <View
                  style={{
                    width: '60%',
                    height: '100%',
                    backgroundColor: '#fe8e38',
                    borderRadius: 2,
                  }}
                />
              </View>
              <Text style={{ fontSize: 11, fontWeight: '400', color: '#94A3B8', marginTop: 6, textAlign: 'right' }}>
                4 more rides to Level {me.level + 1}
              </Text>
            </View>
          </DarkGlassCard>
        </View>

        {/* Vehicle — driver mode only */}
        {mode === 'driver' && (
          <View style={{ marginHorizontal: 16, marginTop: 12 }}>
            <DarkGlassCard>
              <View style={{ padding: 16 }}>
                <Text style={{ fontSize: 16, fontWeight: '600', color: '#F1F5F9', marginBottom: 8 }}>
                  Your Vehicle
                </Text>
                <Text style={{ fontSize: 14, fontWeight: '400', color: '#F1F5F9' }}>
                  {me.vehicle.year} {me.vehicle.make} {me.vehicle.model} · {me.vehicle.colour}
                </Text>
                <Text style={{ fontSize: 11, fontWeight: '400', color: '#94A3B8', marginTop: 4 }}>
                  {me.vehicle.plate}
                </Text>
              </View>
            </DarkGlassCard>
          </View>
        )}

        {/* Recent rides */}
        <View style={{ marginHorizontal: 16, marginTop: 20 }}>
          <Text style={{ fontSize: 16, fontWeight: '600', color: '#F1F5F9', marginBottom: 12 }}>
            Recent Rides
          </Text>
          <DarkGlassCard>
            <View style={{ padding: 4 }}>
              {recentRides.map((ride, i) => (
                <View
                  key={ride.id}
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: 12,
                    borderTopWidth: i > 0 ? 1 : 0,
                    borderTopColor: 'rgba(255,255,255,0.06)',
                  }}
                >
                  <View>
                    <Text style={{ fontSize: 13, fontWeight: '500', color: '#F1F5F9' }}>
                      {ride.origin} → {ride.destination}
                    </Text>
                    <Text style={{ fontSize: 11, fontWeight: '400', color: '#94A3B8', marginTop: 2 }}>
                      {ride.departureTime}
                    </Text>
                  </View>
                  <Text style={{ fontSize: 13, fontWeight: '500', color: '#fe8e38' }}>
                    ${ride.pricePerSeat}
                  </Text>
                </View>
              ))}
            </View>
          </DarkGlassCard>
        </View>

        {/* Settings */}
        <View style={{ marginHorizontal: 16, marginTop: 12 }}>
          <DarkGlassCard>
            <Pressable>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: 16,
                }}
              >
                <Text style={{ fontSize: 14, fontWeight: '500', color: '#F1F5F9' }}>
                  Settings
                </Text>
                <Ionicons name="chevron-forward" size={18} color="#94A3B8" />
              </View>
            </Pressable>
          </DarkGlassCard>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
