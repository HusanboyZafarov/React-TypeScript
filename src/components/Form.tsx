import React, { useRef } from 'react';

const Form = () => {
  const nameRef = useRef(null);
  const ageRef = useRef(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(nameRef.current);
  };

  return (
    <form action='' onSubmit={handleSubmit}>
      <div className='mb-3'>
        <label htmlFor='name' className='form-label'>
          Name
        </label>
        <input id='name' ref={nameRef} type='text' className='form-control' />
      </div>

      <div className='mb-3'>
        <label htmlFor='Age' className='form-label'>
          Age
        </label>
        <input id='age' ref={ageRef} type='number' className='form-control' />
      </div>

      <button type='submit' className='btn btn-primary'>
        Submit
      </button>
    </form>
  );
};

export default Form;
