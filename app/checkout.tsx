import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, SafeAreaView, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { Feather } from '@expo/vector-icons';
import { styles } from '../styles/checkoutStyles';
import { useCart } from '../context/CartContext';

export default function CheckoutPage() {
  const router = useRouter();
  const { items, totalSum, clearCart } = useCart();

  const [city, setCity] = useState('');
  const [street, setStreet] = useState('');
  const [delivery, setDelivery] = useState('np'); 
  const [payment, setPayment] = useState('prepay'); 

  const handleConfirmOrder = () => {
    if (!city || !street) {
      Alert.alert("Помилка", "Будь ласка, заповніть адресу доставки");
      return;
    }

    Alert.alert(
      "Замовлення прийнято!",
      "Дякуємо! Наш менеджер зв'яжеться з вами найближчим часом.",
      [{ text: "Чудово", onPress: () => {
          clearCart(); 
          router.replace('/(tabs)'); 
      }}]
    );
  };

  const RadioButton = ({ selected, onPress, label }: any) => (
    <TouchableOpacity style={styles.radioOption} onPress={onPress}>
      <View style={styles.radioCircle}>
        {selected && <View style={styles.radioSelected} />}
      </View>
      <Text style={styles.radioText}>{label}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={{ paddingHorizontal: 16, paddingTop: 10 }}>
        <TouchableOpacity onPress={() => router.back()}>
          <Feather name="chevron-left" size={30} color="#870992" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.title}>Оформлення замовлення</Text>
        </View>

        {/* Контакти */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Контактна інформація</Text>
          <Text style={styles.label}>ПІБ</Text>
          <TextInput style={[styles.input, styles.inputDisabled]} value="Онофрейчук Ірина Дмитрівна" editable={false} />
          
          <Text style={styles.label}>Телефон</Text>
          <TextInput style={[styles.input, styles.inputDisabled]} value="+38 (00) 000 00 00" editable={false} />
        </View>

        {/* Адреса */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Адреса доставки</Text>
          <TextInput 
            style={styles.input} 
            placeholder="Місто" 
            placeholderTextColor="#999"
            value={city} 
            onChangeText={setCity} 
          />
          <TextInput 
            style={styles.input} 
            placeholder="Вулиця та номер будинку" 
            placeholderTextColor="#999"
            value={street} 
            onChangeText={setStreet} 
          />
        </View>

        {/* Доставка та Оплата */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Спосіб доставки</Text>
          <RadioButton 
            label="Нова Пошта" 
            selected={delivery === 'np'} 
            onPress={() => setDelivery('np')} 
          />
          <RadioButton 
            label="Укрпошта" 
            selected={delivery === 'ukr'} 
            onPress={() => setDelivery('ukr')} 
          />

          <Text style={[styles.sectionTitle, { marginTop: 20 }]}>Спосіб оплати</Text>
          <RadioButton 
            label="Передоплата (реквізити у Viber)" 
            selected={payment === 'prepay'} 
            onPress={() => setPayment('prepay')} 
          />
          <RadioButton 
            label="Оплата при отриманні" 
            selected={payment === 'onDelivery'} 
            onPress={() => setPayment('onDelivery')} 
          />
        </View>

        {/* Підсумок */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Ваше замовлення</Text>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Кількість товарів:</Text>
            <Text style={styles.summaryLabel}>{items.length}</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>До сплати:</Text>
            <Text style={styles.totalText}>{totalSum.toFixed(2)} ГРН</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.submitButton} onPress={handleConfirmOrder}>
          <Text style={styles.submitButtonText}>ПІДТВЕРДИТИ ЗАМОВЛЕННЯ</Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
}