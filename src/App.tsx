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
import ExpenseList from './expense-tracker/components/ExpenseList';
import ExpenseFilter from './expense-tracker/components/ExpenseFilter';

const categories = ['Groceries', 'Utilities', 'Entertainment'];

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

  const [selectedCategory, setSelectedCategory] = useState('');

  const [expenses, setExpenses] = useState([
    { id: 1, description: 'aaa', amount: 10, category: 'Groceries' },
    { id: 2, description: 'bbb', amount: 50, category: 'Groceries' },
    { id: 3, description: 'ccc', amount: 9, category: 'Groceries' },
    { id: 4, description: 'ddd', amount: 100, category: 'Utilities' }
  ]);

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <div className='container-fluid'>
      <div className='my-3'>
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      ></ExpenseList>
    </div>
  );
}

export default App;
