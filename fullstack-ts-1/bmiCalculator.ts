/*interface Inputs {
    heightInCm: number,
    weightInKg: number
}
*/

const normalBmiRange = {
    "min": 18.5,
    "max": 24.9
}

/*
const getArgs = (args: string[]) : Inputs => {
    if (args.length > 4 || args.length < 4) {
        throw new Error('required 2 args: height and weight (cm, kg)')
    }

    if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
        return {
            heightInCm: Number(args[2]),
            weightInKg: Number(args[3])
        }
    } else {
        throw new Error('height & weight must be numbers')
    }
}
*/

const calculateBmi = (heightInCm: number, weightInKg: number): string => {
    const heightInMeters = heightInCm/100

    const bmi: number = weightInKg / (heightInMeters**2)
    console.log('BMI:', bmi)

    if (bmi >= normalBmiRange.min && bmi <= normalBmiRange.max) {
        return "Normal (healthy weight)"
    } else if (bmi < normalBmiRange.min) {
        return "Underweight"
    } 

    return "Overweight"
}

export default calculateBmi