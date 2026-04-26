import { Text, View } from 'react-native';

export default function VerifiedBadge() {
  return (
    <View
      style={{
        backgroundColor: 'rgba(52, 211, 153, 0.15)',
        borderRadius: 4,
        paddingHorizontal: 6,
        paddingVertical: 2,
      }}
    >
      <Text style={{ fontSize: 11, fontWeight: '500', color: '#34D399' }}>
        Verified
      </Text>
    </View>
  );
}
