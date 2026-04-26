import { Pressable, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useMode } from '../context/ModeContext';

export default function ModeToggle() {
  const { mode, toggleMode } = useMode();
  const isDriver = mode === 'driver';

  return (
    <Pressable
      onPress={toggleMode}
      style={{
        height: 28,
        paddingHorizontal: 12,
        borderRadius: 14,
        backgroundColor: isDriver ? '#fe8e38' : '#082161',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
      }}
    >
      <Ionicons
        name="swap-horizontal"
        size={14}
        color={isDriver ? '#041134' : '#F1F5F9'}
      />
      <Text
        style={{
          fontSize: 12,
          fontWeight: '500',
          color: isDriver ? '#041134' : '#F1F5F9',
        }}
      >
        {isDriver ? 'Driver' : 'Passenger'}
      </Text>
    </Pressable>
  );
}
