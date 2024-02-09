import React from 'react';
import { View, Text, FlatList, ListRenderItem, ActivityIndicator } from 'react-native';

import { usePortfolioController } from './Portfolio.hooks';
import PortfolioStyles from './Portfolio.styles';

import StockDetails from './components/StockDetails';
import { StockDetailsProps } from './components/StockDetails/StockDetails.types';
import PortfolioSummary from './components/PortfolioSummary';
import Colors from '../../constants/Colors';

const PortfolioBase = () => {
  const { loading, error, data, portfolioSummary } = usePortfolioController();

  if (loading) {
    return (
      <View style={PortfolioStyles.loadingContainer}>
        <ActivityIndicator color={Colors.PURPLE} />
      </View>
    );
  }

  if (error) {
    return (
      <View style={PortfolioStyles.loadingContainer}>
        <Text style={PortfolioStyles.errorMessage}>Error fetching data!</Text>
      </View>
    );
  }

  return (
    <View style={PortfolioStyles.container}>
      <FlatList
        data={data}
        renderItem={_renderStockDetails}
        ListEmptyComponent={_renderEmptyComponent}
        ItemSeparatorComponent={_renderSeparator}
        style={PortfolioStyles.list}
        contentContainerStyle={PortfolioStyles.listContent}
      />
      <PortfolioSummary {...portfolioSummary} />
    </View>
  );
};

const _renderStockDetails: ListRenderItem<StockDetailsProps> = ({ item: props }) => {
  return <StockDetails {...props} />;
};

const _renderEmptyComponent = () => {
  return (
    <View style={PortfolioStyles.loadingContainer}>
      <Text>No items found...</Text>
    </View>
  );
};

const _renderSeparator = () => {
  return <View style={PortfolioStyles.separator} />;
};

const MemoizedPortfolio = React.memo(PortfolioBase);
const Portfolio = MemoizedPortfolio;
export default Portfolio;
