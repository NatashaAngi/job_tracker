"use client"
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { signIn, signUp } from '@/lib/auth/auth-client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

function SignIn() {

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
        const result = await signIn.email({
          email,password
        })


      if(result.error){
        setError(result.error.message??"failed to sign ip")
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


          <CardTitle className="text-2xl font-bold text-black"> Sign Up</CardTitle>

          <CardDescription className="text-gray-600">Create an account to start tracking your job applications</CardDescription>


        </CardHeader>



        <form onSubmit={handleSubmit}  className="space-y-4">
          <CardContent className="space-y-4">

              { error && (<div  className="rounded-md bg-destructive/15 p-3 text-sm text-destructive">
              {error}
            </div>)}

            
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
              required minLength={8}  
               value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border-gray-300 focus:border-primary focus:ring-primary"/>

            </div>

          </CardContent>

          <CardFooter className="flex flex-col space-y-4">

            <Button disabled={loading} type='submit' className="w-full bg-primary hover:bg-primary/90">{loading? "Signing in..." : "Sign in"}</Button>

            <p className="text-center text-sm text-gray-600"> Don&apos;t have an account? 

              <Link href="/get-started" className="font-medium text-primary hover:underline"> Get started </Link>
              
              </p>

          </CardFooter>


        </form>


      </Card>

    </div>
  )
}

export default SignIn
