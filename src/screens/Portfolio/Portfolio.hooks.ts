import React from 'react';
import PortfolioConstants from './Portfolio.constants';
import { PortfolioController, StockDetailsProps, PortfolioSummaryProps } from './Portfolio.types';

export const usePortfolioController = (): PortfolioController => {
  const [data, setData] = React.useState<StockDetailsProps[] | null>(null);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<boolean>(false);

  React.useEffect(() => {
    const fetchPortfolioData = async () => {
      try {
        const response = await fetch(PortfolioConstants.GET_PORTFOLIO_DATA_API);
        const { userHolding } = await response.json();

        setData(userHolding);
      } catch (error) {
        console.error('Error fetching portfolio data:', error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchPortfolioData();
  }, []);

  const portfolioSummary = React.useMemo(() => {
    if (!data) {
      return {
        currentValue: 0,
        totalInvestment: 0,
        todaysPnL: 0,
        totalPnL: 0,
      };
    }

    return calculatePortfolioSummary(data);
  }, [data]);

  return { loading, error, data, portfolioSummary };
};

const calculatePortfolioSummary = (portfolioData: StockDetailsProps[] | null): PortfolioSummaryProps => {
  const summary = portfolioData!.reduce(
    (acc, stock) => {
      const currentValue = acc.currentValue + stock.ltp * stock.quantity;
      const totalInvestment = acc.totalInvestment + parseFloat((stock.avgPrice * stock.quantity).toFixed(2));
      const todaysPnL = acc.todaysPnL + parseFloat(((stock.close - stock.ltp) * stock.quantity).toFixed(2));
      const totalPnL = acc.totalPnL + parseFloat((currentValue - totalInvestment).toFixed(2));
      return { currentValue, totalInvestment, todaysPnL, totalPnL };
    },
    { currentValue: 0, totalInvestment: 0, todaysPnL: 0, totalPnL: 0 }
  );

  return summary;
};
