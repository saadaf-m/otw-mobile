import { View, useWindowDimensions } from 'react-native';

const streaks = [
  // Top third — teal/blue (headlights, signage)
  { top: '4%', width: '80%', height: 2, color: 'rgba(45, 212, 191, 0.12)', left: '5%', borderRadius: 2 },
  { top: '8%', width: '55%', height: 12, color: 'rgba(96, 165, 250, 0.09)', left: '-2%', borderRadius: 8 },
  { top: '13%', width: '90%', height: 1, color: 'rgba(45, 212, 191, 0.08)', left: '8%', borderRadius: 1 },
  { top: '18%', width: '70%', height: 18, color: 'rgba(96, 165, 250, 0.07)', left: '15%', borderRadius: 12 },
  { top: '24%', width: '65%', height: 3, color: 'rgba(45, 212, 191, 0.10)', left: '0%', borderRadius: 3 },
  // Middle — white/bright (oncoming lights)
  { top: '38%', width: '100%', height: 1, color: 'rgba(255, 255, 255, 0.05)', left: '-5%', borderRadius: 1 },
  { top: '43%', width: '60%', height: 2, color: 'rgba(255, 255, 255, 0.04)', left: '20%', borderRadius: 2 },
  // Bottom third — red/orange/amber (taillights)
  { top: '58%', width: '85%', height: 4, color: 'rgba(254, 142, 56, 0.12)', left: '-3%', borderRadius: 4 },
  { top: '65%', width: '100%', height: 8, color: 'rgba(202, 40, 1, 0.14)', left: '0%', borderRadius: 6 },
  { top: '70%', width: '75%', height: 32, color: 'rgba(202, 40, 1, 0.08)', left: '-5%', borderRadius: 20 },
  { top: '76%', width: '90%', height: 5, color: 'rgba(206, 65, 38, 0.12)', left: '5%', borderRadius: 4 },
  { top: '82%', width: '60%', height: 40, color: 'rgba(254, 142, 56, 0.07)', left: '10%', borderRadius: 24 },
  { top: '88%', width: '80%', height: 3, color: 'rgba(202, 40, 1, 0.15)', left: '-2%', borderRadius: 3 },
];

export default function MotionBlurBackground() {
  const { width } = useWindowDimensions();

  return (
    <View
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
      pointerEvents="none"
    >
      {streaks.map((streak, i) => (
        <View
          key={i}
          style={{
            position: 'absolute',
            top: streak.top,
            left: streak.left,
            width: streak.width,
            height: streak.height,
            backgroundColor: streak.color,
            borderRadius: streak.borderRadius,
          }}
        />
      ))}
    </View>
  );
}
