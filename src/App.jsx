import { useState } from 'react'
import useDebounce from './custom-hooks/useDebounce'
import './styles.css'

function App() {

    const [data, setData] = useState(null)
    const loadData = async (event) => {
        const value=event.target.value
        if(value === '') {
            setData(null)
            return
        }
        const response=await fetch(`http://localhost:8000/data/${value}`)
        const res=await response.json()
        setData(res)
        
    }
    const loadDataDebounced = useDebounce(loadData, 400)
    

    return (
        <div className="App">
            <input type="text" onChange={(e) => loadDataDebounced(e)}/>
            {data && data.length !== 0 &&
            <div className="results-container">
                {data.map(item => (
                    <div key={item.id} className="result-item">
                        <p> {item.city} </p>
                    </div>
                ))}
            </div>}
            
        </div>
    );
}

export default App;
