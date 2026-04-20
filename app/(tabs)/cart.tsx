import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { styles } from '../../styles/cartStyles';
import { useCart } from '../../context/CartContext'; 

export default function CartPage() {
  const router = useRouter();
  
  const { items, removeFromCart, updateQty, totalSum, clearCart } = useCart();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Кошик</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {items.length > 0 ? (
          items.map((item) => (
            <View key={item.id} style={styles.cartItem}>
              <TouchableOpacity 
                onPress={() => router.push({ 
                  pathname: '/product', 
                  params: { id: item.id, name: item.name, price: item.price.toString(), image: item.image } 
                })}
              >
                <Image source={{ uri: item.image }} style={styles.productImage} />
              </TouchableOpacity>
              
              <View style={styles.itemDetails}>
                <TouchableOpacity onPress={() => router.push({ 
                  pathname: '/product', 
                  params: { id: item.id, name: item.name, price: item.price.toString(), image: item.image } 
                })}>
                  <Text style={styles.itemName} numberOfLines={1}>{item.name}</Text>
                </TouchableOpacity>
                <Text style={styles.itemPrice}>{item.price.toFixed(2)} ГРН</Text>
                
                <View style={styles.quantityContainer}>
                  <TouchableOpacity style={styles.qtyButton} onPress={() => updateQty(item.id, -1)}>
                    <Feather name="minus" size={16} color="#870992" />
                  </TouchableOpacity>
                  <Text style={styles.qtyText}>{item.qty}</Text>
                  <TouchableOpacity style={styles.qtyButton} onPress={() => updateQty(item.id, 1)}>
                    <Feather name="plus" size={16} color="#870992" />
                  </TouchableOpacity>
                </View>
              </View>

              <TouchableOpacity style={styles.removeButton} onPress={() => removeFromCart(item.id)}>
                <Feather name="trash-2" size={20} color="#d1b3e8" />
              </TouchableOpacity>
            </View>
          ))
        ) : (
          <View style={styles.emptyContainer}>
            <Feather name="shopping-cart" size={60} color="#f0bbf5" />
            <Text style={styles.emptyText}>У кошику поки порожньо</Text>
          </View>
        )}
      </ScrollView>

      {items.length > 0 && (
        <View style={styles.summaryContainer}>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryText}>Всього:</Text>
            <Text style={styles.totalText}>{totalSum.toFixed(2)} ГРН</Text>
          </View>
          
          <TouchableOpacity 
            style={styles.checkoutButton}
            onPress={() => router.push('/checkout')} 
          >
            <Text style={styles.checkoutButtonText}>Оформити замовлення</Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
}
