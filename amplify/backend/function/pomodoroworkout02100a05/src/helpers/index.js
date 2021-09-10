const legs = [
  { name: 'Overhead Squats' },
  { name: 'Forward Lunges' },
  { name: 'Reverse Lunges' },
  { name: 'Lateral Lunges' },
  { name: 'Curtsy Lunge' },
  { name: 'Back Squats' },
  { name: 'Sumo Squats' },
  { name: 'Bulgarian Split Squat' },
  { name: 'Glute Bridge' },
  { name: 'Glute Bridge March' },
  { name: 'Quadraped Hip Extension' },
  { name: 'Single Leg Deadlift' },
  { name: 'Single Leg Glute Bridge' },
  { name: 'Calf Raise' }
]

const core = [
  { name: 'Plank' },
  { name: 'Crunches' },
  { name: 'Plank Up-Downs' },
  { name: 'Bird-Dogs' },
  { name: 'Bicycle Crunches' },
  { name: 'V-Ups' },
  { name: 'Hollowman' },
  { name: 'V-Sit' },
  { name: 'Superman Pull' },
  { name: 'Leg Raises' },
  { name: 'Plank Knee Crosses' },
  { name: 'Elbow Plank Twists' },
  { name: 'Plank Shoulder Taps' },
  { name: 'Side Plank' }
]

const upperBody = [
  { name: 'Pushups' },
  { name: 'Tricep Pushups' },
  { name: 'Tricep Dips' },
  { name: 'I-Y-T Raises' },
  { name: 'Lateral Plank Walk' },
  { name: 'Decline Pushups' },
  { name: 'Arm Circles' }
]

const stretches = [
  { name: 'Head Roll' },
  { name: 'Shoulder Shrugs' },
  { name: 'Pectoral Wall Stretch' },
  { name: 'Side Stretch' },
  { name: 'Arm Stretch' },
  { name: 'Quad Stretch' },
  { name: 'Hamstring Stretch' },
  { name: 'Downward Dog' },
  { name: 'Cobra' },
  { name: 'Hip Flexor Lunge Stretch' },
  { name: 'Butterfly Adducter Stretch' },
  { name: 'Pidgeon Stretch' },
  { name: 'Calf Stretch' }
]

const plyos = [
  { name: 'Jump Squat' },
  { name: 'Skater Jump' },
  { name: 'Jump Lunge' },
  { name: 'Frog Jump' },
  { name: 'Burpees' },
  { name: 'Mountain Climbers' },
  { name: 'Bear Crawl' }
]

export function makeRoutine() {
  const workoutArray = []
  workoutArray.push(findRandomValue(legs))
  workoutArray.push(findRandomValue(core))
  workoutArray.push(findRandomValue(upperBody))
  workoutArray.push(findRandomValue(plyos))
  return workoutArray
}

function findRandomValue(workoutArray) {
  return workoutArray[Math.floor(Math.random() * workoutArray.length)]
}
