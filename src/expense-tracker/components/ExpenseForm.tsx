import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import categories from '../categories';

const schema = z.object({
  description: z
    .string()
    .min(3, { message: 'Description should be at least 3 characters!' })
    .max(50, { message: 'Description should be at most 50 characters!' }),
  amount: z
    .number({ invalid_type_error: 'Amount is required!' })
    .min(0.01)
    .max(100_000),
  category: z.enum(categories, { message: 'You have to choose the category!' })
});

type ExpenseFormData = z.infer<typeof schema>;

interface Props {
  onSubmit: (data: ExpenseFormData) => void;
}

const ExpenseForm = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ExpenseFormData>({
    resolver: zodResolver(schema)
  });
  return (
    <form
      onSubmit={handleSubmit((data) => {
        onSubmit(data);
        reset();
      })}
    >
      <h3>Adding expense</h3>
      <div className='mb-3'>
        <label htmlFor='description' className='form-label'>
          Description
        </label>
        <input
          {...register('description')}
          id='description'
          type='text'
          className='form-control'
        />

        {errors.description && (
          <p className='text-danger'>{errors.description.message}</p>
        )}
      </div>

      <div className='mb-3'>
        <label htmlFor='amount' className='form-label'>
          Amount
        </label>
        <input
          {...register('amount', { valueAsNumber: true })}
          id='amount'
          type='number'
          className='form-control'
        />
        {errors.amount && (
          <p className='text-danger'>{errors.amount.message}</p>
        )}
      </div>

      <div className='mb-3'>
        <label htmlFor='category' className='form-label'>
          Category
        </label>
        <select
          {...register('category')}
          id='category'
          defaultValue=''
          className='form-select'
        >
          <option value=''></option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        {errors.category && (
          <p className='text-danger'>{errors.category.message}</p>
        )}
      </div>

      <button type='submit' className='btn btn-primary'>
        Submit
      </button>
    </form>
  );
};

export default ExpenseForm;
