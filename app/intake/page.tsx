
'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Intake() {
  const [data, setData] = useState({})
  const router = useRouter()

  return (
    <div className="p-6 max-w-md mx-auto">
      <input placeholder="Debt amount"
        onChange={e => setData({ ...data, amount: e.target.value })} />
      <button
        onClick={() => {
          localStorage.setItem('intake', JSON.stringify(data))
          router.push('/results')
        }}
        className="mt-4 bg-black text-white px-4 py-2"
      >
        Continue
      </button>
    </div>
  )
}
