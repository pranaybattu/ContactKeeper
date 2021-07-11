const express = require('express')
const connectDB = require('./config/db')
const path = require('path')

const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json({extended:false}))

connectDB();

app.get('/', (req,res) => res.json({msg:'Welcome to ContacKeeper API...'}) )

app.use('/api/users', require('./routes/users'))
app.use('/api/auth', require('./routes/auth'))
app.use('/api/contacts', require('./routes/contacts'))

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'))
  
    app.get('*', (req, res) =>
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    )
  }

app.listen(PORT, () => console.log(`server started on PORT ${PORT}`) )