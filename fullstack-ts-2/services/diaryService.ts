import { diaryEntries } from '../data/entries'
import { DiaryEntry, NonSensitiveDiaryEntry } from '../src/types'

const diaries: DiaryEntry[] = diaryEntries

const getNonSensitiveEntries = (): NonSensitiveDiaryEntry[] => {
    return diaries.map(({ id, date, weather, visibility }) => ({
        id,
        date,
        weather,
        visibility
    }))
}

export default {
    getNonSensitiveEntries
}