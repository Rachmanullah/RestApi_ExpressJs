require('dotenv').config();
const express = require('express')
const app = express()
const port = process.env.PORT || 5000;
const usersRouter = require('./src/routes/users')
const middlewareLogRequest = require('./src/middleware/logs');
const upload = require('./src/middleware/multer');

//middleware
app.use(middlewareLogRequest);
app.use(express.json());
app.use("/assets", express.static('public/images'));

//route
app.use("/users", usersRouter)
app.post('/upload', upload.single('photo'), (req, res) => {
    res.json({
        message: 'upload berhasil'
    })
})

//server
app.listen(port, () => {
    console.log(`Server berhasil di runnning pada port ${port}`)
})