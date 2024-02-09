import React from 'react';
import { Animated, Easing } from 'react-native';

import { PortfolioSummaryController, PortfolioSummaryProps } from './PortfolioSummary.types';

export const usePortfolioSummaryController = (
  props: PortfolioSummaryProps,
): PortfolioSummaryController => {
  const [isCollapsed, setIsCollapsed] = React.useState(true);
  const animation = React.useRef(new Animated.Value(0)).current;

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);

    Animated.timing(animation, {
      toValue: isCollapsed ? 0 : 1,
      duration: 300,
      easing: isCollapsed ? Easing.in(Easing.ease) : Easing.out(Easing.ease),
      useNativeDriver: false,
    }).start();
  };

  const heightInterpolation = {
    transform: [
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 10],
        }),
      },
    ],
  };

  const animatedStyle = heightInterpolation;

  return {
    isCollapsed,
    toggleCollapse,
    animatedStyle,
    ...props,
  };
};
