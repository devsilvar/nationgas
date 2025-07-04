import React from 'react';

const FeedbackForm: React.FC = () => {
  return (
    <div className='max-w-md mx-auto relative bg-white p-6 border mt-10 border-gray-200 rounded-md shadow-sm'>
      <h2 className='text-lg font-semibold text-gray-800 mb-6'>
        Please fill out the form below to share your feedback or complaints.
      </h2>

      <form className='space-y-5'>
        <div>
          <label htmlFor='name' className='block text-sm text-gray-700 mb-1'>
            Enter your name
          </label>
          <input
            id='name'
            type='text'
            className='w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
            placeholder='Your name'
          />
        </div>

        <div>
          <label htmlFor='phone' className='block text-sm text-gray-700 mb-1'>
            Enter your phone number
          </label>
          <input
            id='phone'
            type='tel'
            className='w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
            placeholder='Phone number'
          />
        </div>

        <div>
          <label htmlFor='email' className='block text-sm text-gray-700 mb-1'>
            Enter your email address
          </label>
          <input
            id='email'
            type='email'
            className='w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
            placeholder='Email address'
          />
        </div>

        <div>
          <label htmlFor='message' className='block text-sm text-gray-700 mb-1'>
            Enter your message
          </label>
          <textarea
            id='message'
            rows={4}
            className='w-full border border-gray-300 rounded-md px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500'
            placeholder='Your message'
          />
        </div>
      </form>
    </div>
  );
};

export default FeedbackForm;
