import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function RatingPrompt({ onRate, onSkip }) {
  const [selected, setSelected] = useState(0);

  return (
    <View style={{ alignItems: 'center', marginTop: 20 }}>
      <Text style={{ fontSize: 14, fontWeight: '500', color: '#94A3B8', marginBottom: 12 }}>
        Rate your experience
      </Text>
      <View style={{ flexDirection: 'row', gap: 8 }}>
        {[1, 2, 3, 4, 5].map(star => (
          <Pressable key={star} onPress={() => setSelected(star)}>
            <Ionicons
              name={star <= selected ? 'star' : 'star-outline'}
              size={32}
              color={star <= selected ? '#fe8e38' : '#475569'}
            />
          </Pressable>
        ))}
      </View>
      <Pressable onPress={onSkip} style={{ marginTop: 16 }}>
        <Text style={{ fontSize: 12, fontWeight: '400', color: '#94A3B8' }}>
          Skip
        </Text>
      </Pressable>
    </View>
  );
}
