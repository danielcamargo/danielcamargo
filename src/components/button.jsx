'use client';

import React, { useEffect } from 'react';

export function Button({ children }) {
    useEffect(() => {
        console.log('Button component mounted');
    }, []);
    
    return <button
    type="button"
    className="rounded-full 
    bg-indigo-600 px-3 py-1.5 
    text-sm font-semibold text-white shadow-sm 
    hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 
    focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
  >
    Button text
  </button>;
}
