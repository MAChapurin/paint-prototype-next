'use client'

import { Canvas, Rect, Circle } from "fabric"
import { useEffect, useRef, useState } from "react"

import styles from './styles.module.css'
import { Button, ButtonGroup } from "@mui/material"
// import BrushIcon from '@mui/icons-material/Brush';
import SquareIcon from '@mui/icons-material/Square';
import Brightness1Icon from '@mui/icons-material/Brightness1';


export function CanvasApp() {
  const canvasRef = useRef(null)
  const [canvas, setCanvas] = useState<Canvas | null>(null)

  useEffect(() => {
    if (canvasRef.current) {
      const initialCanvas = new Canvas(canvasRef.current, {
        width: 500,
        height: 500
      })

      initialCanvas.backgroundColor = '#fff'
      initialCanvas.renderAll()
      setCanvas(initialCanvas)
      return () => {
        initialCanvas.dispose()
      }
    }
  }, [])

  const addRectangle = () => {
    if (canvas) {
      const rect = new Rect({
        top: 100,
        left: 50,
        width: 100,
        height: 60,
        fill: '#d84d42'
      })
      canvas.add(rect)
    }
  }

  const addCircle = () => {
    if (canvas) {
      const circle = new Circle({
        top: 100,
        left: 50,
        radius: 50,
        fill: '#d84d42'
      })
      canvas.add(circle)
    }
  }
  return (
    <div className={styles.container}>
      <ButtonGroup style={{
        marginBottom: '10px'
      }} color='primary'>
        <Button onClick={addRectangle}>
          <SquareIcon />
        </Button>
        <Button onClick={addCircle}>
          <Brightness1Icon />
        </Button>
      </ButtonGroup>

      <ButtonGroup></ButtonGroup>
      <canvas className={styles.canvas} id='canvas' ref={canvasRef}></canvas>
    </div>
  )
}