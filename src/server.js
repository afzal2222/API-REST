import app from './app.js'

const PORT = process.env.PORT || 2020; 

app.listen( PORT,() =>{
    console.log(`Server running at the address http://localhost:${PORT}`);
});

