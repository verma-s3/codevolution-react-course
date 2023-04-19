import React from 'react'

const Count1 = ({text, count}) => {
  return (
    <div>
        {text} - {count}
    </div>
  )
}

export default React.memo(Count1)