'use client'

import { observer } from 'mobx-react-lite'
import { useEffect, useRef } from 'react'
import canvasState from '@/store/canvasState'
import styles from './styles.module.css'
// import toolState from '@/store/toolState'
// import Brush from '@/tools/Brush'

export const Canvas = observer(() => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  useEffect(() => {
    const canvasNode = canvasRef.current
    if (canvasNode) {
      canvasState.setCanvas(canvasNode)
      // toolState.setTool(new Brush(canvasNode as HTMLCanvasElement))
    }
  }, [])

  useEffect(() => {
  })
  return (
    <div className={styles.container}>
      <canvas ref={canvasRef} width={600} height={400} />
    </div>
  )
})