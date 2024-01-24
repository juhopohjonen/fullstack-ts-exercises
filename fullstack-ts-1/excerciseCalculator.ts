interface ExcerciseResult {
    numberOfDays: number,
    numberOfTrainingDays: number,
    targetValue: number,
    avgTime: number,
    targetReached: boolean,
    rating: number,
    ratingExp: string
}

/*

interface CalculateInterface {
    values: Array<number>
}

const TARGET_HOURS = 2

*/

const calculateExcercises = (dailyExerciseHours: Array<number>, targetHours: number): ExcerciseResult => {
    let numsWhenTrained: Array<number> = []
    
    for (let i: number = 0; i < dailyExerciseHours.length; i++) {
        let num = dailyExerciseHours[i]

        if (num > 0) {
            numsWhenTrained.push(num)
        }
    }



    const numberOfDays = dailyExerciseHours.length
    let totalHours = 0
    for (let i = 0; i < dailyExerciseHours.length; i++) {
        let hourAmount: number = dailyExerciseHours[i]
        totalHours += hourAmount
    }
    
    const avgTime: number = totalHours/numberOfDays
    const success: boolean = avgTime >= targetHours

    const targetIndex = targetHours-avgTime

    let rating: number = 0
    if (targetIndex === 0 || targetIndex < 0) {
        rating = 3
    } else if (targetIndex < 2) {
        rating = 2
    } else {
        rating = 1
    }

    let ratingExp = ""
    switch (rating) {
        case 3:
            ratingExp = 'Very good'
            break
        case 2:
            ratingExp = 'ok'
            break
        default:
            ratingExp =  'try better next time'
            break
    } 

    return {
        numberOfDays: dailyExerciseHours.length,
        numberOfTrainingDays: numsWhenTrained.length,
        targetReached: success,
        rating,
        ratingExp,
        avgTime,
        targetValue: targetHours
    }


}

/*

const parseArgs = (args: string[]): CalculateInterface => {
    const values: string[] = args.slice(2)

    let numValues: Array<number> = []
    values.forEach((v) => {
        if (isNaN(Number(v))) {
            throw new Error('nan error!'+v.toString())
        }

        numValues.push(Number(v))
    })

    return {
        values: numValues
    }
}

*/

export default calculateExcercises