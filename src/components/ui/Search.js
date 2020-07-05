import React, { useState } from 'react'

function Search({ getQuery }) {
    const onChange = (q) =>{
            setText(q);
            getQuery(q);
    }

    const [text, setText] =useState('');
    return (
        <section className='search'>
            <form>
                <input
                 type='text' 
                 className='form-control'
                 placeholder='Search characters'
                 autoFocus
                 onChange={(e)=>onChange(e.target.value)}
                 value={text}
                 />
            </form>
        </section>
    )
}

export default Search
