
import React, {
  useState,
  useEffect
} from 'react'
import * as Actions from '~/redux/actions'
import Hammer from 'react-hammerjs'
import { connect } from 'react-redux'

const APPComponent = props => {

  const doAction = event => {

    props.dispatch(Actions.uaiDoAction({
      type: event.type,
      direction: event.direction
    }))
  }

  const options = {
    recognizers: {
      tap: {
        time: 600,
        threshold: 100
      },
      doubletap: {
        taps: 2
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
    <div className="Action Type">{ props.action }</div>
    <div className="Action Data">{ props.data }</div>
    <Hammer
      onTap={ doAction }
      onDoubleTap={ doAction }
      onPan={ doAction }
      onPinchIn={ doAction }
      onPinchOut={ doAction }
      onPress={ doAction }
      options={ options }
    >
      <div className="Sensor"></div>
    </Hammer>
  </div>
}

const APP = connect(state => ({
  uai: state.uai
}))(APPComponent)

export default APP