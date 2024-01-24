import express from 'express'
const cors = require('cors')

import diaryRouter from './src/routes/diaries'
import diagnoseRouter from './src/routes/diagnoses'
import patientRouter from './src/routes/patients'

const app = express()
app.use(express.json())
app.use(cors())

const PORT = 5000

app.get('/api/ping', (_req, res) => {
    res.send('pong')
})

app.use('/api/diaries', diaryRouter)
app.use('/api/diagnoses', diagnoseRouter)
app.use('/api/patients', patientRouter)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})