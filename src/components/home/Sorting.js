import React from 'react'

function Sorting() {
  return (
    <div className='bg-secondary mt-5 p-4 text-end'>
        <select className='sorting' name='' id=''>
            <option value="">SEÇİNİZ</option>
            <option value="inc">Artan</option>
            <option value="dec">Azalan</option>
        </select>
    </div>
  )
}

export default Sorting