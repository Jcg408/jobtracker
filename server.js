const express = require ('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path')
const fileUpload = require('express-fileupload');

require ('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});

const connection = mongoose.connection;
connection.once('open', ()=> {
    console.log('MongoDB database connection established successfully');
})

app.use(fileUpload());


app.post(`/upload`, (req, res) => {
    if(req.files===null) {
        return res.status(400).json({msg: 'No File Uploaded'})
    }
    const file = req.files.file;
    file.mv(`${__dirname}/client/public/uploads/${file.name}`, err => {
        if(err) {
            console.error(err);
            return res.status(500).send();
        }
        res.json({fileName: file.name, filePath: `/uploads/${file.name}`});
    });
});

const jobsRouter = require('./routes/jobs');
const resourcesRouter = require('./routes/resources');
app.use('/jobs', jobsRouter );
app.use('/resources', resourcesRouter);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    app.get('*', (req, res)=> {
        res.sendFile(path.join(_dirname, 'client', 'build', 'index.html')); //relative path
    });
}
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
