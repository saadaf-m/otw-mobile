import { Pressable, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import DarkGlassCard from './DarkGlassCard';

export default function TripShareBanner({ onShare }) {
  return (
    <DarkGlassCard>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          padding: 14,
          gap: 12,
        }}
      >
        <Ionicons name="share-outline" size={20} color="#fe8e38" />
        <Text style={{ flex: 1, fontSize: 12, fontWeight: '400', color: '#F1F5F9' }}>
          Share your trip with a trusted contact
        </Text>
        <Pressable onPress={onShare}>
          <Text style={{ fontSize: 14, fontWeight: '600', color: '#fe8e38' }}>
            Share
          </Text>
        </Pressable>
      </View>
    </DarkGlassCard>
  );
}
