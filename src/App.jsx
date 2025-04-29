import { RouterProvider } from 'react-router'
import './App.css'
import "react-day-picker/style.css";
import router from './Routes/Router'


function App() {
  
  return (
   <div className='max-w-[1440px] mx-auto mt-20'>
    <RouterProvider router={router}></RouterProvider>
   </div>
  )
}

export default App
