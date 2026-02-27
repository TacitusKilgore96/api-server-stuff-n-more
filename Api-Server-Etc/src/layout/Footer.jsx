import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className='flex justify-evenly'>
        <div>
            <ul>
                <li>Landbrug</li>
                <li>Mekanik</li>
                <li>Flextape</li>
            </ul>
        </div>
        <div>
            <h2>Company Logo right here</h2>
            <img src="/companylogo.png" alt="" className='w-20' />
        </div>

        <div className='grid flex-col'>
            <a href="#">Facebook</a>
            <a href="#">Twitter</a>
            <a href="#">TikTok</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
