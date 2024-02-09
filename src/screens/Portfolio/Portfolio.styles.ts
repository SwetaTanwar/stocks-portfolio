import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  list: {
    flex: 1,
    backgroundColor: Colors.GREY,
  },
  listContent: {
    backgroundColor: Colors.WHITE,
    paddingHorizontal: 16,
    paddingVertical: 8
  },
  loadingContainer: {
    padding: 16,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    height: 1,
    backgroundColor: Colors.GREY,
    marginVertical: 8,
  },
  errorMessage: {
    color: Colors.RED,
    fontWeight: 'bold',
  }
});
