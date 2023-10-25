import React from 'react'

function Sorting({setSort}) {
  return (
    <div className='bg-secondary mt-5 p-4 text-end'>
        <select onChange={e => setSort(e.target.value)} className='sorting' name='' id=''>
            <option value="">SEÇİNİZ</option>
            <option value="inc">Artan</option>
            <option value="dec">Azalan</option>
        </select>
    </div>
  )
}

export default Sorting