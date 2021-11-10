import './Style.css'
import query from './api'
import { useEffect, useState } from 'react';


function AdvancedQueryOne() {
    const [bestProfs, setBestProfs] = useState([]);

    // get best professors
    useEffect(() => {
        var s = `SELECT professor, AVG(rating) AS avgRating 
        FROM OfferingsToProfessorRelations opr JOIN Reviews r ON opr.id = r.offeringToProfessorRelation 
        GROUP BY professor HAVING COUNT(rating) > 0 
        ORDER BY avgRating DESC LIMIT 15;`;

        query(s).then(res => {
            let newBestProfs = res.map(elem => {
                return <div class="p-4 flex space-x-4">
                        <p className="w-100px">{elem[0]}</p>
                        <p>{elem[1]}</p>
                    </div>
            });
            setBestProfs(newBestProfs);
            console.log(newBestProfs);
        });
    }, []);

    return <body>
    <header className="flex"> 
        <span class="header_text">RateM</span>
        <img class="header_image" src="http://ansatuiuc.web.engr.illinois.edu/images/Illinois_Block_I.png" alt="Block I" height="110" width="110"></img>
        <span class="header_text">Professor</span>
    </header>
    <section class="body">
        <div>This is the page for the first advanced query, which returns top 15 best rated professors.</div>
        <div>Click the button below to execute the query.</div>
        
        <div>
        <button>EXECUTE QUERY HERE</button>
        </div>

        <div>
            these are the best professors: 

            {bestProfs}
        </div>
        
    </section>
</body>
}

export default AdvancedQueryOne;