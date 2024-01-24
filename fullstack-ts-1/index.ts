import express from 'express'
import calculateBmi from './bmiCalculator'
import calculateExercies from './excerciseCalculator'

const app = express()
app.use(express.json())

app.get('/bmi', (req, res) => {
    const { height, weight } = req.query
    if (!(height && weight) || isNaN(Number(height)) || isNaN(Number(weight))) {
        return res.status(400).send({
            msg: 'params not valid'
        })
    }

    return res.send({
        height: Number(height),
        weight: Number(weight),
        bmi: calculateBmi(Number(height), Number(weight))
    })
})

app.post('/exercises', (req, res) => {
    const { daily_exercises, target } = req.body
    if (!daily_exercises || !target) {
        return res.status(400).send({
            error: "parameters missing"
        })
    } 

    if (!Array.isArray(daily_exercises)) {
        return res.status(400).send({
            error: "malformatted parameters"
        })
    }

    let i = 0;
    while (i < daily_exercises.length) {
        if (isNaN(Number(daily_exercises[i]))) {
            return res.status(400).send({
                error: "malformatted parameters"
            })
        }
        i++
    }

    const exercise = calculateExercies(daily_exercises, 2)
    return res.send({
        exercise
    })

})

const PORT = 5000

app.listen(PORT, () => {
    console.log('Running on port', PORT)
})