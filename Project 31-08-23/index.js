

const cors = require('cors');
const bodyParser = require('body-parser');
const express = require('express');

const connectToDatabase = require('./db_connector');
connectToDatabase();


const newData = require('./routes/register')
const oldData = require('./routes/login')
const profileData = require('./routes/profile')
const userEmail = require('./routes/updateEmail')
const userPassword = require('./routes/updatePassword')
const userDetails = require('./routes/editDetails')
const fullDetails = require('./routes/getFullDetails')
const roleDetails = require('./routes/roleUpdate')
const dashboardDetails = require('./routes/dashboard')
const productDetails = require('./routes/addListing')
const roleCheck = require('./routes/roleCheck')
const myadsDetails = require('./routes/dashboardMyAds')
const electronicsDetails = require('./routes/electronics')
const searchDetails = require('./routes/search')


// { limit: '10mb' }
const app = express()

app.use(bodyParser.json());
app.use(cors());


app.use('/register', newData)
app.use('/login', oldData)
app.use('/profile', profileData)
app.use('/updateEmail', userEmail)
app.use('/updatePassword', userPassword)
app.use('/editDetails', userDetails)
app.use('/getFullDetails', fullDetails)
app.use('/roleUpdate', roleDetails)
app.use('/dashboard', dashboardDetails)
app.use('/roleCheck', roleCheck)
app.use('/addListing', productDetails)
app.use('/dashboardMyAds', myadsDetails)
app.use('/electronics', electronicsDetails)
app.use('/search', searchDetails)








app.listen(3000, () => {
    console.log('Server is running on PORT: 3000');
});