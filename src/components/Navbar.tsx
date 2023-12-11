'use client'
import Link from 'next/link'
import { useParams, usePathname, useSearchParams, useRouter } from 'next/navigation'
import React from 'react'

export const Navbar = () => {
          
    const pathname = usePathname()
    const params = useParams()
    const route = useRouter()
    const url = useSearchParams()
    console.log(pathname)
    console.log(params)
    console.log(url)
    console.log(route)
  return (
    <div className='fixed w-full p-2 bg-red-900 z-100'>
        <ul role='list' className='flex gap-10'>
            <li><Link href='/'>Home</Link> </li>
            <li className={`${pathname == '/dashboard' ? 'font-bold text-xl': 'font-normal'}`}><Link href='/dashboard'>Dashboard</Link> </li>
            <li className={`${pathname == '/dashboard/settings' ? 'font-bold text-xl': 'font-normal'}`}><Link href='/dashboard/settings'>Settings</Link> </li>
            <li><Link href='/error'>News</Link> </li>
        </ul>
    </div>
  )
}
