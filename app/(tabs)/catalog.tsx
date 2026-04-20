import React, { useState, useMemo, useRef } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, Image, Modal, ScrollView, Animated } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather, Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { styles } from '../../styles/catalogStyles';
import { useCart } from '../../context/CartContext';

// товари
const allProducts = [
  { id: '1', name: 'Guerlain Terracotta Bronzer', price: 3572.51, category: 'Makeup', image: 'https://www.brocard.ua/media/catalog/product/3/3/3346470435599_A.jpg' },
  { id: '2', name: 'Estée Lauder Foundation', price: 2311.63, category: 'Makeup', image: 'https://www.brocard.ua/media/catalog/product/8/8/887167466722_1.jpg' },
  { id: '3', name: 'Lancôme Mascara idôle', price: 1471.04, category: 'Makeup', image: 'https://www.brocard.ua/media/catalog/product/3/6/3614273066365_A.jpg' },
  { id: '4', name: 'Giorgio Armani Si', price: 2500.00, category: 'Perfumery', image: 'https://www.brocard.ua/media/catalog/product/3/6/3605521816658_1.jpg' },
  { id: '7', name: 'Needly Cross Barrier Toner', price: 1250.00, category: 'Skincare', image: 'https://franceup.com.ua/sites/default/files/styles/512x667s/public/product_images/needly-crossbarrier-toner-200-36907553776290.jpg?itok=2Dky4Hh_' },
  { id: '10', name: 'Dove Body Lotion', price: 250.00, category: 'Bodycare', image: 'https://icf.listex.info/med/dc2cfded-2c19-61cb-1b12-29c3c5b94a4a.jpg' },
];

const categoriesList = ['Всі', 'Makeup', 'Perfumery', 'Skincare', 'Bodycare', 'Haircare'];

export default function CatalogPage() {
  const router = useRouter();
  const { addToCart } = useCart();
  
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Всі');
  const [sortOption, setSortOption] = useState('popular');
  const [isModalVisible, setModalVisible] = useState(false);
  
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const showToast = () => {
    Animated.sequence([
      Animated.timing(fadeAnim, { toValue: 1, duration: 300, useNativeDriver: false }),
      Animated.delay(2000),
      Animated.timing(fadeAnim, { toValue: 0, duration: 300, useNativeDriver: false }),
    ]).start();
  };

  const filteredProducts = useMemo(() => {
    let result = allProducts.filter(p => 
      (selectedCategory === 'Всі' || p.category === selectedCategory) &&
      p.name.toLowerCase().includes(search.toLowerCase())
    );
    if (sortOption === 'price_asc') result.sort((a, b) => a.price - b.price);
    if (sortOption === 'price_desc') result.sort((a, b) => b.price - a.price);
    if (sortOption === 'name_asc') result.sort((a, b) => a.name.localeCompare(b.name));
    return result;
  }, [search, selectedCategory, sortOption]);

  const handleAddToCart = (item: any) => {
    addToCart(item);
    showToast();
  };

  const renderProduct = ({ item }: { item: any }) => (
    <View style={styles.productCard}>
      <TouchableOpacity onPress={() => router.push({ pathname: '/product', params: item })}>
        <Image source={{ uri: item.image }} style={styles.productImage} />
      </TouchableOpacity>
      
      <View style={styles.productInfo}>
        <TouchableOpacity onPress={() => router.push({ pathname: '/product', params: item })}>
          <Text style={styles.productName} numberOfLines={2}>{item.name}</Text>
        </TouchableOpacity>
        <Text style={styles.productPrice}>{item.price.toFixed(2)} ГРН</Text>
        
        <TouchableOpacity style={styles.buyButton} onPress={() => handleAddToCart(item)}>
          <Text style={styles.buyButtonText}>Додати у кошик</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
        <View style={styles.searchContainer}>
            <TextInput 
            style={styles.searchInput}
            placeholder="Пошук..."
            placeholderTextColor="#888"
            value={search}
            onChangeText={setSearch}
            />
        </View>
        </View>

      <View style={{ height: 60 }}>
        <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false} 
            contentContainerStyle={styles.categoriesScroll}
        >
          {categoriesList.map(cat => (
            <TouchableOpacity 
              key={cat} 
              style={[styles.categoryBadge, selectedCategory === cat && styles.activeCategoryBadge]}
              onPress={() => setSelectedCategory(cat)}
            >
              <Text style={[styles.categoryBadgeText, selectedCategory === cat && styles.activeCategoryBadgeText]}>
                {cat}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <View style={styles.filterRow}>
        <Text style={{ fontSize: 14, fontWeight: '600', color: '#5c1c5c' }}>Знайдено: {filteredProducts.length}</Text>
        <TouchableOpacity style={styles.filterBtn} onPress={() => setModalVisible(true)}>
          <Ionicons name="options-outline" size={20} color="#870992" />
          <Text style={styles.filterBtnText}>Сортування</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id}
        renderItem={renderProduct}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'flex-start' }} 
        contentContainerStyle={styles.productGrid}
      />

      <Animated.View style={[styles.toastContainer, { opacity: fadeAnim }]} pointerEvents="none">
        <Feather name="check-circle" size={20} color="#fff" />
        <Text style={styles.toastText}>Додано у кошик!</Text>
      </Animated.View>

      <Modal visible={isModalVisible} animationType="slide" transparent={true} onRequestClose={() => setModalVisible(false)}>
        <TouchableOpacity style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.5)' }} onPress={() => setModalVisible(false)} />
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Сортувати</Text>
          <TouchableOpacity style={styles.sortOption} onPress={() => { setSortOption('popular'); setModalVisible(false); }}>
            <Text style={sortOption === 'popular' && styles.activeSortText}>За популярністю</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sortOption} onPress={() => { setSortOption('price_asc'); setModalVisible(false); }}>
            <Text style={sortOption === 'price_asc' && styles.activeSortText}>Найдешевші попереду</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sortOption} onPress={() => { setSortOption('price_desc'); setModalVisible(false); }}>
            <Text style={sortOption === 'price_desc' && styles.activeSortText}>Найдорожчі попереду</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sortOption} onPress={() => { setSortOption('name_asc'); setModalVisible(false); }}>
            <Text style={sortOption === 'name_asc' && styles.activeSortText}>Від А до Я</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
