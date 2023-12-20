// [3, 0, 2, 4.5, 0, 3, 1] and 2

// { periodLength: 7,
//     trainingDays: 5,
//     success: false,
//     rating: 2,
//     ratingDescription: 'not too bad but could be better',
//     target: 2,
//     average: 1.9285714285714286
//   }

interface Result {
    periodLength: number,
    trainingDays: number,
    success: boolean,
    targetAmount: number,
    average: number
}
const exerciseCalculator = (dailyExercises: number[], targetAmount: number): Result => {
    const periodLength = dailyExercises.length

    let trainingDays = 0
    for (const day of dailyExercises) {
        if (day === 0) continue
        trainingDays++
    }

    const success = dailyExercises.every((d) => d >= targetAmount)

    const sumOfExercises = dailyExercises.reduce((acc, cur) => acc + cur, 0)

    const average = sumOfExercises / periodLength

    return {
        periodLength,
        trainingDays,
        success,
        targetAmount,
        average,
    }

}

console.log(exerciseCalculator([3, 0, 2, 4.5, 0, 3, 1], 2));
