import React from 'react'

export const SearchBox = ({ searchfield, searchChange}) => {
  return (
      <div className='pa2'>
            <input 
            className='ba bw2 b--lightest-blue br-pill' 
            type='search'
             placeholder='Search Robots'
             onChange={searchChange}
             />
      </div> 
  );
}
