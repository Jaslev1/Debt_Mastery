
'use client'
import { useEffect, useState } from 'react'

export default function Results() {
  const [result, setResult] = useState('')

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('intake') || '{}')

    fetch('/api/analyze', {
      method: 'POST',
      body: JSON.stringify(data)
    })
      .then(r => r.json())
      .then(d => setResult(d.result))
  }, [])

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-xl font-bold">Your Plan</h1>
      <pre>{result}</pre>
    </div>
  )
}
