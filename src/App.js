import Container from './components/Container/Container.js'
import Button from './components/Button/Button.js'
import FormattedTime from './components/FormattedTime/FormattedTime.js'
import {useState, useEffect} from 'react'; 

const App = () => {

  const [time, setTime] = useState(0);
  const [intervalId, setIntervalId] = useState(null);


  
  const startTimer = () => {
    const id = setInterval(() => {
      setTime((prevValue) => prevValue + 1);
    }, 1);
    setIntervalId(id);
  };

  const stopTimer = () => {
    clearInterval(intervalId);
    setIntervalId(null);
  };

  const resetTimer = () => {
    setTime(0);
  };

  useEffect(() => {
    return () => {
       if(intervalId) clearInterval(intervalId);
    };
  }, []);

  return (
    <Container>
      <FormattedTime time={time} />
      <Button onClick={startTimer}>Start</Button>
      <Button onClick={stopTimer}>Stop</Button>
      <Button onClick={resetTimer}>Reset</Button>
    </Container>
  );
}

export default App;
