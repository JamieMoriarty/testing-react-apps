// simple test with ReactDOM
// http://localhost:3000/counter

import * as React from 'react'
import ReactDOM from 'react-dom'
import Counter from '../../components/counter'

test('counter increments and decrements when the buttons are clicked', () => {
  const div = document.createElement('div');
  document.body.append(div);
  ReactDOM.render(<Counter />, div);
  
  const messageDiv = div.firstChild.querySelector('div');
  const buttons = div.querySelectorAll('button');
  const decrement = buttons[0];
  const increment = buttons[1];

  expect(messageDiv.textContent).toBe('Current count: 0');
  
  increment.dispatchEvent(new Event("click", { bubbles: true, cancelable: true }));
  expect(messageDiv.textContent).toBe('Current count: 1');

  decrement.dispatchEvent(new Event("click", { bubbles: true, cancelable: true }));
  expect(messageDiv.textContent).toBe('Current count: 0');

  div.remove();
})

/* eslint no-unused-vars:0 */
