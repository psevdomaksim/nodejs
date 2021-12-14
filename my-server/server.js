const http = require("http");
const dotenv = require("dotenv");
PORT=process.env.PORT
dotenv.config();
http.createServer((request, response)=>{
    /* response.end(dateNow.getDate()+name.getName()); */
    response.end;

}).listen(PORT, process.env.HOST,()=>{
    console.log(`Сервер начал прслушивание запросов на порту ${PORT}`);
});
console.log(global.date);