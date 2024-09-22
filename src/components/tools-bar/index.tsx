'use client';

import BrushIcon from '@mui/icons-material/Brush';
import SquareIcon from '@mui/icons-material/Square';
import Brightness1Icon from '@mui/icons-material/Brightness1';
import DeselectIcon from '@mui/icons-material/Deselect';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SaveAsIcon from '@mui/icons-material/SaveAs';
import { Button, ButtonGroup } from '@mui/material';
import styles from './styles.module.css';
import { useState } from 'react';
import toolState from '@/store/toolState';
import Brush from '@/tools/Brush';
import canvasState from '@/store/canvasState';
import Rectangle from '@/tools/Rectangle';
import Circle from '@/tools/Circle';
import Eraser from '@/tools/Eraser';
import Line from '@/tools/Line';

export function ToolsBar() {
  const [color, setColor] = useState('#1976d2');
  return (
    <div className={styles.toolbar}>
      <ButtonGroup color='primary'>
        <Button onClick={() => {
          toolState.setTool(new Brush(canvasState.canvas))
        }}>
          <BrushIcon />
        </Button>
        <Button onClick={() => {
          toolState.setTool(new Rectangle(canvasState.canvas))
        }}>
          <SquareIcon />
        </Button>
        <Button onClick={() => {
          toolState.setTool(new Circle(canvasState.canvas))
        }}>
          <Brightness1Icon />
        </Button>
        <Button onClick={() => {
          toolState.setTool(new Eraser(canvasState.canvas))
        }}>
          <DeselectIcon />
        </Button>
        <Button onClick={() => {
          toolState.setTool(new Line(canvasState.canvas))
        }}>
          <HorizontalRuleIcon />
        </Button>
      </ButtonGroup>
      <input
        className={styles.color}
        type='color'
        value={color}
        onChange={(e) => {
          console.log(e.target.value)
          setColor(e.target.value);
        }}
      />

      <ButtonGroup>
        <Button>
          <ArrowBackIcon />
        </Button>
        <Button>
          <ArrowForwardIcon />
        </Button>
        <Button>
          <SaveAsIcon />
        </Button>
      </ButtonGroup>
    </div>
  );
}
