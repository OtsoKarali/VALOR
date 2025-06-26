import { Pressable, Text, View, Animated } from "react-native";
import { bigBtn, bigTxt } from "../lib/ui";
import { LinearGradient } from "expo-linear-gradient";
import ReactNativeHapticFeedback from "react-native-haptic-feedback";
import { useRef } from "react";

interface HomeProps {
  navigation: any;
}

export default function Home({ navigation }: HomeProps) {
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.timing(scaleAnim, {
      toValue: 0.96,
      duration: 100,
      useNativeDriver: true,
    }).start();
    ReactNativeHapticFeedback.trigger("impactHeavy");
  };

  const handlePressOut = () => {
    Animated.timing(scaleAnim, {
      toValue: 1,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  return (
    <LinearGradient
      colors={["#FF9A9E", "#FAD0C4"]}
      style={{ flex: 1, paddingHorizontal: 24, paddingTop: 96 }}
    >
      <Text style={{ fontSize: 30, fontWeight: '800', color: 'white', marginBottom: 32 }}>
        Your Wallet, Super-charged
      </Text>

      <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
        <Pressable
          style={{
            width: '100%',
            paddingVertical: 16,
            borderRadius: 12,
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 16,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
            backgroundColor: '#FF6B6B'
          }}
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
          onPress={() => {
            ReactNativeHapticFeedback.trigger("impactHeavy");
            navigation.navigate("PlaidFlow");
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: 'bold', letterSpacing: 0.5, color: 'white' }}>
            Connect a Card
          </Text>
        </Pressable>
      </Animated.View>

      <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
        <Pressable 
          style={{
            width: '100%',
            paddingVertical: 16,
            borderRadius: 12,
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 16,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
            backgroundColor: '#4ECDC4'
          }}
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
          onPress={() => {
            ReactNativeHapticFeedback.trigger("impactMedium");
            console.log("View Earnings pressed");
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: 'bold', letterSpacing: 0.5, color: 'white' }}>
            View Earnings
          </Text>
        </Pressable>
      </Animated.View>

      <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
        <Pressable 
          style={{
            width: '100%',
            paddingVertical: 16,
            borderRadius: 12,
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 16,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
            backgroundColor: '#FFE66D'
          }}
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
          onPress={() => {
            ReactNativeHapticFeedback.trigger("impactLight");
            console.log("Best New Card pressed");
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: 'bold', letterSpacing: 0.5, color: 'white' }}>
            Best New Card
          </Text>
        </Pressable>
      </Animated.View>
    </LinearGradient>
  );
} 