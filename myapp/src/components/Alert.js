import React from 'react'

function Alert(props) {
    // const mystyle({
    //     backgroundColor:"#D6FFD3",
    //     color : "#5ED63A"
    // })
  return (
 
    <div style={{height:'60px'}}>
    {    props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{props.alert.type}</strong> {props.alert.msg}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>}
      </div>
  )
}

export default Alert