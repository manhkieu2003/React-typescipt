import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form"

type ProductAddProps = {}
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
  const onSubmits:SubmitHandler<Inputs> =(data)=>console.log(data)

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