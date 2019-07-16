import React, { useState } from 'react';
import './style.css';

import Block from '../Block';
import GridBase from '../GridBase';
import useEventListener from '../../hooks/useEventListener';
import { KEY_PREFIX } from '../../constants';

function DragBase(props) {
  const { repeater, unitWidth, unitHeight } = props;
  const [element, setElement] = useState(null);
  const [dragStartCoords, setDragStartCoords] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  useEventListener('mousedown', (evt) => {
    const { clientX, clientY } = evt;
    const draggableTargetKey = evt.target.getAttribute('data-draggable-target-key');  
    const isEventFromDraggableTarget = draggableTargetKey && draggableTargetKey.includes(KEY_PREFIX);
    
    if (isEventFromDraggableTarget) {
      setIsDragging(true);

      setDragStartCoords([clientX, clientY, draggableTargetKey]);
    }
  }, element);

  useEventListener('mousemove', (evt) => {
    const { clientX, clientY } = evt;

    if (isDragging) {
      const [dragStartClientX, dragStartClientY, draggableTargetKey] = dragStartCoords;
      const eventId = draggableTargetKey.slice(KEY_PREFIX.length);

      console.log(`EventId: ${eventId}, Horizontal: ${clientX - dragStartClientX}, Vertical: ${clientY - dragStartClientY}`);
    }
  });

  useEventListener('mouseup', (evt) => {
    setIsDragging(false);
  });

  return (
    <div
      ref={el => setElement(el)}
      className="DragBase"
    >
      <GridBase
        repeater={repeater}
        unitWidth={unitWidth}
        unitHeight={unitHeight}
      />
      <Block
        eventId="1"
        width="50px"
        height="180px"
        backgroundColor="#1C8691"
      />
      <Block
        eventId="2"
        width="150px"
        height="100px"
        backgroundColor="#E8E8E8"
      />
      <Block
        eventId="3"
        width="180px"
        height="180px"
        backgroundColor="#FF5656"
      />
    </div>
  );
}

export default DragBase;