import React from 'react';
import './RealityCheck.css';

const RealityCheck = () => {
  return (
    <section id='reality-check-sec'>
      <h1>Reality Check</h1>
      <p>Maybe the most important aspect of Lucid Dream is actually questioning your reality while you're dreaming. That's where reality checks come in! You make it a muscle memory to question the reality around you and once you do it in a dream, you will know you're dreaming. The best way to do this is periodically throughout the day, this feature will send you a notification every hour until a certain time (you can change those settings below).</p>
      <div>
        <form className='reality-check-form' onSubmit={e => e.preventDefault()}>
          <label htmlFor='time'>How often:</label>
          <input 
            id='time' 
            type='number' 
            step='.1'
          />
          <select>
            <option value='hours'>Hour(s)</option>
            <option value='minutes'>Minute(s)</option>
          </select>
          <button type='submit'>+ Create Reality Check</button>
        </form>
      </div>
    </section>
  )
}

export default RealityCheck