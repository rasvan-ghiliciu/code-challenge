import {getName, storeNames} from '../controller/index.js';
import {Router} from 'express'
import bodyParser from 'body-parser';

import multer from 'multer'
import path from 'path'

const app = Router()
app.use(bodyParser.json());

app.get('/name', (req, res) => {
    try {
        const name = getName()
        res.status(200).json(`My name is ${name}`)
    } catch (error) {
        console.error('Server Error:', error);
        res.status(500).send('Internal server error')
    }
})

app.post('/names', (req,res) => {
    if(!req.body.name) {
        res.status(400).json('Invalid body argument!')
        return
    }
    storeNames(req.body.name)
    res.status(200).json('Name Saved!')
})


// Configure storage for Multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/') // Make sure this directory exists
    },
    filename: function (req, file, cb) {
      cb(
        null,
        file.fieldname + '-' + Date.now() + path.extname(file.originalname)
      )
    }
  })
  
  const upload = multer({ storage: storage })
  
  // Endpoint to upload avatar
  app.post('/avatars', upload.single('avatar'), async (req, res) => {
    if (req.file) {
      console.log('ajunge in file')
      // The file is saved and you can use req.file.path to access its path
      console.log('Uploaded file:', req.file.path)
      res.json({
        message: 'File uploaded successfully.',
        filePath: req.file.path
      })
    } else {
      res.status(400).json({ message: 'Please upload a file.' })
    }
  })

export default app