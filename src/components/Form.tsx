import { FieldArray, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
  name: z
    .string({
      invalid_type_error: 'Name field is required!'
    })
    .min(3, { message: 'Name must be at least 3 characters' }),
  age: z
    .number({ invalid_type_error: 'Age field is required!' })
    .min(18, { message: 'Age must be older than 18' })
});

type FormData = z.infer<typeof schema>;

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  // const [person, setPerson] = useState({
  //   name: '',
  //   age: 0
  // });

  // const handleSubmit = (event: React.FormEvent) => {
  //   event.preventDefault();
  //   console.log(person);
  // };

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <form action='' onSubmit={handleSubmit(onSubmit)}>
      <div className='mb-3'>
        <label htmlFor='name' className='form-label'>
          Name
        </label>
        <input
          // onChange={(event) =>
          //   setPerson({ ...person, name: event.target.value })
          // }

          {...register('name')}
          id='name'
          type='text'
          className='form-control'
        />

        {errors.name && (
          <p className='alert alert-danger mt-2 p-3'>{errors.name.message}</p>
        )}
      </div>

      <div className='mb-3'>
        <label htmlFor='Age' className='form-label'>
          Age
        </label>
        <input
          // onChange={(event) =>
          //   setPerson({ ...person, age: parseInt(event.target.value) })
          // }

          {...register('age', { valueAsNumber: true })}
          id='age'
          type='number'
          className='form-control'
          defaultValue={0}
        />
        {errors.age && (
          <p className='alert alert-danger mt-2 p-3'>{errors.age.message}</p>
        )}
      </div>

      <button type='submit' disabled={!isValid} className='btn btn-primary'>
        Submit
      </button>
    </form>
  );
};

export default Form;
