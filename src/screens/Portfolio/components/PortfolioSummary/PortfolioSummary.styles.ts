import { StyleSheet } from 'react-native';
import Colors from '../../../../constants/Colors';

export default StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingBottom: 16,
    backgroundColor: Colors.WHITE,
  },
  rowContainer: {
    paddingVertical: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  detailView: {
    paddingBottom: 16,
  },
  triangleContainer: {
    alignItems: 'center',
    marginBottom: 8,
  },
  boldText: {
    fontWeight: 'bold',
  },
});
