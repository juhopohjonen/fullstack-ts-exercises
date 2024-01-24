import { Entry } from "../types"

interface EntriesProps {
    entries: Entry[]
}

function Entries (props: EntriesProps) {
    const { entries } = props
    return (
        <>
            <h2>
                Flight entries
            </h2>

            {entries.map((entry, i) => (
                <div key={entry.date + i.toString()}>
                    <h3>{entry.date}</h3>
                    <p>weather: {entry.weather}</p>
                    <p>visibility: {entry.visibility}</p>
                </div>)
                )}
        </>

    )
}

export default Entries