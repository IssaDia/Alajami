import React, { useLayoutEffect, useState} from 'react'
import axios from 'axios'
import { useParams} from "react-router-dom"
import Title from '../components/Title'


export default function SingleTheme(props) {

    let { slug } = useParams()
    const [theme, settheme] = useState([])

    useLayoutEffect(() => {
        axios.get('http://localhost:5000/categories/category/'+ slug)
    .then(function (response) {
        // handle success
        settheme(response.data);
        
        
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    
    }, [slug])

console.log(theme.title);


    return (
        <div>
            <Title title={theme.title}/>
           

            
        
            
        </div>
    )
}
