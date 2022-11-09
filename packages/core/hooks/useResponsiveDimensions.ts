import { useEffect, useState } from 'react';
import { Dimensions } from 'react-native';

const getDimensions = (maxWidth: number | undefined, maxHeight: number | undefined) => {
  const { width, height } = Dimensions.get('window');
  return {
    width: maxWidth ? Math.min(maxWidth, width) : width,
    height: maxHeight ? Math.min(maxHeight, height) : height
  };
};

/**
 * responsive Dimensions hook
 * passes an updated {width, height} object whenever the dimensions changes due to orientation change
 * @returns {Object}
 */
function useResponsiveDimensions(maxWidth?: number, maxHeight?: number) {
  const [dimensions, setDimensions] = useState(getDimensions(maxWidth, maxHeight));
  useEffect(() => {
    const onDimensionsChange = () => {
      setDimensions(getDimensions(maxWidth, maxHeight));
    };
    const dimensionsChangeListener = Dimensions.addEventListener('change', onDimensionsChange);
    return () => {
      dimensionsChangeListener?.remove?.();
    };
  }, []);

  return dimensions;
}

export default useResponsiveDimensions;
