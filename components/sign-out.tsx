"use client"
import React from 'react'
import { DropdownMenuItem } from './ui/dropdown-menu'
import { signOut } from '@/lib/auth/auth'

function SignOutButton() {
  return (
    <>
     <DropdownMenuItem onClick={async () => await signOut}>

        Logout

    </DropdownMenuItem>
    </>
  )
}

export default SignOutButton
