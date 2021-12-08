import './Style.css'
import query from './api'
import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';

function CourseDetails() {
    const { courseNumber } = useParams();
    const [reviews, setReviews] = useState([]);
    const [professors, setProfessors] = useState([]);

    useEffect(() => {
        let queryStr = `SELECT p.name, semester, rating, review, s.name
        FROM Offerings o
        JOIN OfferingsToProfessorRelations opr ON opr.offering = o.id
        JOIN Reviews r ON r.offeringToProfessorRelation = opr.id
        JOIN Professors p ON opr.professor = p.netid
        JOIN Students s ON r.student = s.netid
        WHERE courseNumber = "${courseNumber}"
        ORDER BY semester DESC`;
        query(queryStr).then(res => {
            let newReviews = res.map(elem => {
                return {
                    name: elem[0],
                    semester: elem[1],
                    rating: elem[2],
                    review: elem[3],
                    student: elem[4]
                }
            });
            setReviews(newReviews);
        });

        queryStr = `SELECT name, AVG(avgRating) as rating
        FROM Offerings o
        JOIN OfferingsToProfessorRelations opr ON opr.offering = o.id
        JOIN Professors p ON opr.professor = p.netid
        WHERE courseNumber = "${courseNumber}"
        GROUP BY netid
        ORDER BY rating DESC`;
        query(queryStr).then(res=>{
            let newProfessors = res.map(elem => {
                return {
                    name: elem[0],
                    rating: elem[1]
                }
            });
            setProfessors(newProfessors);
        });
    }, [courseNumber]);

    return <body>
        <div className="logo"></div>
        <section className="body">
            <div>
                <p>Professors who taught {courseNumber}</p>
            </div>
            <div className="existing-reviews" style={{float: "none"}}>
                {professors.map((r, i) => <div className="existing-review-box" key={i}>
                    <p>{`${r.name} - ${r.rating??"Not Reviewed"}` + (r.rating ? "/5" : "") }</p>
                </div>)}
            </div>
            <br/>
            <div>
                <p>Reviews for {courseNumber}</p>
            </div>
            <div className="existing-reviews">
                {reviews.map((r, i) => <div className="existing-review-box" key={i}>
                    <p>{`${r.name} - ${r.rating}/5`}</p>
                    <p>{r.semester}</p>
                    <p>{r.review}</p>
                    <p style={{alignSelf: "flex-end"}}>{`-${r.student}`}</p>
                </div>)}
                {!reviews.length && <div>
                    <p> No Reviews Found!</p>
                    <Link className="border-2 border-gray-400 h-8 px-2 rounded-lg" to="/your-reviews">
                        Write Your Own Review!
                    </Link>
                </div>}
            </div>
        </section>
    </body>
}

export default CourseDetails;
