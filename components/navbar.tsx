import { Briefcase, Ghost } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

function NavBar() {
  return (
 
 
        <nav className='border-b border-gray-200'>

            <div className='container mx-auto flex h-16 items-center px-4 gap-4 justify-between'>

            <Link href='/' className='flex items-center gap-3 text-xl font-semibold text-primary'>
                <Briefcase/>
                Job Tracker

            </Link>  

            <div className=' flex items-center gap-4'>
                <Link href="/sign-in" >
                
                <Button variant = "ghost" className='text-gray-700 hover:text-black px-3 py-2 text-lg border-gray-200'> Login </Button>

                </Link>




                <Link href="/sign-up">
                
                <Button className='bg-primary hover:bg-primary/70 hover:text-black text-lg'>Logout</Button>
                

                </Link>
            </div>


            </div>
        </nav>

  )
}

export default NavBar
