export default function App() {
    return (
        <>
            <div className="app">
                < Logo />
                <Form />
                <PackinglistList />
                <Stats />
            </div>
        </>
    )
}

// function for logo
function Logo() {
    return (
        <>
            <h1>Planning Module</h1>
        </>
    )
}

// function for form
function Form() {
    return (
        <>
            <div className="add-form">
                <h3>Trips plan!!</h3>
            </div>
        </>
    )
}

// function for packinglist
function PackinglistList() {
    return (
        <>
            <div className="list">
                LIST
            </div>
        </>
    )
}

// function for stats
function Stats() {
    return (
        <>
            <footer className="stats">
                <em>
                    You have X items in the list
                </em>
            </footer>
        </>
    )
}