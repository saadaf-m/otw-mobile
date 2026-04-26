import { Text, View } from 'react-native';

export default function LevelBadge({ level }) {
  return (
    <View
      style={{
        backgroundColor: 'rgba(167, 139, 250, 0.15)',
        borderRadius: 4,
        paddingHorizontal: 6,
        paddingVertical: 2,
      }}
    >
      <Text style={{ fontSize: 11, fontWeight: '500', color: '#A78BFA' }}>
        Lv {level}
      </Text>
    </View>
  );
}
