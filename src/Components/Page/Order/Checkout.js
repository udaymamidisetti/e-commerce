/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/

import OrderSummary from './OrderSummary'
import CheckoutAddress from './CheckoutAddress'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getAddress } from '../../Redux/Actions/actions'

const currencies = ['CAD', 'USD', 'AUD', 'EUR', 'GBP']


const deliveryMethods = [
  { id: 1, title: 'Standard', turnaround: '4–10 business days', price: '$5.00' },
  { id: 2, title: 'Express', turnaround: '2–5 business days', price: '$16.00' },
  { id: 2, title: 'Express', turnaround: '2–5 business days', price: '$16.00' },
]


export default function Checkout() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAddress());
  }, [dispatch]);

  return (
    <main className="max-w-7xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto lg:max-w-none">
        <h1 className="sr-only">Checkout</h1>

        <div className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
          <CheckoutAddress />
          {/* Order summary */}
          <OrderSummary />
        </div>
      </div>
    </main>
  )
}
