import React from 'react';

export default function FooterC() {
  return (
    <footer style={{height: '112px', marginTop: '101px'}} className='text-center text-lg-left bg-dark'>
      <div className='text-center p-3'>
        <p className='text-light'>
          ComplaintCare
        </p>
        <p className='text-light'>&copy; {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}