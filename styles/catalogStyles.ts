import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  safeArea: { 
    flex: 1, 
    backgroundColor: '#f8eff8' 
  },
  header: { 
    paddingHorizontal: 16, 
    paddingTop: 10, 
    paddingBottom: 10, 
    backgroundColor: '#f8eff8' 
  },
  searchContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 45,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#d1b3e8',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  searchInput: { 
    flex: 1, 
    fontSize: 16, 
    color: '#333',
    paddingVertical: 0,
  },
  
  categoriesScroll: { 
    paddingVertical: 10, 
    paddingLeft: 16,
    alignItems: 'center'
  },
  categoryBadge: {
    minWidth: 90, 
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#d1b3e8',
    marginRight: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeCategoryBadge: { backgroundColor: '#870992', borderColor: '#870992' },
  categoryBadgeText: { color: '#870992', fontWeight: '600' },
  activeCategoryBadgeText: { color: '#fff' },

  filterRow: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    paddingHorizontal: 16, 
    alignItems: 'center',
    marginBottom: 10 
  },
  filterBtn: { flexDirection: 'row', alignItems: 'center', padding: 8 },
  filterBtnText: { marginLeft: 5, color: '#870992', fontWeight: 'bold' },

  productGrid: { 
    paddingHorizontal: 8,
    paddingBottom: 20 
  },
  productCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    flex: 0.5, 
    maxWidth: '46%', 
    margin: '2%', 
    borderWidth: 1,
    borderColor: '#f0bbf5',
    overflow: 'hidden',
  },
  productImage: {
    width: '100%',
    height: 140,
    resizeMode: 'contain',
    backgroundColor: '#fff',
  },
  productInfo: {
    padding: 10,
    backgroundColor: '#f5dbfa',
    flex: 1,
    justifyContent: 'space-between',
  },
  productName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 5,
    height: 40,
  },
  productPrice: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#5c1c5c',
    marginBottom: 10,
  },
  buyButton: {
    backgroundColor: '#e359f2',
    paddingVertical: 8,
    borderRadius: 6,
    alignItems: 'center',
  },
  buyButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
  },
  toastContainer: {
    position: 'absolute',
    bottom: 30,
    alignSelf: 'center',
    backgroundColor: '#870992',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 1000,
  },
  toastText: { color: '#fff', fontSize: 14, fontWeight: '600', marginLeft: 10 },
  modalContent: { 
    backgroundColor: '#fff', 
    padding: 20, 
    borderTopLeftRadius: 20, 
    borderTopRightRadius: 20,
    marginTop: 'auto' 
  },
  modalTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 20, textAlign: 'center', color: '#870992' },
  sortOption: { paddingVertical: 15, borderBottomWidth: 1, borderBottomColor: '#eee' },
  activeSortText: { color: '#870992', fontWeight: 'bold' },
});
