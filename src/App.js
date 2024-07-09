// import React from 'react'
// import { useState } from 'react'

// const App = () => {
//   const [city, setCity] = useState("bhopal")
//   let cityHandler=()=>{
//     setCity("Delhi")
//   }
//   return (
//     <div>
//       <h1>{city}</h1>
//       <button onClick={cityHandler}>Change</button>
//     </div>
//   )
// }

// export default App


import React, { useState } from 'react'
import './App.css'

const App = () => {
  const [Count, setCount] = useState(0)
  let add=()=>{
    setCount(Count+1);
    setCount(Count+1);  
    setCount(Count+1);
    setCount(Count+1);
  }
  return (
    <div>
      <h1>Count is: {Count}</h1>
      <button onClick={add}>Add</button>
     
    </div>
  )
}

export default App



















// import React, { useState } from 'react'

// const App = () => {
//   const [Counter, setCounter] = useState(10)
//   const incrementHandler=()=>{
//     setCounter(Counter+1);
//   }
//   const decrementHandler=()=>{
//     if(Counter>0)
//       {
//         setCounter(Counter-1);
//       }
      
    
//   }

//   return (
//     <div>
//       <h1>Chai Aur React</h1>
//       <div>
//         <h2>Counter Value : {Counter}</h2>
//         <button onClick={incrementHandler}>Increament</button>
//         <br/>
//         <button onClick={decrementHandler}>Decrement</button>
//       </div>
//       </div>
//   )
// }

// export default App
































// import React, { useState } from 'react'
// import Tours from './Components/Tours'


// let data=[{
//   id:1,
//   name:"Agra",
//   info:"Agra is a city on the banks of the Yamuna river in the Indian state of Uttar Pradesh, about 230 kilometres (140 mi) south-east of the national capital Delhi and 330 km west of the state capital Lucknow. With a population of roughly 1.6 million, Agra is the fourth-most populous city in Uttar Pradesh and twenty-third  ",
//   image:"https://images.unsplash.com/photo-1506462945848-ac8ea6f609cc?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGFqbWFoYWx8ZW58MHx8MHx8fDA%3D",
//   price:"35,758"
// }, {   id:2,
//     name:"Jaipur",
//     info:"Agra is a city on the banks of the Yamuna river in the Indian state of Uttar Pradesh, about 230 kilometres (140 mi) south-east of the national capital Delhi and 330 km west of the state capital Lucknow. With a population of roughly 1.6 million, Agra is the fourth-most populous city in Uttar Pradesh and twenty-third  ",
//     image:"https://images.unsplash.com/photo-1506462945848-ac8ea6f609cc?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGFqbWFoYWx8ZW58MHx8MHx8fDA%3D",
//     price:"35,758"
//    },
//    {id:3,
//     name:"Goa",
//     info:"Agra is a city on the banks of the Yamuna river in the Indian state of Uttar Pradesh, about 230 kilometres (140 mi) south-east of the national capital Delhi and 330 km west of the state capital Lucknow. With a population of roughly 1.6 million, Agra is the fourth-most populous city in Uttar Pradesh and twenty-third  ",
//     image:"https://images.unsplash.com/photo-1506462945848-ac8ea6f609cc?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGFqbWFoYWx8ZW58MHx8MHx8fDA%3D",
//     price:"35,758"},
//     {id:4,
//     name:"Agra",
//     info:"Agra is a city on the banks of the Yamuna river in the Indian state of Uttar Pradesh, about 230 kilometres (140 mi) south-east of the national capital Delhi and 330 km west of the state capital Lucknow. With a population of roughly 1.6 million, Agra is the fourth-most populous city in Uttar Pradesh and twenty-third  ",
//     image:"https://images.unsplash.com/photo-1506462945848-ac8ea6f609cc?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGFqbWFoYWx8ZW58MHx8MHx8fDA%3D",
//     price:"35,758"},
//     {id:5,
//     name:"Agra",
//     info:"Agra is a city on the banks of the Yamuna river in the Indian state of Uttar Pradesh, about 230 kilometres (140 mi) south-east of the national capital Delhi and 330 km west of the state capital Lucknow. With a population of roughly 1.6 million, Agra is the fourth-most populous city in Uttar Pradesh and twenty-third  ",
//     image:"https://images.unsplash.com/photo-1506462945848-ac8ea6f609cc?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGFqbWFoYWx8ZW58MHx8MHx8fDA%3D",
//     price:"35,758"
// },
//     {
//     id:6,
//     name:"Agra",
//     info:"Agra is a city on the banks of the Yamuna river in the Indian state of Uttar Pradesh, about 230 kilometres (140 mi) south-east of the national capital Delhi and 330 km west of the state capital Lucknow. With a population of roughly 1.6 million, Agra is the fourth-most populous city in Uttar Pradesh and twenty-third  ",
//     image:"https://images.unsplash.com/photo-1506462945848-ac8ea6f609cc?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGFqbWFoYWx8ZW58MHx8MHx8fDA%3D",
//     price:"35,758"
// },
//     {id:7,
//     name:"Agra",
//     info:"Agra is a city on the banks of the Yamuna river in the Indian state of Uttar Pradesh, about 230 kilometres (140 mi) south-east of the national capital Delhi and 330 km west of the state capital Lucknow. With a population of roughly 1.6 million, Agra is the fourth-most populous city in Uttar Pradesh and twenty-third  ",
//     image:"https://images.unsplash.com/photo-1506462945848-ac8ea6f609cc?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGFqbWFoYWx8ZW58MHx8MHx8fDA%3D",
//     price:"35,758"
// }
// ]

// const App = () => {
 
//   const [tours, setTours] = useState(data)
//   console.log(tours);
//   function removeTour(id)
//   {
//     const newTours=tours.filter(tour =>tour.id!==id)
//     setTours(newTours);
//   }
//   if(tours.length===0)
//     {
//       return (
//         <div className='refresh'>
//           <h2>No Tours Left</h2>
//           <button onClick={()=>{
//             setTours(data)
//           }}>Refresh</button>
//         </div>
//       )
//     }
//   return (
//     <div> <Tours tours={tours} removeTour={removeTour}></Tours>
//     </div>
  

//   )
// }

// export default App





















// Increment Decrement projcet "use clinet"
// import React, { useState } from 'react'
// import './App.css'
// const Project = () => {
// let [Count, setCount] = useState(0)

//   const decrementHandler=()=>{
    
//        setCount(Count-1);
//   }
//   const incrementHandler=()=>{
         
//            setCount(Count+1);
//   }
//   const reset=()=>{
//     Count=0;
//     setCount(0);
//   }
//   return (
//     <div className='wrapper'>
//       <div className='heading'>Increament & Decrement</div>
//       <div className='task'>
//         <button onClick={decrementHandler} className='btn'>-</button>
//         <div className='input'>{Count}</div>
//         <button onClick={incrementHandler} className='btn'>+</button>
//       </div>
//       <button onClick={reset} className='reset'>Reset</button>
//     </div>
//   )
// }

// export default Project




























// "use client"
// import React, { useState } from 'react'
// import axios from 'axios'
// import './App.css'
// const App = () => {
//   const [Images, setImages] = useState([])
//   const getImages= async()=>
//   {
// try{
//   const respones=await axios.get("https://picsum.photos/v2/list")
//   const data=(respones.data);
//   setImages(data);
//   console.log(Images);
// } catch(error)
// {
//   console.error("Error fetching images");
// }

//   }
  
//   return (
//     <div>
//       <button onClick={getImages} className='img-btn'>Get Images</button>
//       <div > 
//         {
//           Images.map((elem,i)=>{
//             return(
//               <img className="box" key={i} src={elem.download_url}/>
            
//             )
            
//           })
//         }
       
//       </div>
//     </div>
//   )
// }

// export default App








// import React from 'react'

// const App = () => {
//   return (
   
//     <div>
//         <a href='/About'>About</a>
         
//          <a href='/Products'>Products</a>
//          <a href='/Courses'>Courses</a>
         
//     </div>
//   )
// }

// export default App











//how to use promps in child class
// "use client"
// import React, { useState } from 'react'
// import Header from './Components/Header'

// const App = () => {
   
//    const [User, setUser] = useState("Anshul")

//   return (
//     <div>
//   <Header user={User}></Header>
//   <div>My name is {User}</div>

  
//     </div>
//   )
// }

// export default App


























// // import Item from './componentss/Item';
// // import ItemDate from './componentss/ItemDate';
// // import ProductDate from './componentss/ProductDate';
// //   const response=[
// //     {
// //       itemName:"Nirma",
// //       itemDate:20,
// //       itemMonth:"june",
// //       itemYear:1998

// //     },
// //     {
// //       itemName:"surfExcel",
// //       itemDate:22,
// //       itemMonth:"july",
// //       itemYear:2000

// //     },
// //    
