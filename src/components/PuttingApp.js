import React from 'react';
import Counter from './Counter';

export default class PuttingApp extends React.Component {
    render() {  
        return (
          <div>
            <Counter />
            <Counter />
            <Counter />
            <Counter />
            <Counter />
          </div>
        );
      }
}