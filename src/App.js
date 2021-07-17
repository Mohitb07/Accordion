import Accordion from "./components/Accordion";

const items = [
    {
        title : 'What is React? ',
        content : 'React is a front end javascript library'
    },
    {
        title : 'Why use React? ',
        content : 'React is a favourite js library among engineers'
    },
    {
        title : 'How do you use React? ',
        content : 'You use react by creating components'
    },

]

const App = () => {
    return (
        <div>
            <h1>Widgets</h1>
            <Accordion items={items}/>
        </div>
    )
}

export default App;