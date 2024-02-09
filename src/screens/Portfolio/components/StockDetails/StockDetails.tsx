import React from 'react';
import { View, Text } from 'react-native';

import StockDetailsStyles from './StockDetails.styles';
import { StockDetailsProps } from './StockDetails.types';

const StockDetailsBase = (props: StockDetailsProps) => {
  const { avgPrice, ltp, quantity, symbol } = props;

  const currentValue = ltp * quantity;
  const investmentValue = avgPrice * quantity;
  const pl = (currentValue - investmentValue).toFixed(2);

  return (
    <>
      <View style={StockDetailsStyles.row}>
        <Text style={StockDetailsStyles.boldText}>{symbol}</Text>
        <Text>
          LTP: <Text style={StockDetailsStyles.boldText}>₹ {ltp}</Text>
        </Text>
      </View>
      <View style={StockDetailsStyles.bottomRow}>
        <Text>{quantity}</Text>
        <Text>
          P/L: <Text style={StockDetailsStyles.boldText}>₹ {pl}</Text>
        </Text>
      </View>
    </>
  );
};

const MemoizedStockDetails = React.memo(StockDetailsBase);
const StockDetails = MemoizedStockDetails;
export default StockDetails;
