import { Pressable, Text, View } from 'react-native';
import DarkGlassCard from './DarkGlassCard';
import VerifiedBadge from './VerifiedBadge';
import NewDriverBadge from './NewDriverBadge';
import LevelBadge from './LevelBadge';

export default function RideCard({ ride, driver, onPress, onRequestPress }) {
  return (
    <Pressable onPress={onPress}>
      <DarkGlassCard style={{ marginBottom: 12 }}>
        <View style={{ padding: 16 }}>
          {/* Header */}
          <View style={{ flexDirection: 'row', alignItems: 'flex-start', gap: 12 }}>
            <View
              style={{
                width: 44,
                height: 44,
                borderRadius: 22,
                backgroundColor: '#082161',
                borderWidth: 1,
                borderColor: 'rgba(255, 255, 255, 0.15)',
              }}
            />
            <View style={{ flex: 1 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap', gap: 6 }}>
                <Text style={{ fontSize: 16, fontWeight: '600', color: '#F1F5F9' }}>
                  {driver.name}
                </Text>
                {driver.verified && <VerifiedBadge />}
                {driver.isNewDriver && <NewDriverBadge />}
                <LevelBadge level={driver.level} />
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4, marginTop: 2 }}>
                {driver.totalRides > 0 && (
                  <Text style={{ fontSize: 11, fontWeight: '400', color: '#94A3B8' }}>
                    ⭐ {driver.rating} · {driver.totalRides} rides
                  </Text>
                )}
              </View>
              <Text style={{ fontSize: 11, fontWeight: '400', color: '#94A3B8', marginTop: 1 }}>
                {ride.postedAt}
              </Text>
            </View>
          </View>

          {/* New driver promo banner */}
          {driver.isNewDriver && (
            <View
              style={{
                backgroundColor: '#FBBF24',
                borderRadius: 4,
                paddingVertical: 6,
                paddingHorizontal: 12,
                marginTop: 12,
              }}
            >
              <Text style={{ fontSize: 12, fontWeight: '500', color: '#041134' }}>
                🎉 New driver discount — save 15%
              </Text>
            </View>
          )}

          {/* Body */}
          <Text
            style={{
              fontSize: 14,
              fontWeight: '400',
              color: '#F1F5F9',
              marginTop: 12,
              lineHeight: 20,
            }}
          >
            {ride.description}
          </Text>

          {/* Footer */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: 12,
            }}
          >
            <Text style={{ fontSize: 12, fontWeight: '500', color: '#fe8e38', letterSpacing: 0.2 }}>
              {ride.seatsAvailable} {ride.seatsAvailable === 1 ? 'seat' : 'seats'} · ${ride.pricePerSeat}
            </Text>
            <Pressable onPress={onRequestPress}>
              <Text style={{ fontSize: 14, fontWeight: '600', color: '#fe8e38' }}>
                Request
              </Text>
            </Pressable>
          </View>
        </View>
      </DarkGlassCard>
    </Pressable>
  );
}
