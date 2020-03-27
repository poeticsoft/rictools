
import React, {
  useState,
  useEffect
} from 'react'
import * as doActions from '~/redux/actions'
import Hammer from 'react-hammerjs'

const APP = props => {

  const [ action, setAction ] = useState()
  const [ data, setData ] = useState()

  const doAction = event => {

    setAction(event.type)
    setData(event.direction)
  }

  const options = {
    recognizers: {
      tap: {
        time: 10,
        threshold: 10
      },
      rotate : { 
        enable: true
      },
      pinch: { 
        enable: true
      },
      swipe: { 
        enable: true,
        direction: Hammer.DIRECTION_ALL
      }
    }
  }

  return <div className="APP">
    <div className="Action Type">{ action }</div>
    <div className="Action Data">{ data }</div>
    <Hammer
      onTap={ doAction }
      onDoubleTap={ doAction }
      onPan={ doAction }
      onPinchIn={ doAction }
      onPinchOut={ doAction }
      onPress={ doAction }
      onPressUp={ doAction }
      onRotateMove={ doAction }
      onSwipe={ doAction }
      options={ options }
    >
      <div className="Sensor"></div>
    </Hammer>
  </div>
}

export default APP