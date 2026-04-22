import React, { useRef } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, SafeAreaView, Animated } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Ionicons, Feather } from '@expo/vector-icons'; 
import { styles } from '../styles/productStyles';
import { useCart } from '../context/CartContext'; 

export default function ProductPage() {
  const { id, name, price, image } = useLocalSearchParams();
  const router = useRouter();
  
  const { addToCart } = useCart(); 

  const fadeAnim = useRef(new Animated.Value(0)).current;

  const mockDetails = {
    description: 'Gives a natural sun-kissed effect',
    brand: 'Guerlain',
    country: 'France',
    type: 'bronzer',
  };

  const handleAddToCart = () => {
    addToCart({ 
      id: id as string, 
      name: name as string, 
      price: Number(price), 
      image: image as string 
    });

    Animated.sequence([
      Animated.timing(fadeAnim, {
        toValue: 1, 
        duration: 300, 
        useNativeDriver: false,
      }),
      Animated.delay(2000), 
      Animated.timing(fadeAnim, {
        toValue: 0, 
        duration: 300,
        useNativeDriver: false,
      })
    ]).start();
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Text style={styles.backButtonText}>← Назад до каталогу</Text>
        </TouchableOpacity>

        <View style={styles.imageCard}>
          <Image source={{ uri: image as string }} style={styles.image} />
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.price}>{price} ГРН</Text> 
          
          <Text style={styles.description}>{mockDetails.description}</Text>

          <View style={styles.detailsList}>
            <Text style={styles.detailText}><Text style={styles.boldText}>Бренд:</Text> {mockDetails.brand}</Text>
            <Text style={styles.detailText}><Text style={styles.boldText}>Країна:</Text> {mockDetails.country}</Text>
            <Text style={styles.detailText}><Text style={styles.boldText}>Тип:</Text> {mockDetails.type}</Text>
          </View>

          <TouchableOpacity style={styles.buyButton} onPress={handleAddToCart}>
            <Text style={styles.buyButtonText}>Додати у кошик</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.hintButton}>
            <Ionicons name="gift-outline" size={20} color="#a900b3" />
            <Text style={styles.hintButtonText}>Натякнути на подарунок</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <Animated.View 
        style={[
          styles.toastContainer, 
          { opacity: fadeAnim }, 
          { pointerEvents: 'none' } 
        ]}
      >
        <Feather name="check-circle" size={20} color="#fff" />
        <Text style={styles.toastText}>Додано у кошик</Text>
      </Animated.View>

    </SafeAreaView>
  );
}
