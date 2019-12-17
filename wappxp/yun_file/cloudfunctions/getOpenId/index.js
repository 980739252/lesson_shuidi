//async  函数的修饰
const cloid=require('wx-server-sdk')
exports.main = async(event,contxt)=>{
  return event.userInfo
}