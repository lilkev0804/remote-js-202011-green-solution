import React from 'react'
import './Solutions.css'
import CardsList from './CardsList'

class Solutions extends React.Component {
   
    render() {
    return (
      <div>
        <div className="solutions-title">
          <h1>Comment réduire mon empreinte ?</h1>
        </div>
        <CardsList />
      </div>
    )
    };
  }

  export default Solutions;