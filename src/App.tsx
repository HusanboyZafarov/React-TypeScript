import Button from './components/Button/Button';
import Alert from './components/Alert';
import ListGroup from './components/ListGroup';
import Like from './components/Like';
import { useState } from 'react';
import Form from './components/Form';
import { produce } from 'immer';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import ExpandableText from './components/ExpandableText';

function App() {
  // type ColorType =
  //   | 'primary'
  //   | 'secondary'
  //   | 'danger'
  //   | 'warning'
  //   | 'success'
  //   | 'info'
  //   | 'dark'
  //   | 'light';

  // const items = ['New York', 'Los Angles', 'San Francisco'];

  // const [color, setColor] = useState<ColorType>('primary');
  // const [alertVisible, setAlertVisible] = useState(false);
  // const [index, setIndex] = useState(-1);

  // const handleAlertVisible = () => {
  //   setAlertVisible(!alertVisible);
  // };

  // const handleSelect = (index: number) => {
  //   setIndex(index);
  // };

  // const [isVisible, setVisibility] = useState(false);

  // const [bugs, setBugs] = useState([
  //   { id: 1, title: "Bug 1", fixed: false },
  //   { id: 2, title: "Bug 2", fixed: false },
  // ]);

  // const handleClick = () => {
  //   setBugs(
  //     produce((draft) => {
  //       const bug = draft.find((bug) => bug.id === 1);
  //       if (bug) bug.fixed = true;
  //     })
  //   );
  // };

  // const [cartItems, setCartItems] = useState(["Product1", "Product2"]);

  // const handleClear = () => {
  //   console.log("first");
  // };

  // const [game, setGame] = useState({
  // id: 1,
  // player: {
  // name: "John",
  // },
  // });

  // const [cart, setCart] = useState({
  //   discount: 0.1,
  //   items: [
  //     { id: 1, title: "Product 1", quantity: 1 },
  //     { id: 2, title: "Product 1", quantity: 1 },
  //   ],
  // });

  // const handleUpdate = () => {
  // setGame({ ...game, player: { ...game.player, name: "Bob" } });
  // setPizza({ ...pizza, toppings: [...pizza.toppings, "Sausage"] });
  // setCart({
  //   ...cart,
  //   items: cart.items.map((item) =>
  //     item.id === 1 ? { ...item, quantity: 2 } : item
  //   ),
  // });
  // };

  return (
    <div className='container-fluid'>
      {/* {alertVisible && (
        <Alert onChangeVisible={handleAlertVisible} color={color}>
          The message is here
        </Alert>
      )} */}

      {/* <Button color={color} onClick={handleAlertVisible}>
        {alertVisible ? 'Close' : 'Open'}
      </Button> */}

      {/* <ListGroup
        heading='Miami'
        items={items}
        onSelectItem={() => handleSelect}
      /> */}

      {/* <Like onClick={() => console.log('Clicked')} /> */}

      {/* <Form /> */}
      {/* {bugs.map((bug) => (
        <p key={bug.id}>
          {bug.title}{" "}
          <i>
            <b>status:</b>
            {bug.fixed ? "Fixed" : "New"}
          </i>
        </p>
      ))} */}
      {/* <button onClick={handleClick}>show</button> */}

      {/* <Navbar cartItemsCount={cartItems.length} /> */}
      {/* <Cart onClear={handleClear} cartItems={cartItems} /> */}

      {/* <button className="inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-slate-900 text-white hover:bg-slate-700 ">
        Click me
      </button> */}

      <ExpandableText maxChars={20}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, at neque
        ad magnam praesentium libero adipisci nesciunt voluptatibus! Suscipit
        pariatur illum eius ut dolorum excepturi quibusdam, nostrum aut in
        architecto facere quo ducimus deleniti soluta sed doloremque consectetur
        reiciendis aliquam dolorem, exercitationem esse reprehenderit. Modi
        magni quia alias, aliquid obcaecati omnis dolore mollitia ullam quae non
        saepe quam harum reprehenderit unde ipsam eaque? Quis dolorum tenetur
        maiores possimus doloremque placeat cumque est maxime nostrum iure in
        blanditiis sint, cum consectetur excepturi aliquid. Corrupti voluptas
        atque minus quisquam accusamus alias aut quos animi. Repellat nobis
        doloribus, voluptatum sint dignissimos facilis nulla.
      </ExpandableText>
    </div>
  );
}

export default App;
