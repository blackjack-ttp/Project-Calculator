import { useContext } from 'react';
import { CalcContext } from '@/context/CalcContext';
import { Textfit } from 'new-react-textfit';
import './style.scss';

const Screen = () => {
  const { calc } = useContext(CalcContext);

  return (
    <Textfit className="screen" max={70} mode="single">
      {calc.num ? calc.num : calc.res}
    </Textfit>
  );
};

export default Screen;
