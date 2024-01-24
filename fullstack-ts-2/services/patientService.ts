import patientData from "../data/patients";
import { NewPatientEntry, PatientObject, Patients } from "../src/types";

const getPatients = (): Patients => {
    return patientData
}

const addPatient = (entry: NewPatientEntry) => {
    const patient: PatientObject = {...entry, id: crypto.randomUUID()}
    patientData.push(patient)
    return patient
}

export {
    getPatients,
    addPatient
}