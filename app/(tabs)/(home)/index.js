import { useState } from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import { useRouter } from 'expo-router';
import MotionBlurBackground from '../../../src/components/MotionBlurBackground';
import ModeToggle from '../../../src/components/ModeToggle';
import DriverStatsBar from '../../../src/components/DriverStatsBar';
import FeedFilter from '../../../src/components/FeedFilter';
import RideCard from '../../../src/components/RideCard';
import FloatingActionButton from '../../../src/components/FloatingActionButton';
import { useMode } from '../../../src/context/ModeContext';
import rides from '../../../src/data/rides.json';
import drivers from '../../../src/data/drivers.json';

function getDriver(driverId) {
  return drivers.find(d => d.id === driverId);
}

export default function HomeScreen() {
  const router = useRouter();
  const { mode } = useMode();
  const [activeFilter, setActiveFilter] = useState('available');
  const [activeView, setActiveView] = useState('list');

  const typeFilter = activeFilter === 'available' ? 'live' : 'scheduled';

  const filteredRides = rides
    .filter(r => r.type === typeFilter)
    .filter(r => (mode === 'driver' ? r.status === 'available' : true))
    .sort((a, b) => {
      const da = getDriver(a.driverId);
      const db = getDriver(b.driverId);
      if (da?.isNewDriver && !db?.isNewDriver) return -1;
      if (!da?.isNewDriver && db?.isNewDriver) return 1;
      return 0;
    });

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#041134' }}>
      <MotionBlurBackground />

      {/* Header */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 16,
          paddingTop: 8,
          paddingBottom: 4,
        }}
      >
        <Text
          style={{
            fontSize: 22,
            fontWeight: '900',
            fontStyle: 'italic',
            color: '#F1F5F9',
          }}
        >
          OTW
        </Text>
        <ModeToggle />
        <View
          style={{
            width: 36,
            height: 36,
            borderRadius: 18,
            backgroundColor: '#082161',
            borderWidth: 1.5,
            borderColor: 'rgba(255, 255, 255, 0.15)',
          }}
        />
      </View>

      {/* Driver stats */}
      {mode === 'driver' && (
        <View style={{ marginHorizontal: 16, marginTop: 12 }}>
          <DriverStatsBar />
        </View>
      )}

      {/* Feed filter */}
      <View style={{ paddingHorizontal: 16, marginTop: 16 }}>
        <FeedFilter
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
          activeView={activeView}
          onViewChange={setActiveView}
        />
      </View>

      {/* Feed */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ padding: 16, paddingBottom: 100 }}
      >
        {filteredRides.map(ride => {
          const driver = getDriver(ride.driverId);
          return (
            <RideCard
              key={ride.id}
              ride={ride}
              driver={driver}
              onPress={() => router.push(`/(tabs)/(home)/ride/${ride.id}`)}
              onRequestPress={() => router.push(`/(tabs)/(home)/ride/${ride.id}`)}
            />
          );
        })}

        {filteredRides.length === 0 && (
          <View style={{ alignItems: 'center', paddingTop: 40 }}>
            <Text style={{ fontSize: 14, fontWeight: '400', color: '#94A3B8' }}>
              No rides available right now
            </Text>
          </View>
        )}
      </ScrollView>

      {/* FAB — driver mode only */}
      {mode === 'driver' && (
        <FloatingActionButton onPress={() => router.push('/(tabs)/(home)/post-ride')} />
      )}
    </SafeAreaView>
  );
}
