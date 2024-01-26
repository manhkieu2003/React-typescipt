import { useEffect, useState } from 'react'
import './App.css'
import { ProductType } from './Type/ProductType'
import axios from 'axios'


function App() {
  
    
    const[count,setCount]=useState<number>(0)
    const [ products,setProducts]=useState<ProductType[]>([])
    // dùng fetch
  // useEffect( ()=>{
  //     const GetProduct = async()=>{
  //         const response = await fetch('http://localhost:3000/products')
  //        const data = await response.json()
  //        setProducts(data)

         
  //     }
  //     GetProduct()
  //   },[])
    // dùng axios
    useEffect(()=>{
      const GetProduct = async ()=>{
        const {data} = await axios.get('http://localhost:3000/products')
         console.log(data)
        setProducts(data)


      }
      GetProduct()
      
    },[])

    
    
   
  return (
    <> 
     <div>{count}</div>
     <button onClick={()=>setCount(count+1)}>Increase</button>
    <div>{products.map((item,index) =>item.name)}</div>
      
    </>
  )
}

export default App
