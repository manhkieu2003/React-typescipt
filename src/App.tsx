import { useEffect, useState } from 'react'
import { ProductType } from './Type/ProductType'
import axios, { Axios } from 'axios'


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
   
    // xóa một item trong api
    const HanleRemove = (id:number)=>{
       // call api
       // cách 1 không cần await
       axios.delete('http://localhost:3000/products/'+id)
      // console.log(id)
      const newProducts= products.filter(item=>item.id !==id) // dùng cái này cũng xóa dc 
       setProducts(newProducts)
      // const RemoveItem =async ()=>{
      //      await axios.delete('http://localhost:3000/products/'+id)
      // }
      // RemoveItem()
                       // nếu muốn xóa thì cần phải chạy lại server db.json
    } 

    
    
   
  return (
    <> 
     <div>{count}</div>
     <button onClick={()=>setCount(count+1)}>Increase</button>
     <table>
       <thead>
          <th>#</th>
          <th>Name</th>
          
       </thead>
       <tbody>
         {products.map((item,index)=>{
               return(
                <tr key={index}>
                    <td>{index+1}</td>
                    <td>{item.name}</td>
                    
                    <td>
                       <button onClick={()=> HanleRemove(item.id)}>Remove</button>
                    </td>
                </tr>
               )
         })}
       </tbody>
     </table>
      
    </>
  )
}

export default App
