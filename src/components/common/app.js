
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
      pinch: { 
        enable: true
      }
    }
  }

  useEffect(() => {

    props.dispatch(Actions.ttsInit())
  }, [])

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
    <button
      id="SpeechButton"
      style={{ display: 'none' }}
    />
  </div>
}

const APP = connect(state => ({
  uai: state.uai
}))(APPComponent)

export default APP