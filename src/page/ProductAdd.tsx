import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import { ProductType } from '../Type/ProductType'
import { useNavigate } from 'react-router-dom'

type ProductAddProps = {
  onAdd:(product:ProductType)=>void
}
type Inputs = {
  name: string
  price: number
}

const ProductAdd = (props: ProductAddProps) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()
  const Navigate=useNavigate()
  const onSubmits:SubmitHandler<Inputs> =(data)=>{
    props.onAdd(data)
     Navigate('/amin/product') // dùng hook useNavigate để chuyển trang nhiệm vụ giống thằng window.location
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmits)}>
        <input type='text' {...register('name',{required:true,minLength:5})}></input>
         {errors.name && errors.name.type==='required'&&<span>Required</span>}
         {errors.name && errors.name.type==='minLength'&&<span>Minlength</span>}
        <input type='number' {...register('price')}></input>
        <button>Add</button>
      </form>
    </div>
  )
}

export default ProductAdd