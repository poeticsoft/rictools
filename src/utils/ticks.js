import store from '~/redux/store'
import * as Actions from '../redux/modules/uai/node_modules/~/redux/actions'

var requestAnimationFrame = window.requestAnimationFrame ||
                            window.mozRequestAnimationFrame ||
                            window.webkitRequestAnimationFrame ||
                            window.msRequestAnimationFrame;
window.requestAnimationFrame = requestAnimationFrame;

/* Update time for stats calc

const updateTime = () => store.dispatch(Actions.uiUpdateTime())
setInterval(updateTime, 60 * 1000) // Cada minuto ? 
updateTime() */