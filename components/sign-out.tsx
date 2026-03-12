"use client"
import React from 'react'
import { DropdownMenuItem } from './ui/dropdown-menu'
import { signIn, signOut } from '@/lib/auth/auth-client'
import { useRouter } from 'next/navigation'

function SignOutButton() {
    const router = useRouter()
  return (
    <>
     <DropdownMenuItem className='text-2xl leading-none text-muted-foreground font-bold' onClick={ async() => { const result = await signOut()
        if(result.data){
            router.push('/sign-in')
        }else{ alert('Error signing out')}
     }
    }>

        Logout

    </DropdownMenuItem>
    </>
  )
}

export default SignOutButton
