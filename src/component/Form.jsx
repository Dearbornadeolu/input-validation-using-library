import React from 'react'
import{ useForm } from "react-hook-form"

function Form() {
    const {register, formState: {errors}, handleSubmit,} = useForm()
    const onSubmit = (data)=> console.log(data)
  return (
    <form >
        <div>
            <h1>Registration</h1>
        </div>
        <div>
            <label>
                name
            </label>
            <input type="text" placeholder='Name' {...register("name", {required: true})}/>
            <div>
                {errors.name?.type ===  "required" && "Name is required"}
            </div>
        </div>
        <div>
            <label>
                Email
            </label>
            <input
            placeholder="Enter primary email"
            {...register("email", {
              required: true,
              pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
            })}
          />
            <div>
                {errors.email?.type ===  "required" && "email is required"}
                {errors.email?.type === "pattern" &&
              "Entered email is in wrong format"}
            </div>
        </div>
        <div>
            <label>
                Paswword
            </label>
            <input
            placeholder="Enter password"
            {...register("password", {
              required: true,
              minLength: 5,
              maxLength: 20,
            })}
          />
          <div>
            {errors.password?.type === "minLength" &&
              "Entered password is less than 5 characters"}
            {errors.password?.type === "maxLength" &&
              "Entered password is more than 20 characters"}
          </div>
        </div>

        <div>
            <label>
                number
            </label>
            <input type="number" placeholder='number'/>
        </div>
        <input type="submit" value="submit" onClick={handleSubmit(onSubmit)}/>
    </form>
  )
}

export default Form