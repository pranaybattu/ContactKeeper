const express = require('express')

const app = express()

const PORT = process.env.PORT || 5000

app.get('/', (req,res) => res.json({msg:'Welcome to ContacKeeper API...'}) )

app.use('/api/users', require('./routes/users'))
app.use('/api/auth', require('./routes/auth'))
app.use('/api/contacts', require('./routes/contacts'))

app.listen(PORT, () => console.log(`server started on PORT ${PORT}`) )