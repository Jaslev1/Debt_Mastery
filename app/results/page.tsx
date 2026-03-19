
'use client'
import { useEffect, useState } from 'react'

export default function Results() {
  const [data,setData]=useState('Loading...')

  useEffect(()=>{
    const amount = localStorage.getItem('amount')

    fetch('/api/analyze',{
      method:'POST',
      body:JSON.stringify({amount})
    })
      .then(r=>r.json())
      .then(d=>setData(d.result))
  },[])

  return <div style={{padding:20}}><pre>{data}</pre></div>
}
