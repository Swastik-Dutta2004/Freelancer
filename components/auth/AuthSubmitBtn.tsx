import React from 'react'
import { useFormStatus } from 'react-dom'
import { Button } from '../ui/button'

export default function AuthSubmitBtn() {
    const {pending} = useFormStatus()
  return (
    <div>
        <Button className='w-full' type='submit' disabled= {pending}>{pending ? "Processing": "Submit"}</Button>
    </div>
  )
}

