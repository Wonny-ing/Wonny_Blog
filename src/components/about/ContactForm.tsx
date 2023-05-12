'use client';

import { ChangeEvent, FormEvent, useState } from 'react';
import Button from '../Button';

type Form = {
  name: string;
  from: string;
  subject: string;
  message: string;
};
const DEFAULT_DATA = {
  name: '',
  from: '',
  subject: '',
  message: '',
};
export default function ContactForm() {
  const [form, setForm] = useState<Form>(DEFAULT_DATA);
  const onchange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className='w-full mt-10 text-uPrimary'>
      <form className='w-full flex flex-col gap-3'>
        <label htmlFor='name' className='font-semibold'>
          Your Name
        </label>
        <input
          type='email'
          id='name'
          name='name'
          required
          autoFocus
          value={form.name}
          onChange={onchange}
          className='px-4 py-2 border border-slate-100 outline-none'
        />
        <label htmlFor='from' className='font-semibold'>
          Your Email
        </label>
        <input
          type='email'
          id='from'
          name='from'
          required
          autoFocus
          value={form.from}
          onChange={onchange}
          className='px-4 py-2 border border-slate-100  outline-none'
        />
        <label htmlFor='subject' className='font-semibold'>
          Subject
        </label>
        <input
          type='text'
          id='subject'
          name='subject'
          required
          value={form.subject}
          onChange={onchange}
          className='px-4 py-2 border border-slate-100  outline-none'
        />
        <label htmlFor='message' className='font-semibold'>
          Message
        </label>
        <textarea
          rows={10}
          id='message'
          name='message'
          required
          value={form.message}
          onChange={onchange}
          className='px-4 py-2 border border-slate-100  outline-none'
        />
        <Button bgColor='bg-uRed'>Submit</Button>
      </form>
    </section>
  );
}
