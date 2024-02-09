import React from 'react';
import { View, Text, Animated, Pressable, TouchableOpacity } from 'react-native';

import { PortfolioSummaryProps } from './PortfolioSummary.types';
import PortfolioSummaryStyles from './PortfolioSummary.styles';
import Triangle from '../../../../components/Triangle';
import { usePortfolioSummaryController } from './PortfolioSummary.hooks';

const PortfolioSummary = (props: PortfolioSummaryProps) => {
  const {
    currentValue,
    totalInvestment,
    todaysPnL,
    totalPnL,
    isCollapsed,
    toggleCollapse,
    animatedStyle,
  } = usePortfolioSummaryController(props);

  return (
    <Animated.View style={[PortfolioSummaryStyles.container, animatedStyle]}>
      <View style={PortfolioSummaryStyles.triangleContainer}>
        <Triangle direction={isCollapsed ? 'UP' : 'DOWN'} onPress={toggleCollapse} />
      </View>
      {!isCollapsed && (
        <View style={PortfolioSummaryStyles.detailView}>
          <View style={PortfolioSummaryStyles.rowContainer}>
            <Text style={PortfolioSummaryStyles.boldText}>Current Value:</Text>
            <Text>₹ {currentValue}</Text>
          </View>
          <View style={PortfolioSummaryStyles.rowContainer}>
            <Text style={PortfolioSummaryStyles.boldText}>Total Investment:</Text>
            <Text>₹ {totalInvestment}</Text>
          </View>
          <View style={PortfolioSummaryStyles.rowContainer}>
            <Text style={PortfolioSummaryStyles.boldText}>Today's Profit & Loss:</Text>
            <Text>₹ {todaysPnL}</Text>
          </View>
        </View>
      )}
      <View style={PortfolioSummaryStyles.rowContainer}>
        <Text style={PortfolioSummaryStyles.boldText}>Profit & Loss:</Text>
        <Text>₹ {totalPnL}</Text>
      </View>
    </Animated.View>
  );
};

export default PortfolioSummary;
