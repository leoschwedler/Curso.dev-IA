'use client'

import { useEffect, useState } from 'react'
import ReactConfetti from 'react-confetti'

export default function Confete() {
  const [ativo, setAtivo] = useState(false)

  useEffect(() => {
    setAtivo(true)
  }, [])

  if (!ativo) return null

  return (
    <ReactConfetti
      recycle={false}
      numberOfPieces={400}
      onConfettiComplete={() => setAtivo(false)}
      style={{ position: 'fixed', top: 0, left: 0, pointerEvents: 'none' }}
    />
  )
}
