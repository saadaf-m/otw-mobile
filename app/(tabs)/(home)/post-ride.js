import { useState } from 'react';
import { Pressable, SafeAreaView, ScrollView, Text, TextInput, View } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import MotionBlurBackground from '../../../src/components/MotionBlurBackground';
import DarkGlassCard from '../../../src/components/DarkGlassCard';

const inputStyle = {
  backgroundColor: 'rgba(255, 255, 255, 0.05)',
  borderWidth: 1,
  borderColor: 'rgba(255, 255, 255, 0.10)',
  borderRadius: 8,
  color: '#F1F5F9',
  paddingHorizontal: 16,
  height: 48,
  fontSize: 14,
};

const labelStyle = {
  fontSize: 12,
  fontWeight: '500',
  color: '#94A3B8',
  marginBottom: 6,
  letterSpacing: 0.2,
};

export default function PostRideScreen() {
  const router = useRouter();
  const [departure, setDeparture] = useState('now');
  const [seats, setSeats] = useState(2);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#041134' }}>
      <MotionBlurBackground />

      {/* Header */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 16,
          paddingTop: 8,
          paddingBottom: 12,
          gap: 12,
        }}
      >
        <Pressable onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={24} color="#F1F5F9" />
        </Pressable>
        <Text style={{ fontSize: 18, fontWeight: '600', color: '#F1F5F9' }}>
          Post a Ride
        </Text>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ padding: 16, paddingBottom: 40 }}
      >
        <DarkGlassCard>
          <View style={{ padding: 16, gap: 16 }}>
            {/* Origin */}
            <View>
              <Text style={labelStyle}>From</Text>
              <TextInput
                style={inputStyle}
                placeholder="e.g. Humber North"
                placeholderTextColor="#475569"
              />
            </View>

            {/* Destination */}
            <View>
              <Text style={labelStyle}>To</Text>
              <TextInput
                style={inputStyle}
                placeholder="e.g. Square One"
                placeholderTextColor="#475569"
              />
            </View>

            {/* Departure toggle */}
            <View>
              <Text style={labelStyle}>Departure</Text>
              <View style={{ flexDirection: 'row', gap: 8 }}>
                <Pressable
                  onPress={() => setDeparture('now')}
                  style={{
                    paddingHorizontal: 16,
                    paddingVertical: 8,
                    borderRadius: 20,
                    backgroundColor: departure === 'now' ? '#fe8e38' : '#082161',
                  }}
                >
                  <Text
                    style={{
                      fontSize: 13,
                      fontWeight: '500',
                      color: departure === 'now' ? '#041134' : '#F1F5F9',
                    }}
                  >
                    Leaving now
                  </Text>
                </Pressable>
                <Pressable
                  onPress={() => setDeparture('schedule')}
                  style={{
                    paddingHorizontal: 16,
                    paddingVertical: 8,
                    borderRadius: 20,
                    backgroundColor: departure === 'schedule' ? '#fe8e38' : '#082161',
                  }}
                >
                  <Text
                    style={{
                      fontSize: 13,
                      fontWeight: '500',
                      color: departure === 'schedule' ? '#041134' : '#F1F5F9',
                    }}
                  >
                    Schedule
                  </Text>
                </Pressable>
              </View>
              {departure === 'schedule' && (
                <Text style={{ fontSize: 12, color: '#94A3B8', marginTop: 8 }}>
                  5:30 PM — tap to change
                </Text>
              )}
            </View>

            {/* Seats selector */}
            <View>
              <Text style={labelStyle}>Seats available</Text>
              <View style={{ flexDirection: 'row', gap: 10 }}>
                {[1, 2, 3, 4].map(n => (
                  <Pressable
                    key={n}
                    onPress={() => setSeats(n)}
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 22,
                      backgroundColor: seats === n ? '#fe8e38' : 'rgba(255,255,255,0.05)',
                      borderWidth: 1,
                      borderColor: seats === n ? '#fe8e38' : 'rgba(255,255,255,0.10)',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: '600',
                        color: seats === n ? '#041134' : '#F1F5F9',
                      }}
                    >
                      {n}
                    </Text>
                  </Pressable>
                ))}
              </View>
            </View>

            {/* Rate */}
            <View>
              <Text style={labelStyle}>Suggested rate</Text>
              <TextInput
                style={inputStyle}
                defaultValue="$6"
                keyboardType="decimal-pad"
                placeholderTextColor="#475569"
              />
              <Text style={{ fontSize: 11, fontWeight: '400', color: '#94A3B8', marginTop: 4 }}>
                Based on distance
              </Text>
            </View>

            {/* Description */}
            <View>
              <Text style={labelStyle}>About this trip</Text>
              <TextInput
                style={[inputStyle, { height: 80, paddingTop: 12, textAlignVertical: 'top' }]}
                placeholder="Say something about your trip..."
                placeholderTextColor="#475569"
                multiline
                numberOfLines={3}
              />
            </View>
          </View>
        </DarkGlassCard>
      </ScrollView>

      {/* Post button */}
      <View style={{ padding: 16 }}>
        <Pressable
          onPress={() => router.back()}
          style={{
            backgroundColor: '#fe8e38',
            borderRadius: 8,
            height: 48,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text style={{ fontSize: 14, fontWeight: '600', color: '#041134' }}>
            Post Ride
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
