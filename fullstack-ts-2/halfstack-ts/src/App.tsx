
interface HeaderProps {
  header: string
}

interface ObjectOptions {
  key: string,
  value: string
}


interface TotalProps {
  totalExercises: number 
}

interface CoursePartBase {
  name: string;
  exerciseCount: number;
}

interface CoursePartWithDesc extends CoursePartBase {
  description: string
}

interface CoursePartBasic extends CoursePartWithDesc {
  kind: "basic"
}

interface CoursePartGroup extends CoursePartBase {
  groupProjectCount: number;
  kind: "group"
}

interface CoursePartBackground extends CoursePartWithDesc {
  backgroundMaterial: string;
  kind: "background"
}

interface CoursePartSpecial extends CoursePartWithDesc  {
  requirements: string[],
  kind: 'special'
}


type CoursePart = CoursePartBasic | CoursePartGroup | CoursePartBackground | CoursePartSpecial;

const courseParts: CoursePart[] = [
  {
    name: "Fundamentals",
    exerciseCount: 10,
    description: "This is an awesome course part",
    kind: "basic"
  },
  {
    name: "Using props to pass data",
    exerciseCount: 7,
    groupProjectCount: 3,
    kind: "group"
  },
  {
    name: "Basics of type Narrowing",
    exerciseCount: 7,
    description: "How to go from unknown to string",
    kind: "basic"
  },
  {
    name: "Deeper type usage",
    exerciseCount: 14,
    description: "Confusing description",
    backgroundMaterial: "https://type-level-typescript.com/template-literal-types",
    kind: "background"
  },
  {
    name: "TypeScript in frontend",
    exerciseCount: 10,
    description: "a hard part",
    kind: "basic",
  },
  {
    name: "Backend development",
    exerciseCount: 21,
    description: "Typing the backend",
    requirements: ["nodejs", "jest"],
    kind: "special"
  }
];

const App = () => {  

  const courseName = "Half Stack application development";
  const courseParts = [
    {
      name: "Fundamentals",
      exerciseCount: 10
    },
    {
      name: "Using props to pass data",
      exerciseCount: 7
    },
    {
      name: "Deeper type usage",
      exerciseCount: 14
    }
  ];

  const totalExercises = courseParts.reduce((sum, part) => sum + part.exerciseCount, 0);





  return (
    <div>
      <Header header={courseName} />
      <Part />
      <Total totalExercises={totalExercises} />
    </div>
  );
};


const Total = (props: TotalProps) => {
  const { totalExercises } = props

  return (
    <p>
    Number of exercises {totalExercises}
  </p>
  )
}

const Header = (props: HeaderProps) => {


  return (
    <h1>{props.header}</h1>
  )

}

const Part = () => {


      return (
    
      courseParts.map(part => {
        switch (part.kind) {
          case "basic":
            let bValues: ObjectOptions[] = []
            for (const [key, value] of Object.entries(part)) {
              bValues.push({ key, value })
            }
            return (
              <>
                <h4>{part.name}</h4>
                {bValues.map(bg => <p>{bg.key}: {bg.value}</p>)}
              </>
            )
          case "background":
            let bgValues: ObjectOptions[] = []
            for (const [key, value] of Object.entries(part)) {
              bgValues.push({ key, value })
            }
            return (
              <>
                <h4>{part.name}</h4>
                {bgValues.map(bg => <p>{bg.key}: {bg.value}</p>)}
              </>
            )
          case "group":
            let gValues: ObjectOptions[] = []
            for (const [key, value] of Object.entries(part)) {
              gValues.push({ key, value })
            }
            return (
              <>
                <h4>{part.name}</h4>
                {gValues.map(bg => <p>{bg.key}: {bg.value}</p>)}
              </>
            )
          case "special":
            const { requirements, description, kind, name, exerciseCount } = part
            return (
              <>
                <h4>{name}</h4>
                <p>requirements: {requirements.map(r => <span>{r}, </span>)}</p>
                <p>kind: {kind}</p>
                <p>exercise count: {exerciseCount}</p>
                <p>description: {description}</p>
              </>
            )
          default:
            return <p>defaults</p>
        }
    
      })
      )
    
    }

export default App;