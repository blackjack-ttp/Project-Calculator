import './App.scss';
import Wrapper from '@/components/wrapper';
import Screen from '@/components/screen';
import ButtonBox from '@/components/buttonBox';
import Button from '@/components/button';
import CalcProvider from '@/context/CalcContext';

function App() {
  const btnValues = [
    ['C', '+-', '%', '/'],
    [7, 8, 9, 'x'],
    [4, 5, 6, '-'],
    [1, 2, 3, '+'],
    [0, '.', '='],
  ];
  return (
    <>
      <div className="App">
        <h1>Project Calculator</h1>
        <CalcProvider>
          <Wrapper>
            <Screen />
            <ButtonBox>
              {btnValues.flat().map((btn, i) => (
                <Button value={btn} key={i} />
              ))}
            </ButtonBox>
          </Wrapper>
        </CalcProvider>
      </div>
    </>
  );
}

export default App;
