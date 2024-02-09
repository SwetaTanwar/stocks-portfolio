import { PortfolioSummaryProps } from './components/PortfolioSummary/PortfolioSummary.types';
import { StockDetailsProps } from './components/StockDetails/StockDetails.types';

export type PortfolioController = {
  /**
   * The loading state of the portfolio till data if fetched
   */
  loading: boolean;
  /**
   * The error message if the portfolio data fetch fails
   */
  error: boolean;
  /**
   * The data of the portfolio
   */
  data: StockDetailsProps[] | null;
  /**
   * The summary of the portfolio data
   */
  portfolioSummary: PortfolioSummaryProps;
};
export { StockDetailsProps, PortfolioSummaryProps };
