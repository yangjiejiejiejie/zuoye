const Koa=require('koa')
const static=require('koa-static')
let   app=new Koa()
const path=require('path')
const router=require('koa-router')()
const query=require('./db/index')
app.use(static(path.join(process.cwd(),'./publish/')));
app.use(router.routes())
app.use(router.allowedMethods())
router.get('/userlist',async (ctx)=>{
    let date=await query()
    ctx.body={
        code:1,
        date
    }
})
router.get('/detail',async (ctx)=>{
    ctx.body='详情'
})
app.listen(8080,()=>{
    console.log('已经启动');
})