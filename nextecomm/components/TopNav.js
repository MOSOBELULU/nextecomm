"use client"
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

export default function TopNav() {
    const {data, status
     } = useSession()
     //console.log(data, status)

    return (
        <nav className="nav shadow p-2 justify-content-between mb-3">
            <Link href='/' className="nav-link">  ecomm</Link>
            <Link href='/shop' className="nav-link d-flex ">🛒Shop</Link>
     

            {status === "authenticated" ? (
                <>
                <Link href='/dashboard/user' className='nav-link'>
                {data?.user?.name}
                </Link>
                <a className='nav-link pointer' onClick={() => signOut({callbackUrl: "/login"})}>
                Logout
                </a>
                </>
            ) : status === 'loading' ? (
                <a className="nav-link text-danger d-flex align-items-center">
                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                Loading...
            </a>
            
            ) : (
                <div className='d-flex'> 
                 <Link href='/login' className='nav-link'>
                Login
                </Link>
                <Link href='/register' className='nav-link'>
                Register
                </Link>
            </div>
            )}

           
        </nav>
    )
}