import { useEffect, useState } from "react";
import { View, Text, ActivityIndicator, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

interface PlaidFlowProps {
  navigation: any;
}

export default function PlaidFlow({ navigation }: PlaidFlowProps) {
  const [token, setToken] = useState<string>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>();

  useEffect(() => {
    // In a real app, this would call your backend API
    // For now, we'll simulate the API call
    const fetchLinkToken = async () => {
      try {
        setLoading(true);
        // Simulate API call - replace with actual backend call
        // const response = await fetch("/api/link-token");
        // const data = await response.json();
        // setToken(data.link_token);
        
        // For demo purposes, we'll show a mock token
        setTimeout(() => {
          setToken("mock-link-token");
          setLoading(false);
        }, 1000);
      } catch (err) {
        setError("Failed to load Plaid Link");
        setLoading(false);
      }
    };

    fetchLinkToken();
  }, []);

  if (loading) {
    return (
      <LinearGradient
        colors={["#FF9A9E", "#FAD0C4"]}
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
      >
        <ActivityIndicator size="large" color="#FF6B6B" />
        <Text style={{ color: 'white', marginTop: 16, fontSize: 16 }}>
          Loading secure connection...
        </Text>
      </LinearGradient>
    );
  }

  if (error) {
    return (
      <LinearGradient
        colors={["#FF9A9E", "#FAD0C4"]}
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 24 }}
      >
        <Text style={{ color: 'white', fontSize: 18, textAlign: 'center', marginBottom: 24 }}>
          {error}
        </Text>
        <Pressable
          style={{
            backgroundColor: '#FF6B6B',
            paddingHorizontal: 24,
            paddingVertical: 12,
            borderRadius: 8
          }}
          onPress={() => navigation.goBack()}
        >
          <Text style={{ color: 'white', fontWeight: 'bold' }}>Go Back</Text>
        </Pressable>
      </LinearGradient>
    );
  }

  if (!token) {
    return null;
  }

  // For demo purposes, we'll show a mock Plaid Link interface
  return (
    <LinearGradient
      colors={["#FF9A9E", "#FAD0C4"]}
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 24 }}
    >
      <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold', marginBottom: 16, textAlign: 'center' }}>
        🔗 Plaid Link Demo
      </Text>
      <Text style={{ color: 'white', fontSize: 16, textAlign: 'center', marginBottom: 32 }}>
        In a real app, this would show the Plaid Link interface to connect your bank account.
      </Text>
      
      <Pressable
        style={{
          backgroundColor: '#4ECDC4',
          paddingHorizontal: 32,
          paddingVertical: 16,
          borderRadius: 12,
          marginBottom: 16
        }}
        onPress={() => {
          console.log("Simulating successful Plaid Link connection");
          navigation.replace("Home");
        }}
      >
        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>
          Simulate Success
        </Text>
      </Pressable>
      
      <Pressable
        style={{
          backgroundColor: '#FF6B6B',
          paddingHorizontal: 32,
          paddingVertical: 16,
          borderRadius: 12
        }}
        onPress={() => navigation.goBack()}
      >
        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>
          Cancel
        </Text>
      </Pressable>
    </LinearGradient>
  );
} 