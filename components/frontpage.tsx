"use client"

import { Button } from './ui/button'
import Link from 'next/link'
import { ArrowRight, Briefcase, CheckCircle2, TrendingUp } from 'lucide-react'
import Image from "next/image";
import { useState } from "react";
import FrontFeatures from './front-features';

function Frontpage() {
  const [activeTab, setActiveTab] = useState ("organize")

  return (
   <div className="flex min-h-screen flex-col">

      <main className="flex-1">
        <section className="container mx-auto px-4 py-32">

          <div className="mx-auto max-w-4xl text-center">

            <h1 className="text-black mb-6 text-6xl font-bold "> A smartest way to track your job application</h1>
            <p className="text-muted-foreground mb-10 text-xl">  Organize and manage your job search in one place</p>

            
            <div className="flex flex-col items-center gap-4">

              <Link href="/sign-up" className="cursor-pointer">

                <Button size="lg" className="h-12 px-8 text-lg font-medium cursor-pointer text-white">Start for FREE! <ArrowRight className="ml-2"/> </Button>
              
              </Link>
              

            </div>
          </div>

          

        </section>


      {/* IMAGENS */}
        <section className="border-t bg-white py-16">

          <div className="container mx-auto px-4"> 
            
            <div className="mx-auto max-w-6xl">
              {/* tabs */}
              <div className="flex gap-2 justify-center mb-8">
                <Button onClick={()=> setActiveTab("organize")} className={`rounded-lg px-6 py-3 text-sm font-medium transition-colors ${activeTab === 'organize' ? "bg-primary text-white":"bg-gray-100 text-gray-700 hover:bg-gray-200" }`}>Organize</Button>

                <Button  onClick={()=> setActiveTab("hired")} className={`rounded-lg px-6 py-3 text-sm font-medium transition-colors ${activeTab === 'hired' ? "bg-primary text-white":"bg-gray-100 text-gray-700 hover:bg-gray-200" }`} >Get hired</Button>

                <Button  onClick={()=> setActiveTab("boards")} className={`rounded-lg px-6 py-3 text-sm font-medium transition-colors ${activeTab === 'boards' ? "bg-primary text-white":"bg-gray-100 text-gray-700 hover:bg-gray-200" }`}> Manage Boards</Button>

              </div>

              <div className="relative mx-auto max-w-5xl overflow-hidden rounded-lg border border-gray-200 shadow-xl">
                {/* imagens */}
                {activeTab=== "organize" && (<Image  src="/hero-images/hero1.png" alt="organize" width={1200} height={800}/>)}

                {activeTab=== "hired" && (<Image  src="/hero-images/hero2.png" alt="hired" width={1200} height={800}/>)}

                {activeTab=== "boards" && (<Image  src="/hero-images/hero3.png" alt="boards" width={1200} height={800}/>)}
                
              </div>


            </div>


          </div>


        </section>

        {/*  features */}

        <section className="border-t bg-white py-24">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 md:grid-cols-3">
              <div className="flex flex-col">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-3 text-2xl font-semibold text-black">
                  Organize Applications
                </h3>
                <p className="text-muted-foreground">
                  Create custom boards and columns to track your job
                  applications at every stage of the process.
                </p>
              </div>
              <div className="flex flex-col">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-3 text-2xl font-semibold text-black">
                  Track Progress
                </h3>
                <p className="text-muted-foreground">
                  Monitor your application status from applied to interview to
                  offer with visual Kanban boards.
                </p>
              </div>
              <div className="flex flex-col">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-3 text-2xl font-semibold text-black">
                  Stay Organized
                </h3>
                <p className="text-muted-foreground">
                  Never lose track of an application. Keep all your job search
                  information in one centralized place.
                </p>
              </div>
            </div>
          </div>
        </section>



      </main>

   </div>
  );
}

export default Frontpage
