import { View } from 'react-native';
import { BlurView } from 'expo-blur';

export default function DarkGlassCard({ children, style }) {
  return (
    <View
      style={[
        {
          borderRadius: 12,
          overflow: 'hidden',
          borderWidth: 1,
          borderColor: 'rgba(255, 255, 255, 0.12)',
          boxShadow: '0 2px 12px rgba(0, 0, 0, 0.3)',
        },
        style,
      ]}
    >
      <BlurView intensity={30} tint="dark">
        <View style={{ backgroundColor: 'rgba(8, 33, 97, 0.6)' }}>
          {children}
        </View>
      </BlurView>
    </View>
  );
}
