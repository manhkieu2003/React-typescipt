import React from 'react'
import { ProductType } from '../Type/ProductType'

type ManaProducttype = {
    data:ProductType[]
}

const Managerproduct = (props: ManaProducttype) => {
    console.log("props",props)
  return (
    <div>
        <table>
       <thead>
         <tr>
          <th>#</th>
          <th>Name</th>
         </tr>
          
       </thead>
       <tbody>
         {props.data && props.data.map((item,index)=>{
               return(
                <tr key={index}>
                    <td>{index+1}</td>
                    <td>{item.name}</td>
                    
                    <td>
                       {/* <button onClick={()=> HanleRemove(item.id)}>Remove</button> */}
                    </td>
                </tr>
               )
         })}
       </tbody>
     </table> 
    </div>
  )
}

export default Managerproduct