
import React from "react"
import {useForm} from "react-hook-form"
import { useNavigate } from "react-router-dom";

const IndexPage = () => {
  
    const [formStep, setFormStep] = React.useState(0);    
   


    const {watch,register,handleSubmit,formState:{errors,isValid}} = useForm({mode:"all"})

    let navigate = useNavigate();

   
        

    

    const completeFormStep =()=> {
        setFormStep (cur => cur + 1)
    }

    const renderButton =() => {
        if (formStep > 2) {
            return undefined
        }else if(formStep===2){
          return <p>Proceed to home Page</p>
        }
        else{
            return (
             <button
             disabled={!isValid}
            onClick={completeFormStep}
              type="button"
              
            >
              Next
            </button>
            )
        }
    }

    const submitForm = ( value)=>{
     
      navigate('/Home')

    }

    
  return (
    <div >
      <div
       
        
      ></div>
      <div >
        <h1 >
          Welcome to Pokedex
        </h1>
        <p >
          {}
          Login in 3 easy steps
        </p>
      </div>
      <div >
        <div >
          <form onSubmit={handleSubmit(submitForm)}>
            {/* first section */}
            {formStep>=0 && (
            <section style={formStep ===0 ? {display:"block"} : {display: "none"}}>

              



            <h2 >
              Personal Information
            </h2>
            <div>
            <label htmlFor="name">Name</label>
            <input
            
              type="text"
              id="name"
              
              
              {...register("name",{required:{
                value:true,
                message:"please enter your Name"
              }})}
            />
            <p style={{color:"red"}}>{errors.name?.message}</p>
            </div>
            .
              <div>
            
            <label htmlFor="lastName">Last Name</label>
            
            <input
            
              type="text"
              id="lastName"
              name="lastName"
              className="text-input"
              {...register("Last Name",{required:{
                value:true,
                message:"please enter your last name"
              }})}
            />
            <p style={{color:"red"}}>{errors.lastName?.message}</p>
            
            </div>
             </section>)}


             {/* second section */}

             {formStep>=1 && (
             <section style={formStep ===1? {display:"block"} : {display: "none"}}>
              <div>
            <h2 c>Password</h2>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="text-input"
              {...register("Password",{required:{
                value:true,
                message:"please enter your password"
              }})}
            />
            <p style={{color:"red"}}>{errors.password?.message}</p>
            </div>
            .
              <div>
            
            <label htmlFor="confirmPassword">Confirm password</label>
            
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className="text-input"
              {...register("Confirm Password",{required:{
                value:true,
                message:"please confirm your password"
              }})}
            />
            <p style={{color:"red"}}>{errors.confirmPassword?.message}</p>
            
            </div>
            </section>)}

                {/* third section */}


                {formStep===2 && (
                <section style={formStep ===2 ? {display:"block"} : {display: "none"}}>
            <h2 >Confirm</h2>
            <div >
              <input
                name="toc"
                
                type="checkbox"
                {...register("Last Name",{required:
                 true
                })}
              />
              <span>
                I accept the{" "}
                <a  href="/">
                  Terms of Service
                </a>
                .
              </span>
            </div>
           
            .
             
               <button
               onClick={handleSubmit(submitForm)}
               disabled={!isValid}
                 >  
  
                Login
              
              

            </button>
            </section>)}
            {renderButton()}

                
                <pre>
                    {JSON.stringify(watch(),null,2)}
                </pre>
            
          </form>
        </div>
      </div>
    </div>
  )
}

export default IndexPage