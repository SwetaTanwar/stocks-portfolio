import { StyleProp, ViewStyle } from 'react-native';

export interface PortfolioSummaryProps {
  /**
   * The current value of the portfolio
   */
  currentValue: number;
  /**
   * The total investment in the portfolio
   */
  totalInvestment: number;
  /**
   * The total Profit and loss of the portfolio for today
   */
  todaysPnL: number;
  /**
   * The total Profit and loss of the portfolio for all time
   */
  totalPnL: number;
}

export type PortfolioSummaryController = PortfolioSummaryProps & {
  isCollapsed: boolean;
  toggleCollapse: () => void;
  animatedStyle: StyleProp<ViewStyle>;
};
