import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#f8eff8' },
  container: { paddingBottom: 40 },
  header: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    paddingHorizontal: 16, 
    paddingVertical: 15 
  },
  title: { fontSize: 22, fontWeight: 'bold', color: '#870992', textAlign: 'center', flex: 1, marginRight: 30 },
  
  section: { 
    backgroundColor: '#fff', 
    borderRadius: 15, 
    padding: 16, 
    marginHorizontal: 16, 
    marginBottom: 16, 
    borderWidth: 1, 
    borderColor: '#f0bbf5',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2 
  },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', color: '#870992', marginBottom: 15 },
  
  label: { fontSize: 13, color: '#5c1c5c', marginBottom: 5, fontWeight: '600' },
  input: {
    backgroundColor: '#fcf2fd',
    borderRadius: 10,
    paddingHorizontal: 12,
    height: 48,
    borderWidth: 1,
    borderColor: '#e0d4e0',
    fontSize: 16,
    color: '#333',
    marginBottom: 12,
  },
  inputDisabled: { 
    backgroundColor: '#f0f0f0', 
    borderColor: '#ddd',
    color: '#777' 
  },
  
  radioOption: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  radioCircle: {
    height: 22,
    width: 22,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: '#870992',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  radioSelected: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#870992',
  },
  radioText: { fontSize: 16, color: '#333' },

  summaryRow: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center',
    marginTop: 8 
  },
  summaryLabel: { 
    fontSize: 16, 
    color: '#5c1c5c',
    fontWeight: '500'
  },
  totalText: { 
    fontSize: 20, 
    fontWeight: 'bold', 
    color: '#870992' 
  },

  submitButton: {
    backgroundColor: '#870992',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginHorizontal: 16,
    marginTop: 10,
  },
  submitButtonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
});