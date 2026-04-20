import { Tabs } from 'expo-router';
import { Feather } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#870992',
        tabBarInactiveTintColor: '#d1b3e8',
        tabBarStyle: {
          backgroundColor: '#ffffff',
          borderTopWidth: 1,
          borderTopColor: '#f0bbf5',
          height: 65,
          paddingBottom: 10,
          paddingTop: 10,
          elevation: 0,
          shadowOpacity: 0,
        },
      }}>
      
      {/* 1. Головна */}
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Feather name="home" size={focused ? 28 : 24} color={color} />
          ),
        }}
      />

      {/* 2. Каталог / Пошук */}
      <Tabs.Screen
        name="catalog"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Feather name="search" size={focused ? 28 : 24} color={color} />
          ),
        }}
      />

      {/* 3. Кошик */}
      <Tabs.Screen
        name="cart"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Feather name="shopping-bag" size={focused ? 28 : 24} color={color} />
          ),
        }}
      />

      {/* 4. Категорії */}
      <Tabs.Screen
        name="categories"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Feather name="grid" size={focused ? 28 : 24} color={color} />
          ),
        }}
      />

      {/* 5. Мій кабінет */}
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Feather name="user" size={focused ? 28 : 24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

