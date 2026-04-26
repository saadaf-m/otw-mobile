import { Pressable, SafeAreaView, Text, View } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import MotionBlurBackground from '../../../src/components/MotionBlurBackground';
import DarkGlassCard from '../../../src/components/DarkGlassCard';

export default function NoShowScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#041134' }}>
      <MotionBlurBackground />

      <View style={{ flex: 1, paddingHorizontal: 16, paddingTop: 48 }}>
        {/* Alert */}
        <View style={{ alignItems: 'center', marginBottom: 24 }}>
          <Ionicons name="alert-circle" size={64} color="#F87171" />
          <Text
            style={{
              fontSize: 22,
              fontWeight: '700',
              color: '#F1F5F9',
              textAlign: 'center',
              marginTop: 16,
            }}
          >
            Your driver didn't show up
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '400',
              color: '#34D399',
              textAlign: 'center',
              marginTop: 8,
            }}
          >
            You've been fully reimbursed
          </Text>
        </View>

        {/* Alternatives */}
        <DarkGlassCard style={{ marginBottom: 16 }}>
          <View style={{ padding: 20 }}>
            <Text style={{ fontSize: 16, fontWeight: '600', color: '#F1F5F9', marginBottom: 16 }}>
              Get a ride now
            </Text>

            <Pressable
              style={{
                backgroundColor: '#000000',
                borderRadius: 8,
                height: 52,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Text style={{ fontSize: 14, fontWeight: '600', color: '#FFFFFF' }}>
                Open Uber
              </Text>
            </Pressable>

            <Pressable
              style={{
                backgroundColor: '#FF00BF',
                borderRadius: 8,
                height: 52,
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 8,
              }}
            >
              <Text style={{ fontSize: 14, fontWeight: '600', color: '#FFFFFF' }}>
                Open Lyft
              </Text>
            </Pressable>
          </View>
        </DarkGlassCard>

        <Text
          style={{
            fontSize: 11,
            fontWeight: '400',
            color: '#94A3B8',
            textAlign: 'center',
            marginBottom: 24,
          }}
        >
          A strike has been logged against the driver
        </Text>
      </View>

      <View style={{ padding: 16, alignItems: 'center' }}>
        <Pressable onPress={() => router.replace('/(tabs)/(home)')}>
          <Text style={{ fontSize: 14, fontWeight: '600', color: '#fe8e38' }}>
            Return to Feed
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
