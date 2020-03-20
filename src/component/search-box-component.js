import React from 'react';

export const SearchBox = ({ placeholder, onChange }) => (
    <input
        className='search'
        type='search'
        placeholder={placeholder}
        onChange={onChange}
    />
)