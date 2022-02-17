import { FC } from 'react';
import { Tween } from 'react-gsap';

interface IFadeInLeftProps {
  children: JSX.Element;
}

const FadeInLeft: FC<IFadeInLeftProps> = ({ children }) => (
  <Tween
    from={{ opacity: 0, transform: 'translate3d(-100vw, 0, 0)' }}
    duration={0.8}
    ease="back.out(1.4)"
  >
    {children}
  </Tween>
);

export default FadeInLeft;
