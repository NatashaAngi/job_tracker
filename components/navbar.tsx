import { Briefcase, Ghost } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { getSession } from '@/lib/auth/auth'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from './ui/dropdown-menu'
import { Avatar, AvatarFallback } from './ui/avatar'
import { signOut } from '@/lib/auth/auth'
import SignOutButton from './sign-out'

async function NavBar() {

    const session = await getSession()

  return (
 
 
        <nav className='border-b border-gray-200'>

            <div className='container mx-auto flex h-16 items-center px-4 gap-4 justify-between'>

            <Link href='/' className='flex items-center gap-3 text-xl font-semibold text-primary'>
                <Briefcase/>
                Job Tracker

            </Link>  

            <div className=' flex items-center gap-4'>


                {session?.user?(
                
            <>

                 <Link href="/dashboard">
                <Button
                  variant="ghost"
                  className="text-gray-700 hover:text-black"
                >
                  Dashboard
                </Button>


              </Link>

              <DropdownMenu>

                    <DropdownMenuTrigger>
                        <Button variant="ghost">
                            <Avatar>
                                <AvatarFallback className='bg-primary text-white'>
                                    {session.user.name[0].toUpperCase()}
                                </AvatarFallback>
                            </Avatar>
                        </Button>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent>
                        <DropdownMenuLabel>
                            <div>
                                <p>{session.user.name}</p>
                                <p>{session.user.email}</p>
                            </div>

                        </DropdownMenuLabel>

                        <SignOutButton></SignOutButton>
                   
                    </DropdownMenuContent>

              </DropdownMenu>
                
                
                </>):(
                    <>
                    
                    <Link href="/sign-up">
                
                <Button className='bg-primary hover:bg-primary/70 hover:text-black text-lg'>Login</Button>
                

                </Link>



                <Link href="/sign-in" >
                
                <Button variant = "ghost" className='text-gray-700 hover:text-black px-3 py-2 text-lg border-gray-200'> Get started </Button>

                </Link>
                    
                    
                    </>
                )}

        
            </div>

    
            </div>
        </nav>

  )
}

export default NavBar
