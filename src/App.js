import { useState } from "react"

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

// Array for values
const initialItems = [
    { id: 1, description: "Passports", quantity: 2, packed: false },
    { id: 2, description: "Socks", quantity: 12, packed: true },
    { id: 3, description: "Books", quantity: 1, packed: false }
]

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

    // text input field
    const [description, setDescription] = useState('')

    // select useState
    const [qnty, setQnty] = useState(1)

    // state variable for item that are added
    const [items, setItems] = useState([])

    // function to add to the items Array
    function handleAddItems(item) {
        setItems((items) => [...items, item])
    }

    // event handler
    function handleSubmit(event) {
        // Ignore default reload
        event.preventDefault()

        // guard clause
        if (!description) {
            return
        }

        // add value to the description useState
        const newItem = {
            description,
            qnty,
            packed: false,
            id: Date.now()
        }

        // use setter function
        setDescription('')
        setQnty('')

    }

    return (
        <>
            <form className="add-form" onSubmit={handleSubmit}>
                <h3>Trips plan!!</h3>
                <select
                    value={qnty}
                    onChange={event => setQnty(event.target.value)}
                >
                    {
                        Array.from(
                            { length: 20 },
                            (_, i) =>
                                i + 1
                        ).map(
                            (num) => (
                                <option value={num} key={num}>
                                    {num}
                                </option>
                            )
                        )

                    }
                </select>
                <input
                    type='text'
                    placeholder="Item"
                    value={description}
                    onChange={(e) => setDescription(Number(e.target.value))}
                />
                <button>Add</button>
            </form>
        </>
    )
}

// function for packinglist
function PackinglistList() {
    return (
        <>
            <ul className="list">
                <li>
                    {
                        initialItems.map(
                            (item) =>
                                <Item item={item} key={item.id} />
                        )
                    }
                </li>
            </ul>
        </>
    )
}

// A function for diplaying items
function Item(props) {
    // return the values
    return (
        <>
            <li>
                <span style={props.item.packed ? { textDecoration: 'line-through' } : {}}>
                    {
                        props.item.quantity
                    }
                    {
                        " " + props.item.description
                    }
                </span>
                <button>
                    ❌ + " "
                </button>
            </li>
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