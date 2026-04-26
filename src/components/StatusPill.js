import { Text, View } from 'react-native';

const variants = {
  confirmed: { bg: 'rgba(52, 211, 153, 0.15)', color: '#34D399', label: 'Confirmed' },
  pending: { bg: 'rgba(251, 191, 36, 0.15)', color: '#FBBF24', label: 'Pending' },
  cancelled: { bg: 'rgba(248, 113, 113, 0.15)', color: '#F87171', label: 'Cancelled' },
  available: { bg: 'rgba(52, 211, 153, 0.15)', color: '#34D399', label: 'Available' },
};

export default function StatusPill({ status }) {
  const v = variants[status] ?? variants.available;
  return (
    <View
      style={{
        backgroundColor: v.bg,
        borderRadius: 4,
        paddingHorizontal: 6,
        paddingVertical: 2,
        alignSelf: 'flex-start',
      }}
    >
      <Text style={{ fontSize: 11, fontWeight: '500', color: v.color }}>
        {v.label}
      </Text>
    </View>
  );
}
