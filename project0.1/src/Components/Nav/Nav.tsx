import React from 'react'
import Link from 'next/link'
const Nav = () => {
  return (
    <div> <header className='text-2xl text-bold gap-5 py-5 px-5 bg-red-600'>
        <Link href="/">home </Link>
        <Link href="/name">name </Link>
        <Link href="/name/addres">addres </Link>
        <Link href="/name/addres/about">about </Link>
        </header>
    </div>
  )
}

export default Nav