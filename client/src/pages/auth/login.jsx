import CommonForm from '@/components/common/form';
import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { loginFormControls} from '@/config';

const initialState = {

  email:"",
  password: "",
}

const AuthLogin = () => {
  const [formData, setFormData] = useState(initialState);

  function onSubmit() {
    
  }
  return (
   <>
   
   <div className="w-full mx-auto max-w-md space-y-6">
    <div className="text-center">
      <h1 className='text-3xl font-bold tracking-tighter text-foreground '>Sign in to your account</h1>
      <p className="mt-2">
        dont have an account
        <Link 
          className='font-medium text-primary hover:underline px-3'
          to="/auth/register"
        > Register
        </Link>
      </p>
    </div>

    <CommonForm
      
      formControls={loginFormControls}
      buttonText={"Sign In"}
      formData={formData}
      setformData={setFormData}
      onSubmit={onSubmit}


    />
   </div>
   
   </>
  )
}

export default AuthLogin