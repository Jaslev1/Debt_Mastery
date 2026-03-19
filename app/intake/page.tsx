
'use client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function Intake() {
  const [amount, setAmount] = useState('')
  const router = useRouter()

  return (
    <div style={{padding:20}}>
      <input placeholder="Debt amount" onChange={e=>setAmount(e.target.value)} />
      <button onClick={()=>{
        localStorage.setItem('amount', amount)
        router.push('/results')
      }}>Continue</button>
    </div>
  )
}
