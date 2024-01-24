import { Entry, Gender, NewPatientEntry } from "./types"

const isString = (text: unknown): text is string => {
    return typeof text === 'string'
}

const parseString = (text: unknown): string => {
    if (!isString(text)) {
        throw new Error('incorrect or missing str')
    }

    return text
}

const isEntry = (entry: any): entry is Entry => {
    if ('id' in entry && 'description' in entry && 'date' in entry && 'specialist' in entry && 'diagnosisCodes' in entry) {
        return true
    }

    return false
}

const parseEntries = (entries: any): Entry[] => {
    let entryEntries: Entry[] = []

    for (let i=0; i<entries.length; i++) {
        let entry = entries[i]
        if (!isEntry(entry)) {
            throw new Error('incorrect entry!')
        } else {
            entryEntries.push(entry)
        }
    }

    return entryEntries
}

const isGender = (param: string): param is Gender => {
    return Object.values(Gender).map(v => v.toString()).includes(param)
}

const parseGender = (gender: unknown): Gender => {
    if (!gender || !isString(gender) || !isGender(gender)) {
        throw new Error('incorrect or missing gender' + gender)
    }

    return gender
}

const toNewPatientEntry = (object: unknown): NewPatientEntry => {
    if (!object || typeof object !== "object") {
        throw new Error('Incorrect data')
    }

    if ('name' in object && 'dateOfBirth' in object && 'ssn' in object && 'gender' in object && 'occupation' in object && 'entries' in object) {

        const newEntry: NewPatientEntry = {
            name: parseString(object.name),
            dateOfBirth: parseString(object.dateOfBirth),
            ssn: parseString(object.ssn),
            gender: parseGender(object.gender),
            occupation: parseString(object.occupation),
            entries: parseEntries(object.entries)
        }

        return newEntry
    } else {
        throw new Error('incorrect data, fields missing.')
    }

}

export {
    isString,
    isGender,
    toNewPatientEntry
}