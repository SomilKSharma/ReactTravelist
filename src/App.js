import { useState } from "react"

export default function App() {
    // state variable for item that are added
    const [items, setItems] = useState([])
    // function to add to the items Array
    function handleAddItems(item) {
        setItems((items) => [...items, item])
    }
    return (
        <>
            <div className="app">
                < Logo />
                <Form handleAddItems={handleAddItems} />
                <PackinglistList items={items} />
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
function Form({ handleAddItems }) {

    // text input field
    const [description, setDescription] = useState('')

    // select useState
    const [qnty, setQnty] = useState(1)



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
        handleAddItems(newItem)

        // use setter function
        setDescription('')
        setQnty(1)

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
                    onChange={(e) => setDescription(e.target.value)}
                />
                <button>Add</button>
            </form>
        </>
    )
}

// function for packinglist
function PackinglistList({ items }) {
    return (
        <>
            <ul className="list">
                {
                    items.map(
                        (item) =>
                            <Item item={item} key={item.id} />
                    )
                }
            </ul>
        </>
    )
}

// A function for diplaying items
function Item({ item }) {
    // return the values
    return (
        <>
            <li>
                <span style={item.packed ? { textDecoration: 'line-through' } : {}}>
                    {
                        item.quantity
                    }
                    {
                        " " + item.description
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