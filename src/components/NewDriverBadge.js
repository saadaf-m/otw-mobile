import { Text, View } from 'react-native';

export default function NewDriverBadge() {
  return (
    <View
      style={{
        backgroundColor: 'rgba(251, 191, 36, 0.15)',
        borderRadius: 4,
        paddingHorizontal: 6,
        paddingVertical: 2,
      }}
    >
      <Text style={{ fontSize: 11, fontWeight: '500', color: '#FBBF24' }}>
        New driver
      </Text>
    </View>
  );
}
