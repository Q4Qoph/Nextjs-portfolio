// components/contact-section.tsx
"use client"

import React from "react"
import Image from "next/image"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const ContactSection = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()
  
  const onSubmit = (data: any) => {
    // This would normally submit to your form endpoint
    console.log(data)
    // You can integrate with getform.io as in your original code
  }

  return (
    <div id="contact" className="max-w-[1040px] m-auto p-6 py-16">
      <div className="flex flex-col lg:flex-row justify-center py-16 lg:py-12 gap-8 lg:gap-20 animate-fadeIn">
        <div className="hidden lg:block relative w-full max-w-[500px]">
          <Image 
            src="/images/contact-img.svg" 
            alt="Contact illustration" 
            width={500}
            height={400}
          />
        </div>
        <div className="w-full">
          <h1 className="text-foreground font-bold text-3xl lg:text-4xl mb-6">Get In Touch</h1>
          <form
            action="https://getform.io/f/fa4f1c9d-0dee-4c6e-b3b6-3386a33d786a" 
            method="POST"
            encType="multipart/form-data"
            className="flex flex-col mt-8 space-y-4"
          >
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="w-full lg:w-1/2">
                <Input
                  className="bg-background border-border h-12 rounded-2xl"
                  type="text"
                  placeholder="First Name"
                  name="firstName"
                  required
                />
              </div>
              <div className="w-full lg:w-1/2">
                <Input
                  className="bg-background border-border h-12 rounded-2xl"
                  type="text"
                  placeholder="Last Name"
                  name="lastName"
                  required
                />
              </div>
            </div>
            
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="w-full lg:w-1/2">
                <Input
                  className="bg-background border-border h-12 rounded-2xl"
                  type="email"
                  placeholder="Email"
                  name="email"
                  required
                />
              </div>
              <div className="w-full lg:w-1/2">
                <Input
                  className="bg-background border-border h-12 rounded-2xl"
                  type="tel"
                  placeholder="Phone"
                  name="phone"
                />
              </div>
            </div>
            
            <Textarea
              className="bg-background border-border rounded-2xl min-h-[144px] resize-none"
              placeholder="Message"
              name="message"
              required
            />
            
            <div>
              <Button 
                type="submit"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 h-auto rounded-lg font-bold w-32"
              >
                Send
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactSection