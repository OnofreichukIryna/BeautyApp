import React, { useRef } from 'react';
import { 
  Text, View, ScrollView, TextInput, 
  Image, TouchableOpacity, FlatList, StatusBar, Animated 
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'; 
import { useRouter } from 'expo-router'; 
import { Feather } from '@expo/vector-icons';
import { styles } from '../../styles/homeStyles';
import { useCart } from '../../context/CartContext'; 

const mockCategories = [
  {
    title: 'Makeup',
    data: [
      { id: '1', name: 'Guerlain Terracotta Bronzer', price: '3572.51', image: 'https://www.brocard.ua/media/catalog/product/3/3/3346470435599_A.jpg' },
      { id: '2', name: 'Estée Lauder Foundation', price: '2311.63', image: 'https://www.brocard.ua/media/catalog/product/cache/V087083173783/eyJ3IjoxMDAwLCJoIjoxMDAwLCJvIjoiY2F0YWxvZ1wvcHJvZHVjdFwvXC84XC84XC84ODcxNjc0NjY3MjJfMS5qcGcifQ==/estee-lauder-futurist.jpg' },
      { id: '3', name: 'Lancôme Mascara idôle', price: '1471.04', image: 'https://www.brocard.ua/media/catalog/product/3/6/3614273066365_A.jpg' },
    ]
  },
  {
    title: 'Perfumery',
    data: [
      { id: '4', name: 'Giorgio Armani Si', price: '2500.00', image: 'https://www.brocard.ua/media/catalog/product/cache/V00174912/eyJ3IjoxMDAwLCJoIjoxMDAwLCJvIjoiY2F0YWxvZ1wvcHJvZHVjdFwvXC8zXC82XC8zNjA1NTIxODE2NjU4XzEuanBnIn0=/armani-si.jpg' },
      { id: '5', name: 'Jo Malone Wood Sage & Sea Salt', price: '3200.00', image: 'https://www.brocard.ua/media/catalog/product/6/9/690251080977_A.jpg' },
      { id: '6', name: 'Yves Saint Laurent Libre', price: '6400.00', image: 'https://www.brocard.ua/media/catalog/product/cache/V081744157/eyJ3IjoxMDAwLCJoIjoxMDAwLCJvIjoiY2F0YWxvZ1wvcHJvZHVjdFwvXC8zXC82XC8zNjE0MjcyNjQ4NDI1XzEuanBnIn0=/yves-saint-laurent-libre.jpg' },
    ]
  },
  {
    title: 'Skincare',
    data: [
      { id: '7', name: 'Needly Cross Barrier Toner', price: '1250.00', image: 'https://franceup.com.ua/sites/default/files/styles/512x667s/public/product_images/needly-crossbarrier-toner-200-36907553776290.jpg?itok=2Dky4Hh_' },
      { id: '8', name: 'Dr.Ceuracle Azelaic 10 & Madeca Ampoule', price: '660.00', image: 'https://cosmetea.com.ua/image/cache/catalog/lico/suvorotki/drceuracle-azelaic-10-madeca-ampoule-600x800.jpg' },
      { id: '9', name: 'transparent lab rose calming cleanser', price: '1200.00', image: 'https://misocosmetics.com.ua/image/cache/catalog/image/cache/catalog/products/1/image-catalog-products-TLB0002-1000x1000.webp' },
    ]
  },
  {
    title: 'Bodycare',
    data: [
      { id: '10', name: 'Dove Body Lotion Glow Shine', price: '250.00', image: 'https://icf.listex.info/med/dc2cfded-2c19-61cb-1b12-29c3c5b94a4a.jpg' },
      { id: '11', name: 'Rituals Body Cream Sakura', price: '850.00', image: 'https://paradiz.com.ua/image/cache/catalog/rituals/krem-dlya-tela-rituals-ritual-sakura-magic-touch-body-cream-70-ml-800x800.jpeg' },
      { id: '12', name: 'La Sultane De Saba Body Butter', price: '1800.00', image: 'https://beautis.com.ua/wa-data/public/shop/products/71/73/7371/images/26322/26322.2000.jpg' },
    ]
  },
  {
    title: 'Haircare',
    data: [
      { id: '13', name: 'Moremo Hair Treatment Miracle', price: '1104.00', image: 'https://moremo.com.ua/image/cache/catalog/miracle2x%20-%2020ml-600x600.jpg' },
      { id: '14', name: 'Fenty Hair The Comeback Kid Treatment', price: '1720.00', image: 'https://images.prom.ua/6961205913_w1280_h640_6961205913.jpg' },
      { id: '15', name: 'Alfaparf Milano Shampoo', price: '1196.00', image: 'https://www.brocard.ua/media/catalog/product/8/0/8022297095943_A.jpg' },
    ]
  }
];

export default function HomePage() { 
  const router = useRouter(); 
  const { addToCart } = useCart();
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const showToast = () => {
    Animated.sequence([
      Animated.timing(fadeAnim, { toValue: 1, duration: 300, useNativeDriver: false }),
      Animated.delay(1500), 
      Animated.timing(fadeAnim, { toValue: 0, duration: 300, useNativeDriver: false })
    ]).start();
  };

  const handleAddToCart = (item: any) => {
    addToCart({ 
      id: item.id, 
      name: item.name, 
      price: Number(item.price), 
      image: item.image 
    });
    showToast();
  };

  const renderProduct = ({ item }: { item: any }) => (
    <TouchableOpacity 
      style={styles.productCard}
      onPress={() => router.push({ 
        pathname: '/product', 
        params: { id: item.id, name: item.name, price: item.price, image: item.image } 
      })}
    >
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <View style={styles.productInfo}>
        <Text style={styles.productName} numberOfLines={2}>{item.name}</Text>
        <Text style={styles.productPrice}>{item.price} ГРН</Text>
        
        <TouchableOpacity style={styles.buyButton} onPress={() => handleAddToCart(item)}>
          <Text style={styles.buyButtonText}>Додати у кошик</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#f8eff8" />
      
      <View style={styles.header}>
        <Text style={styles.brandTitle}>BeautyStore</Text>
        <View style={styles.searchContainer}>
          <TextInput style={styles.searchInput} placeholder="Пошук..." placeholderTextColor="#888" />
        </View>
      </View>

      <ScrollView style={styles.mainScroll} showsVerticalScrollIndicator={false}>
        
        <View style={styles.bannerContainer}>
          <Text style={styles.sectionTitleCenter}>Цікаві пропозиції</Text>
          <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false} style={styles.bannerScroll}>
            <View style={[styles.banner, { backgroundColor: '#e8c9b3' }]}>
              <Text style={styles.bannerText}>Твій бездоганний макіяж</Text>
              <Text style={styles.bannerSubText}>Знижки до -20%</Text>
            </View>
            <View style={[styles.banner, { backgroundColor: '#d1b3e8' }]}>
              <Text style={styles.bannerText}>Новинки парфумерії</Text>
            </View>
          </ScrollView>
        </View>

        <Text style={styles.sectionTitleCenter}>Популярні продукти</Text>
        
        {mockCategories.map((category, index) => (
          <View key={`cat-${index}`} style={styles.categorySection}>
            <Text style={styles.categoryTitle}>{category.title}</Text>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={category.data}
              keyExtractor={(item) => `item-${item.id}`}
              renderItem={renderProduct}
              contentContainerStyle={styles.productList}
            />
          </View>
        ))}
        
        <View style={styles.footer}>
          <Text style={styles.footerText}>© 2026 Beauty Store</Text>
          <Text style={styles.footerText}>Контакти: +38 (095) 888-00-04</Text>
          <Text style={styles.footerText}>Email: info@beautystore.ua</Text>
        </View>
      </ScrollView>

      <Animated.View style={[styles.toastContainer, { opacity: fadeAnim }]} pointerEvents="none">
        <Feather name="check-circle" size={18} color="#fff" />
        <Text style={styles.toastText}>Додано у кошик</Text>
      </Animated.View>

    </SafeAreaView>
  );
}