import './Style.css'
import query from './api'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function AdvancedQueryTwo() {
    const [mostRated, setMostRated] = useState([]);

    // get most rated courses
    useEffect(() => {
        var s = `SELECT courseNumber, COUNT(rating) as ratingCount
                FROM Offerings o
                JOIN OfferingsToProfessorRelations opr ON o.id = opr.offering
                JOIN Reviews r ON r.offeringToProfessorRelation = opr.id
                GROUP BY courseNumber ORDER BY ratingCount DESC LIMIT 15;`

        query(s).then(res => {
            let newMostRated = res.map((elem, i) => {
                return <Link style={{width: "fit-content"}}className="p-1 flex space-x-4" to={`/course/${elem[0]}`}>
                    <p style={{ width: "20px" }}>{`${i + 1}.`}</p>
                    <p style={{ width: "100px" }}>{elem[0]}</p>
                    <p>{`${elem[1]} reviews`}</p>
                </Link>
            });
            setMostRated(newMostRated);
        });
    }, []);

    return <body>
        <div className="logo"></div>
        <section className="body">
            <div className="page_txt">
                <div>This is the page for the second advanced query, which returns the 15 most reviewed courses.</div>
                <div>
                    Here are the fifteen courses with the most reviews:
                    {mostRated}
                </div>
            </div>
        </section>
    </body>
}

export default AdvancedQueryTwo;







