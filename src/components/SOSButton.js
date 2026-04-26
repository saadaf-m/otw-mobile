import { Pressable, Text } from 'react-native';

export default function SOSButton({ onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={{
        backgroundColor: '#F87171',
        borderRadius: 8,
        paddingVertical: 12,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text style={{ fontSize: 14, fontWeight: '700', color: '#041134' }}>
        SOS
      </Text>
    </Pressable>
  );
}
