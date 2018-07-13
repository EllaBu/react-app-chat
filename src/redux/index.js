const ADD = '添加'
const REDUCE = '减少'

export function counter(state = 0, action) {
  switch(action.type) {
    case ADD:
      return state+1
    case REDUCE:
      return state-1
    default:
      return 10
  }
}
// action
export function addGun() {
  return {type: ADD}
}
export function reduceGun() {
  return {type: REDUCE}
}
export function addGunAsync() {
  return dispatch => {
    setTimeout(() => {
      dispatch(addGun())
    }, 2000)
  }
}