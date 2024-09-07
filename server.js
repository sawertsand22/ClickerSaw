const express = require('express'); //Строка 1
const app = express(); //Строка 2
const port = process.env.PORT || 3000; //Строка 3
const cors = require('cors');
const passport = require('passport')
const localStrategy = require('passport-local').Strategy;
const mysql = require('mysql2');
const corsOptions = {
    origin: "http://localhost:5173"
};
app.use(cors(corsOptions));

const pool = mysql.createPool({
  host: '89.223.65.74',
  user: 'root',
  database: 'KoinClick',
  waitForConnections: true,
  connectionLimit: 10,
  maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
  idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0,
});


//app.use(passport.initialize());
//app.use(passport.session());



// Сообщение о том, что сервер запущен и прослушивает указанный порт 
app.listen(port, () => console.log(`Listening on port ${port}`)); //Строка 6

// Создание GET маршрута
app.get('/api', (req, res) => { //Строка 9
  res.json({ fruits: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); //Строка 10
});

app.get('/KoinClick',(req,res)=>
{
  res.send("клик отправлен")
  pool.query(
    'SELECT * FROM `table` WHERE `name` = ? AND `age` > ?',
  ['Page', 45],
    function (err, results, fields) {
      console.log(results); // results contains rows returned by server
      console.log(fields); // fields contains extra meta data about results, if available
      console.log("Connect is sucsesseful")
    }
  );
})