import React from 'react';
import { TouchableOpacity } from 'react-native';

import TriangleStyles from './Triangle.styles';
import { TriangleProps } from './Triangle.types';

const Triangle = (props: TriangleProps) => {
  const { direction, onPress } = props;

  const _style = direction === 'UP' ? TriangleStyles.triangleUp : TriangleStyles.triangleDown;

  return <TouchableOpacity style={_style} onPress={onPress} hitSlop={20} />;
};

export default Triangle;
