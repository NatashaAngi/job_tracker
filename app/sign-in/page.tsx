"use client"
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Link from 'next/link'
import React, { useState } from 'react'
import {signUp} from '@/lib/auth/auth-client'
import { useRouter } from 'next/navigation'

function SignIn() {

    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const [error,setError] = useState("")
    const[loading,setLoading] = useState(false)

    const router = useRouter()

    async function handleSubmit(e:React.FormEvent) {

      e.preventDefault();

      setError('')
      setLoading(true)

      try{
        const result = await signUp.email({
          name,email,password
        })


      if(result.error){
        setError(result.error.message??"failed to sign up")
      }
      else{ router.push("/dashboard")}
      }catch(err){

        setError("An unexpected error occurred")

      } finally{
        setLoading(false)
      }
      
    }

  return (
    <div className='flex min-h-[calc(100vh-4rem)] items-center justify-center bg-white p-4'>
      <Card className="w-full max-w-md border-gray-200 shadow-lg">
        <CardHeader  className="space-y-1">


          <CardTitle className="text-2xl font-bold text-black"> Get started </CardTitle>

          <CardDescription className="text-gray-600"> Create your account </CardDescription>


        </CardHeader>



        <form className="space-y-4" onSubmit={handleSubmit}>
          <CardContent className="space-y-4">

            { error && (<div  className="rounded-md bg-destructive/15 p-3 text-sm text-destructive">
              {error}
            </div>)}


            <div className="space-y-2">

              <Label  htmlFor="name" className="text-gray-700">Name</Label>
              <Input 
              id = "name" 
              type='text' 
              placeholder='name' 
              required 
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border-gray-300 focus:border-primary focus:ring-primary"/>

            </div>

            
            <div className="space-y-2">

              <Label htmlFor='email' className="text-gray-700">Email</Label>
              <Input 
              id = "email" 
              type='email' 
              placeholder='email' 
              required  
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-gray-300 focus:border-primary focus:ring-primary"/>

            </div>


            
            <div className="space-y-2">

              <Label htmlFor='password' className="text-gray-700">Password</Label>
              <Input 
              id = "password" 
              type='password' 
              placeholder='password' 
              required 
              minLength={8} 
              value={password}
              onChange={(e) => setPassword(e.target.value)} 
              className="border-gray-300 focus:border-primary focus:ring-primary"/>

            </div>

          </CardContent>

          <CardFooter className="flex flex-col space-y-4">

            <Button disabled={loading} type='submit' className="w-full bg-primary hover:bg-primary/90">{loading ? "Creating account..." : "Create"} </Button>

            <p className="text-center text-sm text-gray-600">Already have an account? 

              <Link href="/login" className="font-medium text-primary hover:underline"> Login </Link>
              
              </p>

          </CardFooter>


        </form>


      </Card>

    </div>
  )
}

export default SignIn
