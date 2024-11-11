{
  /*  
// import Button from './components/Button/Button';
// import Alert from './components/Alert';
// import ListGroup from './components/ListGroup';
// import Like from './components/Like';
// import { useEffect, useRef, useState } from 'react';
// import Form from './components/Form';
// import { produce } from 'immer';
// import Cart from './components/Cart';
// import Navbar from './components/Navbar';
// import ExpandableText from './components/ExpandableText';
// import ExpenseList from './expense-tracker/components/ExpenseList';
// import ExpenseFilter from './expense-tracker/components/ExpenseFilter';
// import ExpenseForm from './expense-tracker/components/ExpenseForm';
// import categories from './expense-tracker/categories';
// import ProductList from './ProductList';

// const connect = () => console.log('Connecting');
// const disconnet = () => console.log('Disconneting');
  */
}

import { useEffect, useState } from 'react';
import { CanceledError } from './services/api-client';
import UserService, { User } from './services/user-service';
import userService from './services/user-service';

function App() {
  {
    /*
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

  const [category, setCategory] = useState('');
  useEffect(() => {
    connect();

    return () => disconnet();
  });
    */
  }
  {
    /*
    // <div className='container-fluid'>
    //   <div className='mb-5 mt-3'>
    //     <ExpenseForm
    //       onSubmit={(expense) => {
    //         setExpenses([...expenses, { ...expense, id: Date.now() }]);
    //       }}
    //     />
    //   </div>
    //   <div className='my-3'>
    //     <ExpenseFilter
    //       onSelectCategory={(category) => setSelectedCategory(category)}
    //     />
    //   </div>
    //   <ExpenseList
    //     expenses={visibleExpenses}
    //     onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
    //   ></ExpenseList>
    // </div>
    */
  }
  {
    /* <select
    className='form-select'
    onChange={(event) => setCategory(event.target.value)}
  >
    <option value=''></option>
    <option value='Clothing'>Clothing</option>
    <option value='Household'>Household</option>
  </select>
  <ProductList category={category} /> */
  }

  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const { request, cancel } = UserService.getAllUsers();
    request
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
        setLoading(false);
      });

    return () => cancel();
  }, []);

  const deleteUser = (user: User) => {
    const originalUsers = [...users];
    setUsers([...users.filter((u) => u.id !== user.id)]);
    setLoading(true);
    userService
      .deleteUser(user.id)
      .then(() => setLoading(false))
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
        setLoading(false);
      });
  };

  const addUser = () => {
    const originalUsers = [...users];
    const newUser = {
      id: 0,
      name: 'Safir'
    };
    setUsers([newUser, ...users]);

    userService
      .addUser(newUser)
      .then(({ data: saveduser }) => setUsers([saveduser, ...users]))
      .catch((error) => {
        setError(error.message);
        setUsers(originalUsers);
      });
  };

  const updateUser = (user: User) => {
    const originalUsers = [...users];

    const updatedUser = { ...user, name: user.name + '!' };

    setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));

    userService.updateUser(user.id, updatedUser).catch((err) => {
      console.log(err);
      setUsers(originalUsers);
    });
  };

  return (
    <div className='container-fluid mt-5'>
      {error && <div className='alert alert-danger mb-3'>{error}</div>}
      {isLoading && <div className='spinner-border'></div>}
      <button className='btn btn-primary mb-3' onClick={addUser}>
        Add
      </button>
      <ul className='list-group'>
        {users.map((user) => (
          <li
            key={user.id}
            className='list-group-item d-flex justify-content-between align-align-items-center'
          >
            {user.name}
            <div className='btn-group'>
              <button
                className='btn btn-sm btn-outline-warning'
                onClick={() => updateUser(user)}
              >
                Update
              </button>
              <button
                className='btn btn-sm btn-outline-danger'
                onClick={() => deleteUser(user)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
