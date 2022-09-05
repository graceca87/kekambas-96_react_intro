import React from 'react'

export default function AlertMessage(props) {
  return (
    <div className = {`alert alert-${props.category} alert-dismissible fade show`}>
        <strong>{props.message}</strong>
        {/* change the color of your alert flash depending on the state change */}
        <button type='button' className= 'btn-close' onClick={() => props.flashMessage(null, null)}></button>
        {/* above set up the onClick to close out the flash message. We dont want it to immediately call the flashMessage function but we want it to call a function that will trigger the function. We don't want the return valye of onClick which is null null*/}
    </div>

  )
}
