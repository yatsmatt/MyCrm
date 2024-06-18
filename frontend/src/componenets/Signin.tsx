import React, { useState } from 'react'

const Signin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  //will be an axios fun here that take mail and pw and will connecte to system
  const singInDisplay =[
    {name:"email",value:formData.email,type:"email"},
    {name:"password",value:formData.password,type:"password"},
  ]
  
  //set a reusable component
  const fieldDisplay=(name,value,type)=>(
  <div className="relative my-4" key={name}>
  <input
    className="block w-72 py-2.5 px-0 text-sm bg-transparent border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-700 peer"
    type={type}
    name={name}
    value={value}
    onChange={handleChange}
  />
  <label
    className="absolute text-sm  duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-6"
    
  >
    {name}
  </label>
</div>
)
const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData({
    ...formData,
    [name]: value
  });
};

const handelSubmit =(e)=>{
  e.preventDefault();
  //here will e axios call
  console.log(formData)
}

  return (
    <div className=''>
      <div className=' h-[100vh] flex justify-center items-center bg-cover'>
      <div className='bg-green-300 border border-slate-300 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 '>
      <form onSubmit={handelSubmit}>
        <div>
        <h1>Sign-in</h1>
      </div>
      {singInDisplay.map((item)=>fieldDisplay(item.name,item.value,item.type))}
      <div>
        <button  className='bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-400' type='submit'>Sing-in</button>
      </div>
      </form>
      </div>
    </div>
    </div>
  )
}

export default Signin