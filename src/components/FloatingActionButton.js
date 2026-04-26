import { Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function FloatingActionButton({ onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={{
        position: 'absolute',
        bottom: 90,
        right: 16,
        width: 56,
        height: 56,
        borderRadius: 28,
        backgroundColor: '#fe8e38',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 12px rgba(254, 142, 56, 0.30)',
      }}
    >
      <Ionicons name="add" size={24} color="#041134" />
    </Pressable>
  );
}
