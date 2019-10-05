import React from 'react'
import { ProductConsumer } from '../context';

export default function HomePage() {
  return (
    <div>
      <ProductConsumer>
        {value => {
          console.log(value);
          return <h1> Helllo from Home Page</h1>
        }}
      </ProductConsumer>
    </div>
  )
}
