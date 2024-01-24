export type Weather = 'sunny' | 'rainy' | 'cloudy' | 'windy' | 'stormy'
export type Visibility = 'great' | 'good' | 'ok' | 'poor'

export interface DiaryEntry {
    id: number,
    date: string,
    weather: Weather,
    visibility: Visibility,
    comment?: string
}

export interface DiagnosisObject {
    code: string,
    name: string,
    latin?: string
}


export enum HealthCheckRating {
    "Healthy" = 0,
    "Good" = 1,
    "High risk" = 2,
    "Critical"= 3
}

interface BaseEntry {
    id: string,
    description: string,
    date: string,
    specialist: string,
    diagnosisCodes?: Array<DiagnosisObject['code']>
}

export interface HealhCheckEntry extends BaseEntry {
    type: "HealthCheck",
    rating: HealthCheckRating
}

interface DischargeInfo { 
    date: string,
    criteria: string
}

interface SickLeave {
    startDate: string,
    endDate: string
}


interface HospitalEntry extends BaseEntry {
    type: 'hospital',
    discharge: DischargeInfo,
}

interface OccupationalHealthEntry extends BaseEntry {
    type: 'OccupationalHealthcare',
    sickLeave: SickLeave,
    employerName: string
}

export type Entry = HealhCheckEntry | HospitalEntry | OccupationalHealthEntry

export interface PatientObject {
    id: string,
    name: string,
    dateOfBirth: string,
    ssn: string,
    gender: string,
    occupation: string,
    entries: Entry[]
}

export enum Gender {
    Female = 'female',
    Male = 'male',
    Other = 'other'
}

export type Diagnosis = Array<DiagnosisObject>
export type Patients = Array<PatientObject>
export type NewPatientEntry = Omit<PatientObject, 'id'>

export type NonSensitiveDiaryEntry = Omit<DiaryEntry, 'comment'>
export type NonSensitivePatient = Omit<PatientObject, 'ssn' | 'entries'>