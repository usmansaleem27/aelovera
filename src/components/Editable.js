import React, { useState } from 'react'

const Editable = () => {
    const [user, setUser] = useState(false);

  const toggleClass = () => {
    setUser(!user);
  };
  return (
    <div>
      <p 
      contentEditable={user ?   true  : false }
      className=""
      >This is a paragraph. It is editable. Try to change this text.</p>
      <button type="button" className='btn btn-primary' onClick={ toggleClass }>Change Text On Click</button>
    </div>
  )
}

export default Editable
