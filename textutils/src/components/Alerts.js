//rfce react based function component
import React from 'react'

function Alerts(props) {
    const capitalize = (word)=>
    {
      const lower = word.toLowerCase();
      return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
    <div>
      {props.alert && (
      <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
      {/* && jab b use krte ho toh sabse phle aage ki chiz evaluate hogi
      or agr ye true ho gyi toh aage nhi hoga kuch b
      if props.alert is null do this else not*/}
      <strong>{capitalize(props.alert.type)}</strong>:{props.alert.msg}
    </div>)}
    </div>
  )
}

export default Alerts
