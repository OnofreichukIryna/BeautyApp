import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Feather } from '@expo/vector-icons';
import { styles } from '../styles/registerStyles';

export default function RegisterPage() {
  const router = useRouter();
  
  // Поля форми
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    birthDate: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
    subscribe: false,
  });

  const [showPass, setShowPass] = useState(false);

  const handleRegister = () => {
    const { firstName, lastName, phone, email, password, confirmPassword } = formData;

    if (!firstName || !phone || !email || !password) {
      Alert.alert("Помилка", "Будь ласка, заповніть усі обов'язкові поля (*)");
      return;
    }

    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      Alert.alert("Помилка", "Введіть коректний E-mail");
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert("Помилка", "Паролі не співпадають. Перевірте введені дані.");
      return;
    }

    if (password.length < 6) {
      Alert.alert("Помилка", "Пароль має бути не менше 6 символів");
      return;
    }

    Alert.alert("Успіх", "Реєстрація пройшла успішно!", [
      { text: "OK", onPress: () => router.replace('/(tabs)/profile') }
    ]);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
        
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Feather name="chevron-left" size={30} color="#870992" />
        </TouchableOpacity>

        <Text style={styles.title}>Реєстрація нового користувача</Text>

        <View style={styles.form}>
          <TextInput 
            style={styles.input} 
            placeholder="Ваше ім'я*" 
            placeholderTextColor="#999"
            onChangeText={(val) => setFormData({...formData, firstName: val})}
          />
          <TextInput 
            style={styles.input} 
            placeholder="Ваше прізвище*" 
            placeholderTextColor="#999"
            onChangeText={(val) => setFormData({...formData, lastName: val})}
          />
          <TextInput 
            style={styles.input} 
            placeholder="Дата народження (ДД.ММ.РРРР)" 
            placeholderTextColor="#999"
            onChangeText={(val) => setFormData({...formData, birthDate: val})}
          />
          <TextInput 
            style={styles.input} 
            placeholder="Телефон*" 
            keyboardType="phone-pad"
            placeholderTextColor="#999"
            onChangeText={(val) => setFormData({...formData, phone: val})}
          />
          <TextInput 
            style={styles.input} 
            placeholder="E-mail*" 
            autoCapitalize="none"
            keyboardType="email-address"
            placeholderTextColor="#999"
            onChangeText={(val) => setFormData({...formData, email: val})}
          />
          
          <View style={styles.checkboxContainer}>
            <TouchableOpacity 
              style={[styles.checkbox, formData.subscribe && styles.checkboxChecked]} 
              onPress={() => setFormData({...formData, subscribe: !formData.subscribe})}
            >
              {formData.subscribe && <Feather name="check" size={16} color="#fff" />}
            </TouchableOpacity>
            <Text style={styles.checkboxLabel}>Отримувати повідомлення про новинки, знижки, акції</Text>
          </View>

          <View style={styles.inputGroup}>
            <View style={styles.passwordWrapper}>
              <TextInput 
                style={styles.inputPassword} 
                placeholder="Пароль*" 
                secureTextEntry={!showPass}
                placeholderTextColor="#999"
                onChangeText={(val) => setFormData({...formData, password: val})}
              />
              <TouchableOpacity style={styles.eyeIcon} onPress={() => setShowPass(!showPass)}>
                <Feather name={showPass ? "eye" : "eye-off"} size={20} color="#d1b3e8" />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.inputGroup}>
            <TextInput 
              style={styles.input} 
              placeholder="Повтор пароля*" 
              secureTextEntry={!showPass}
              placeholderTextColor="#999"
              onChangeText={(val) => setFormData({...formData, confirmPassword: val})}
            />
          </View>

          <TouchableOpacity style={styles.submitButton} onPress={handleRegister}>
            <Text style={styles.submitButtonText}>Зареєструватися</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
