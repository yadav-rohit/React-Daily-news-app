import React, { Component } from 'react'
import loading from './loading.gif'

 const Spiner = () =>  {
        return (
            <div className='text-center'>
                <img className="my-3" src={loading} alt='loading'/>
            </div>
        )
    
}

export default Spiner
