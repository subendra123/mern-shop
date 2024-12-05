import CommonForm from '@/components/common/form';
import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { registerFormControls } from '@/config';

const initialState = {
  userName:"",
  email:"",
  password: "",
}

const AuthRegister = () => {
  const [formData, setFormData] = useState(initialState);

  function onSubmit() {
    
  }
  return (
   <>
   
   <div className="w-full mx-auto max-w-md space-y-6">
    <div className="text-center">
      <h1 className='text-3xl font-bold tracking-tighter text-foreground '>Create new account</h1>
      <p className="mt-2">
        Already have an account
        <Link 
          className='font-medium text-primary hover:underline px-3'
          to="/auth/login"
        > Login
        </Link>
      </p>
    </div>

    <CommonForm
      
      formControls={registerFormControls}
      buttonText={"Sign Up"}
      formData={formData}
      setformData={setFormData}
      onSubmit={onSubmit}


    />
   </div>
   
   </>
  )
}

export default AuthRegister