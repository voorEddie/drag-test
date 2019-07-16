import React from 'react';
import './style.css';

import { KEY_PREFIX } from '../../constants';

function Block(props) {
  const { eventId, width, height, backgroundColor } = props;

  return (
    <div
      data-draggable-target-key={KEY_PREFIX + eventId}
      className="Block"
      style={{ width, height, backgroundColor }}
    />
  );
}

export default Block;