import express from 'express'
import { addPatient, getPatients } from '../../services/patientService'
import { toNewPatientEntry } from '../utils'
const patientRouter = express.Router()

patientRouter.get('/', (_req, res) => {
    res.send(getPatients())
})

patientRouter.post('/', (req, res) => {
    const patient = toNewPatientEntry(req.body)
    addPatient(patient)

    return res.send(patient)
})

patientRouter.get('/:id', (req, res) => {
    const { id } = req.params
    console.log('pt', getPatients(), typeof(getPatients()[0]))

    const patient = getPatients().find(current => current.id === id)

    return res.send(patient)
})

export default patientRouter