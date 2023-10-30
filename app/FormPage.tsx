'use client';
import { experimental_useFormStatus as useFormStatus } from 'react-dom';
import {
  Suspense,
  experimental_useOptimistic as useOptimistic,
  useRef,
} from 'react';
import { saveForm } from './_actions';
import UserList from './UserList';
import { revalidatePath } from 'next/cache';

export default function FormPage() {
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <form
      className='flex-col flex gap-y-4 max-w-md mx-auto'
      ref={formRef}
      action={async (formData) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        await saveForm(formData);
        formRef.current?.reset();
      }}
    >
      <Form />
    </form>
  );
}

function Form() {
  const { pending } = useFormStatus();

  return (
    <>
    <div className='bg-white p-4 rounded-lg drop-shadow-xl '>
      <div className='mb-4'>
        <label
          htmlFor='name'
          className='inline-block text-black text-sm font-medium mb-2'
        >
          Name:
        </label>
        <input
          type='text'
          name='name'
          disabled={pending}
          id='name'
          placeholder='Enter your name'
          required
          className='shadow border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline bg-gray-300'
        />
      </div>
      <div className='mb-4'>
        <label
          htmlFor='email'
          className='inline-block text-black text-sm font-medium mb-2'
        >
          Email Address:
        </label>
        <input
          type='email'
          name='email'
          disabled={pending}
          id='email'
          placeholder='Enter your email address'
          required
          className='shadow border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline bg-gray-300'
        />
      </div>
      <button
        type='submit'
        disabled={pending}
        className={`w-full ${
          pending ? 'bg-blue-800' : 'bg-blue-500 hover:bg-blue-700'
        } text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-white`}
      >
        {pending ? 'Submitting' : 'Submit'}
      </button>
      </div>
    </>
  );
}
