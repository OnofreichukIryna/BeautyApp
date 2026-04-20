import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, SafeAreaView, Alert } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { styles } from '../../styles/profileStyles';

const MenuRow = ({ icon, title, showBadge = false, isDanger = false, isLast = false, onPress }: any) => (
  <TouchableOpacity 
    style={[styles.menuRow, isLast && { borderBottomWidth: 0 }]} 
    onPress={onPress}
  >
    <View style={styles.menuRowLeft}>
      <Feather 
        name={icon} 
        size={22} 
        color={isDanger ? "#e8386f" : "#870992"} 
        style={styles.menuIcon} 
      />
      <Text style={[styles.menuText, isDanger && styles.dangerText]}>{title}</Text>
    </View>
    <View style={styles.menuRowRight}>
      {showBadge && (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>7</Text>
        </View>
      )}
      {!isDanger && <Feather name="chevron-right" size={20} color="#d1b3e8" />}
    </View>
  </TouchableOpacity>
);

export default function ProfilePage() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert("Упс!", "Заповніть пошту та пароль");
      return;
    }

    setName('Iryna'); 
    setIsLoggedIn(true);
  };

  if (!isLoggedIn) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Вхід</Text>
        </View>
        <ScrollView contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}>
          <View style={styles.authContainer}>
            <View style={styles.authCard}>
              <Text style={styles.authTitle}>Вхід до особистого кабінету</Text>
              
              <TextInput 
                style={styles.authInput} 
                placeholder="Електронна пошта" 
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                placeholderTextColor="#999"
              />
              
              <TextInput 
                style={styles.authInput} 
                placeholder="Пароль" 
                value={password}
                onChangeText={setPassword}
                secureTextEntry 
                placeholderTextColor="#999"
              />

              <TouchableOpacity style={styles.authMainButton} onPress={handleLogin}>
                <Text style={styles.authButtonText}>УВІЙТИ</Text>
              </TouchableOpacity>

              <TouchableOpacity 
                style={styles.authSwitchButton} 
                onPress={() => router.push('/register')} 
              >
                <Text style={styles.authSwitchText}>Реєстрація</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Мій кабінет</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
        <View style={{alignItems: 'center', marginVertical: 20}}>
            <View style={styles.badge}>
                <Text style={[styles.badgeText, {fontSize: 24}]}>{name ? name[0] : 'U'}</Text>
            </View>
            <Text style={[styles.headerTitle, {marginTop: 10}]}>{name || 'Користувач'}</Text>
        </View>

        <Text style={styles.sectionTitle}>ПРОФІЛЬ</Text>
        <View style={styles.sectionBlock}>
          <MenuRow icon="user" title="Контактна інформація" />
          <MenuRow icon="smile" title="Мої дані" isLast={true} />
        </View>

        <Text style={styles.sectionTitle}>МОЇ ПОКУПКИ</Text>
        <View style={styles.sectionBlock}>
          <MenuRow icon="archive" title="Історія замовлень" />
          <MenuRow icon="heart" title="Список бажань" />
          <MenuRow icon="bookmark" title="Улюблені бренди" />
          <MenuRow icon="box" title="Доставка та оплата" isLast={true} />
        </View>

        <Text style={styles.sectionTitle}>КОМУНІКАЦІЇ</Text>
        <View style={styles.sectionBlock}>
          <MenuRow icon="bell" title="Сповіщення" showBadge={true} />
          <MenuRow icon="phone-call" title="Зворотній зв'язок" />
          <MenuRow icon="info" title="Про нас" isLast={true} />
        </View>

        <Text style={styles.sectionTitle}>НАЛАШТУВАННЯ</Text>
        <View style={styles.sectionBlock}>
          <MenuRow icon="globe" title="Магазин та мова" isLast={true} />
        </View>

        <View style={[styles.sectionBlock, { marginTop: 15, marginBottom: 40 }]}>
          <MenuRow 
            icon="log-out" 
            title="Вийти" 
            isDanger={true} 
            isLast={true} 
            onPress={() => {
                setIsLoggedIn(false);
                setName('');
            }} 
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
