import './Style.css'
import query from './api'
import { useEffect, useState } from 'react';

function AdvancedQueryTwo() {
    const [status, setStatus] = useState(false);
    const [mostRated, setMostRated] = useState([]);

    // get most rated courses
    useEffect(() => {
        var s = `SELECT courseNumber, COUNT(rating) as ratingCount
                FROM Offerings o
                JOIN OfferingsToProfessorRelations opr ON o.id = opr.offering
                JOIN Reviews r ON r.offeringToProfessorRelation = opr.id
                GROUP BY courseNumber ORDER BY ratingCount DESC LIMIT 15;`
        
        query(s).then(res => {
            let newMostRated = res.map(elem => {
                return <div class="p-4 flex space-x-4">
                        <p className="w-100px">{elem[0]}</p>
                        <p>{elem[1]}</p>
                    </div>
            });
            setMostRated(newMostRated);
            console.log(newMostRated);
        });
    }, []);

    return <body>
    <header className="flex"> 
        <span class="header_text">RateM</span>
        <img class="header_image" src="http://ansatuiuc.web.engr.illinois.edu/images/Illinois_Block_I.png" alt="Block I" height="110" width="110"></img>
        <span class="header_text">Professor</span>
    </header>
    <section class="body">
        <div>This is the page for the second advanced query, which returns the 15 most reviewed courses.</div>
    
        {status ? (
            <div>
                Here are the fifteen courses with the most reviews:
                {mostRated}
            </div> ) : (
            <div>
                Click the button to view the most reviewd courses!
            </div>
        )}

        <div>
            {!status && (<button onClick={() => setStatus(true)}>
                EXECUTE QUERY HERE
            </button>)}
        </div>
    </section>
</body>
}

export default AdvancedQueryTwo;







