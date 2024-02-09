export interface TriangleProps {
  /**
   * The direction of the triangle, whether up or down
   */
  direction: 'UP' | 'DOWN';
  /**
   * onPress event for the triangle
   */
  onPress?: () => void;
}
