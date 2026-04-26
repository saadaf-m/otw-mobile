import { Pressable, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function FeedFilter({ activeFilter, onFilterChange, activeView, onViewChange }) {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        backgroundColor: 'rgba(4, 17, 52, 0.85)',
      }}
    >
      <Pressable onPress={() => onFilterChange('available')} style={{ marginRight: 20 }}>
        <Text
          style={{
            fontSize: 14,
            fontWeight: '500',
            color: activeFilter === 'available' ? '#fe8e38' : '#94A3B8',
            paddingBottom: 4,
            borderBottomWidth: activeFilter === 'available' ? 2 : 0,
            borderBottomColor: '#fe8e38',
          }}
        >
          Available now
        </Text>
      </Pressable>

      <Pressable onPress={() => onFilterChange('upcoming')}>
        <Text
          style={{
            fontSize: 14,
            fontWeight: '500',
            color: activeFilter === 'upcoming' ? '#fe8e38' : '#94A3B8',
            paddingBottom: 4,
            borderBottomWidth: activeFilter === 'upcoming' ? 2 : 0,
            borderBottomColor: '#fe8e38',
          }}
        >
          Upcoming
        </Text>
      </Pressable>

      <View style={{ flex: 1 }} />

      <View style={{ flexDirection: 'row', gap: 12 }}>
        <Pressable onPress={() => onViewChange('list')}>
          <Ionicons
            name="list-outline"
            size={20}
            color={activeView === 'list' ? '#fe8e38' : '#94A3B8'}
          />
        </Pressable>
        <Pressable onPress={() => onViewChange('map')}>
          <Ionicons
            name="map-outline"
            size={20}
            color={activeView === 'map' ? '#fe8e38' : '#94A3B8'}
          />
        </Pressable>
      </View>
    </View>
  );
}
