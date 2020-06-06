
import * as React from 'react';
import './style.css';

function Movie() {
    return(
        <div className='movie-card'>
            <img src='data:image/jpeg;base64,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
            '/>
            <label> 12M GOVINDA TELUGU MOVIE</label>

        </div>
    );
    
}

export default Movie;
