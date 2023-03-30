import React from 'react'
import Countdown from 'react-countdown';
import { memo} from "react";

function CountDown({time}) {

  return (
    <Countdown date={Date.now() + time} />
  )
}

export default memo(CountDown)