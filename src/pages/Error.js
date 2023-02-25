import {React, Component} from "react";

const santi = `(not yet created)`;

class Error extends Component {
    
    render () {
        return (
            <div className="error-404">
                <h1>Error!</h1>
                <h3>Page not found</h3>
                <p>Or possibly, the page is not yet available {santi}</p>    
            </div>
        )
    }
}

export default Error