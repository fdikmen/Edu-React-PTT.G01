// rfc
import React,{useState,useEffect} from 'react'

export default function FuncComp() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('Raj')
    const increment=()=>{
        setCount(count+1)
    }
    useEffect(() => {
     console.log('FuncComp componentDidMount')
     return () => {
            console.log('FuncComp componentWillUnmount')
        }
    }, [])


    useEffect(() => {
        console.log('FuncComp componentDidUpdate')
       }, [count,name])

    
  return (
    <div style={{width:'45%',float:'left',backgroundColor:'#e5e5e5'}}>FuncComp
    <hr/>
    Count: {count}<br/>
    <button onClick={increment}>Increment</button>
    <br/>
    Name: {name}
    </div>
  )
}
