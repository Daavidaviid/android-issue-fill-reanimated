import React, {FunctionComponent} from 'react';
import Animated, {useAnimatedProps} from 'react-native-reanimated';
import Svg, {Path, SvgProps, G} from 'react-native-svg';

const AnimatedPath = Animated.createAnimatedComponent(Path);

interface Props extends Omit<SvgProps, 'color'> {
  color: Animated.SharedValue<string | number> | undefined;
}

export const HomeIcon: FunctionComponent<Props> = ({color, ...props}) => {
  const actionColor = '#1C1C1C';
  const pathAnimatedProps = useAnimatedProps(
    () => ({
      fill: color?.value || actionColor,
    }),
    [actionColor],
  );

  return (
    <Svg width="22px" height="20px" viewBox="0 0 22 20" {...props}>
      <G stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <AnimatedPath
          d="M10.3753,0.219131 C10.7406,-0.0730437 11.2595,-0.0730437 11.6247,0.219131 L21.6247,8.21913 C22.056,8.56414 22.1259,9.19343 21.7809,9.62469 C21.4359,10.056 20.8066,10.1259 20.3753,9.78087 L19.4999998,9.08062 L19.4999998,19 C19.4999998,19.5523 19.0523,20 18.4999998,20 L3.50004,20 C2.94775,20 2.50004,19.5523 2.50004,19 L2.50004,9.08062 L1.62473,9.78087 C1.19347,10.1259 0.564178,10.056 0.219168,9.62469 C-0.125842,9.19343 -0.0559201,8.56414 0.375342,8.21913 L10.3753,0.219131 Z M8.5,11.5 C7.94772,11.5 7.5,11.9477 7.5,12.5 L7.5,18 L14.5,18 L14.5,12.5 C14.5,11.9477 14.0523,11.5 13.5,11.5 L8.5,11.5 Z"
          animatedProps={pathAnimatedProps}
        />
      </G>
    </Svg>
  );
};
