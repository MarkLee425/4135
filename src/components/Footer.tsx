"use client";
import React from 'react'
import { FOOTER } from '@/constants';

const Footer = () => {
  return (
    <div>
      <footer className='flex fixed bottom-2 text-xs ml-3 text-gray-tertiary'>
        {FOOTER}
      </footer>
    </div>
  )
}

export default Footer