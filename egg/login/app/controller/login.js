const Controller = require('egg').Controller;

class LoginController extends Controller {
  async register() {
    //异步 存一条数据
    const  { ctx } = this;
    const{password,username,email}=
    ctx.request.body;
    console.log(password,username,email, '++++++')
    //分层
    await ctx.service.user.register({password,username,email});
   // ctx.body = 'hi, egg';
  }
  async  loginIn(){
      const{ctx} =this;
     // console.log(ctx.request.body)
     const{email,password }= ctx.reuest.body
     console.log(email,password)
      ctx.body='登录成功'
  }
}

module.exports = LoginController;