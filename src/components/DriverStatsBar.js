import { Text, View } from 'react-native';
import DarkGlassCard from './DarkGlassCard';

function StatColumn({ emoji, value, label, showDivider }) {
  return (
    <View style={{ flexDirection: 'row', flex: 1 }}>
      {showDivider && (
        <View
          style={{
            width: 1,
            backgroundColor: 'rgba(255, 255, 255, 0.08)',
            marginRight: 12,
          }}
        />
      )}
      <View style={{ flex: 1, alignItems: 'center' }}>
        <Text style={{ fontSize: 16, fontWeight: '600', color: '#F1F5F9' }}>
          {emoji} {value}
        </Text>
        <Text style={{ fontSize: 11, fontWeight: '400', color: '#94A3B8', marginTop: 2 }}>
          {label}
        </Text>
      </View>
    </View>
  );
}

export default function DriverStatsBar() {
  return (
    <DarkGlassCard>
      <View style={{ padding: 16 }}>
        <View style={{ flexDirection: 'row' }}>
          <StatColumn emoji="☕" value="$14.50" label="Earned this week" />
          <StatColumn emoji="🔥" value="3" label="Day streak" showDivider />
          <StatColumn emoji="⭐" value="4.9" label="Driver rating" showDivider />
        </View>

        {/* Progress bar */}
        <View
          style={{
            height: 4,
            backgroundColor: 'rgba(255, 255, 255, 0.08)',
            borderRadius: 2,
            marginTop: 14,
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

        <Text
          style={{
            fontSize: 11,
            fontWeight: '400',
            color: '#94A3B8',
            textAlign: 'right',
            marginTop: 6,
          }}
        >
          4 more rides to Level 3
        </Text>
      </View>
    </DarkGlassCard>
  );
}
