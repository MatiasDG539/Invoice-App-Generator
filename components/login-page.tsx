'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Implement login logic here
    console.log('Login attempt with:', email, password)
    router.push('/dashboard')
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="flex flex-col md:flex-row md:space-x-6">
          {/* Logo Section */}
          <div className="w-full md:w-1/2 bg-primary p-8 flex flex-col items-center justify-center">
            <div className="w-48 h-48 relative mb-4">
              <Image
                src="/placeholder.svg?height=192&width=192"
                alt="Business Logo"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <h1 className="text-2xl font-bold text-white text-center">Your Business Name</h1>
          </div>

          {/* Vertical Divider */}
          <div className="hidden md:block">
            <Separator orientation="vertical" className="h-auto" />
          </div>

          {/* Login Form Section */}
          <div className="w-full md:w-1/2 p-8">
            <Card className="w-full border-none shadow-none">
              <CardHeader>
                <CardTitle>Login</CardTitle>
                <CardDescription>Enter your credentials to access your account</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="name@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">Login</Button>
                </form>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Link href="/restore-password" className="text-sm text-blue-600 hover:underline">
                  Forgot password?
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}