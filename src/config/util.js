export function redirectPath({type, avator}) {
  // 根据用户信息，返回跳转地址
  // type
  // avator
  let url = (type === 'boss') ? '/boss' : '/genius'
  if (!avator) {
    url += 'info'
  }
  return url;
}
