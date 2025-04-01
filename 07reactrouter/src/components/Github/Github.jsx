import React, { useEffect, useState } from 'react'

function Github() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('http://api.github.com/users/hiteshchoudhary')
        .then(response  => response.json())
        .then(data => {
            console.log(data);
        })

    }, [])
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl '>
        Github followers:
    </div>
  )
}

export default Github
