import { StyleSheet } from 'react-native';
import Colors from '../../../../constants/Colors';

export default StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Colors.WHITE,
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Colors.WHITE,
    paddingTop: 8,
  },
  boldText: {
    fontWeight: 'bold',
  },
});
