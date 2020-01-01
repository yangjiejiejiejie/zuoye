const mysql=require('mysql')
module.exports=()=>{
        let conn=mysql.createConnection({
            host:'localhost',
            port:3306,
            user:'root',
            password:'root',
            database:'yan'
        })
        conn.connect((error)=>{
             if(error){
                 console.log('数据库连接成功');
             }else{
                console.log('数据库连接失败');
             }
        })
        return new Promise((resolve,reject)=>{
            conn.query('select * from userlist',(error,data)=>{
                if(error){
                    reject(error)
                }else{
                    resolve(data)
                }
                conn.end()
            })
        })
        
}