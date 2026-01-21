import "dotenv/config"; // inicia dotenv (.env)
import app from './src/app.js';

const PORT = 3000;  // 3000 é a porta de comunicação que será utilizada na API (localhost:3000)


app.listen(PORT, () => {
    console.log("servidor escutando!");    
});

