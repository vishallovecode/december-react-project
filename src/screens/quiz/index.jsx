// // Example 1


import { useEffect, useState } from "react"

// function A({ children }) {
//     console.log('A')
//     return children
//   }
//   function B() {
//     console.log('B')
//     return <C/>
//   }
//   function C() {
//     console.log('C')
//     return null
//   }
//   function D() {
//     console.log('D')
//     return null
//   }
// const Quiz =()=>{
//     const [state, setState] = useState(0)
//     useEffect(() => {
//       setState(state => state + 1)
//     }, [])
//     console.log('App')
//     return (
//       <div>
//         <h2>This is quiz page</h2>
//         <A><B/></A>
//         <D/>
//       </div>)
// }

// export default Quiz;


// you need to tell me seuqnce of console.log() value and re-rendering things if there is re-rendering


// example 2

// function A() {
//     console.log('render A')
//     return null
//   }

// const Quiz =()=>{
//     const [_state, setState] = useState(false)
//     console.log('render App')
//     return <div>
//       <button onClick={() => {
//         console.log('click')
//         setState(true)
//       }}>click me</button>
//       <A />
//     </div>
// }

// export default Quiz;


// Befor click 
// afetr 1 click 
// afetr 2 click 
// afetr 3 click 
// afetr 4 click 


// EXample 3


// function A({ children }) {
//     console.log('A')
//     const [state, setState] = useState(0)
//     useEffect(() => {
//       setState(state => state + 1)
//     }, [])
//     return children
//   }
  
//   function B() {
//     console.log('B')
//     return <C/>
//   }
  
//   function C() {
//     console.log('C')
//     return null
//   }
  
//   function D() {
//     console.log('D')
//     return null
//   }
  
// const Quiz =()=>{
//     console.log('App')
//     return (
//       <div>
//         <A><B/></A>
//         <D/>
//       </div>
//     )
// }
// export default Quiz;



// Example 

function Quiz() {
    const [state] = useState(0)
    console.log(1)
    
    const start = Date.now()
    // while (Date.now() - start < 50) {
    //   window.timestamp = Date.now()
    // }

    useEffect(() => {
      console.log(2)
    }, [state])
  
    Promise.resolve().then(() => console.log(3))

    setTimeout(() => console.log(4), 0)
  
    return null
  }
  

  export default Quiz;

  // 1 3 4 2





// preventing the child component we studied one hoc which is called memo
// if you pass the child component as children or return as children (this children child component will not re-render until unless our props get changed)
