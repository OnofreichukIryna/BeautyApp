import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f8eff8',
  },
  header: {
    paddingVertical: 15,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#f0bbf5',
    backgroundColor: '#f8eff8',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#870992',
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: 10,
  },
  sectionTitle: {
    fontSize: 13,
    color: '#5c1c5c',
    fontWeight: 'bold',
    marginBottom: 8,
    marginTop: 20,
    textTransform: 'uppercase',
    marginLeft: 4,
  },
  sectionBlock: {
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#f0bbf5',
    paddingHorizontal: 15,
    overflow: 'hidden',
  },
  menuRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#fcf2fd',
  },
  menuRowLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuIcon: {
    marginRight: 15,
    width: 24,
    textAlign: 'center',
  },
  menuText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  dangerText: {
    color: '#e8386f',
  },
  menuRowRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  badge: {
    backgroundColor: '#e359f2',
    borderRadius: 12,
    minWidth: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    paddingHorizontal: 6,
  },
  badgeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },


  authContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  authCard: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 25,
    borderWidth: 1,
    borderColor: '#f0bbf5',
    elevation: 4,
    shadowColor: '#870992',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  authTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#870992',
    marginBottom: 25,
    textAlign: 'center',
  },
  authInput: {
    backgroundColor: '#fcf2fd',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#d1b3e8',
    fontSize: 16,
    color: '#333',
  },
  authMainButton: {
    backgroundColor: '#870992',
    borderRadius: 10,
    padding: 16,
    alignItems: 'center',
    marginTop: 10,
  },
  authButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    letterSpacing: 1,
  },
  authSwitchButton: {
    marginTop: 20,
    alignItems: 'center',
  },
  authSwitchText: {
    color: '#870992',
    fontSize: 14,
    fontWeight: '500',
  },
});
