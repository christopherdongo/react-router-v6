import { Link } from 'react-router-dom'

export const NotFound=()=>{

    return (
        <div 
        style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection:"column"

        }}
        >
            <h1>Sorry the page you were looking for was not found.</h1>

            <Link 
             to="/"
             style={{
                background:"black",
                color: "white",
                padding: "15px",
                textDecoration:"none"

             }}
            >
               Return to home
            </Link>
        </div>
    )
}