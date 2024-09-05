const express = require('express'); //Строка 1
const app = express(); //Строка 2
const port = process.env.PORT || 3000; //Строка 3
const cors = require('cors');
const corsOptions = {
    origin: "http://localhost:5173"
};
app.use(cors(corsOptions));
// Сообщение о том, что сервер запущен и прослушивает указанный порт 
app.listen(port, () => console.log(`Listening on port ${port}`)); //Строка 6

// Создание GET маршрута
app.get('/api', (req, res) => { //Строка 9
  res.json({ fruits: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); //Строка 10
}); 