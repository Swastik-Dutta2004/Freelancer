import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const notfound = () => {
    return (
        <div className='h-screen items-center justify-center flex flex-col'>
            <Image src="/images/404.svg"
                alt='404.image'
                height={500} width={500} />
            <Link href="/">
                <Button>Click</Button>
            </Link>
        </div>
    )
}

export default notfound    