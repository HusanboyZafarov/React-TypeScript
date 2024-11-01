import Button from './components/Button';
import Alert from './components/Alert';
import ListGroup from './components/ListGroup';
import { useState } from 'react';

function App() {
  type ColorType =
    | 'primary'
    | 'secondary'
    | 'danger'
    | 'warning'
    | 'success'
    | 'info'
    | 'dark'
    | 'light';

  const items = ['New York', 'Los Angles', 'San Francisco'];

  const [color, setColor] = useState<ColorType>('danger');
  const [alertVisible, setAlertVisible] = useState(false);
  const [index, setIndex] = useState(-1);

  const handleAlertVisible = () => {
    setAlertVisible(!alertVisible);
  };

  const handleSelect = (index: number) => {
    setIndex(index);
  };

  return (
    <div className='container py-5'>
      {/* {alertVisible && (
        <Alert onChangeVisible={handleAlertVisible} color={color}>
          The message is here
        </Alert>
      )}

      <Button color={color} onClick={handleAlertVisible}>
        {alertVisible ? 'Close' : 'Open'}
      </Button> */}

      <ListGroup
        heading='Miami'
        items={items}
        onSelectItem={() => handleSelect}
      />
    </div>
  );
}

export default App;
