import React, { useState } from 'react'

// export default class Main extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {

//     }
//   }

//   render() {
//     return (
//       <div>123</div>
//     )
//   }
// }

export default function Main() {
  const [num, setNum] = useState(0)

  function add() {
    setNum(num + 1)
  }
  return (
    <div>
      {num}
      <button onClick={() => add()} type="button">add</button>
    </div>
  )
}
