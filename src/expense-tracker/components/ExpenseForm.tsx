import React from 'react';

const ExpenseForm = () => {
  return (
    <form action=''>
      <div className='mb-3'>
        <label htmlFor='description' className='form-label'>
          Description
        </label>
        <input id='description' type='text' className='form-control' />
      </div>

      <div className='mb-3'>
        <label htmlFor='amount' className='form-label'>
          Amount
        </label>
        <input id='amount' type='number' className='form-control' />
      </div>

      <div className='mb-3'>
        <label htmlFor='category' className='form-label'>
          Category
        </label>
              <select id='category'> 
                  
        </select>
      </div>
    </form>
  );
};

export default ExpenseForm;
