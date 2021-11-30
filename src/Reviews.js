import { useEffect, useState } from "react";
import query from "./api";
import './Style.css'

function Reviews() {
    const [student, setStudent] = useState("");
    const [reviews, setReviews] = useState([]);
    const [dept, setDept] = useState("");
    const [depts, setDepts] = useState([]);
    const [course, setCourse] = useState("");
    const [courses, setCourses] = useState([]);
    const [offering, setOffering] = useState("");
    const [offerings, setOfferings] = useState([]);
    const [professor, setProfessor] = useState("");
    const [professors, setProfessors] = useState([]);
    const [review, setReview] = useState(null);
    const [reviewInput, setReviewInput] = useState("");
    const [ratingInput, setRatingInput] = useState(5);

    //get existing reviews
    function updateReviews() {
        const fields = "c.departmentId, courseNumber, crn, semester, professor, name, rating, review";
        const tables =
        `Courses c
        NATURAL JOIN Offerings o
        JOIN OfferingsToProfessorRelations opr ON opr.offering = o.id
        JOIN Reviews r ON r.offeringToProfessorRelation = opr.id
        JOIN Professors p ON opr.professor = p.netid`;
        query(`SELECT ${fields} FROM ${tables} WHERE student = "${student}";`).then(res => {
            let newReviews = res.map(elem => {
                return {
                    ddepartmentId: elem[0],
                    courseNumber: elem[1],
                    crn: elem[2],
                    semester: elem[3],
                    professor: elem[4],
                    name: elem[5],
                    rating: elem[6],
                    review: elem[7]
                }
            });
            setReviews(newReviews);
        });
    }

    useEffect(() => {
        const fields = "c.departmentId, courseNumber, crn, semester, professor, name, rating, review";
        const tables =
        `Courses c
        NATURAL JOIN Offerings o
        JOIN OfferingsToProfessorRelations opr ON opr.offering = o.id
        JOIN Reviews r ON r.offeringToProfessorRelation = opr.id
        JOIN Professors p ON opr.professor = p.netid`;
        query(`SELECT ${fields} FROM ${tables} WHERE student = "${student}";`).then(res => {
            let newReviews = res.map(elem => {
                return {
                    ddepartmentId: elem[0],
                    courseNumber: elem[1],
                    crn: elem[2],
                    semester: elem[3],
                    professor: elem[4],
                    name: elem[5],
                    rating: elem[6],
                    review: elem[7]
                }
            });
            setReviews(newReviews);
        });
    }, [student])

    //get departments
    useEffect(() => {
        query('SELECT id, name FROM Departments ORDER BY id;').then(res => {
            let newDepts = res.map(elem => {
                return {
                    id: elem[0],
                    name: elem[1]
                }
            });
            setDepts(newDepts);
        });
    }, []);

    //get courses in the department
    useEffect(() => {
        setCourse("");
        setCourses([]);
        if (!dept) return;
        query(`SELECT courseNumber, title FROM Courses WHERE departmentId = "${dept}" ORDER BY courseNumber;`).then(res => {
            let newCourses = res.map(elem => {
                return {
                    number: elem[0],
                    title: elem[1]
                }
            });
            setCourses(newCourses);
        });
    }, [dept]);

    //get offerings of the course
    useEffect(() => {
        setOffering("");
        setOfferings([]);
        if (!course) return;
        query(`SELECT id, CRN, semester FROM Offerings WHERE courseNumber = "${course}" ORDER BY semester, CRN;`).then(res => {
            let newOfferings = res.map(elem => {
                return {
                    id: elem[0],
                    CRN: elem[1],
                    semester: elem[2]
                }
            });
            setOfferings(newOfferings);
        })
    }, [course]);

    //get professors who taught the class
    useEffect(() => {
        setProfessor("");
        setProfessors([]);
        if (!offering) return;
        query(`SELECT id, name FROM OfferingsToProfessorRelations JOIN Professors ON professor=netid WHERE offering="${offering}" ORDER BY name;`).then(res => {
            let newProfessors = res.map(elem => {
                return {
                    relationId: elem[0],
                    name: elem[1]
                }
            });
            setProfessors(newProfessors);
        })
    }, [offering]);

    useEffect(() => {
        setReview(null);
        setReviewInput("");
        setRatingInput(5);
        if (!(professor && student)) return;
        query(`SELECT id, rating, review FROM Reviews WHERE student = "${student}" AND offeringToProfessorRelation = "${professor}"`).then(res => {
            if (!res.length) return;
            setReview({
                id: res[0][0],
                rating: res[0][1],
                review: res[0][2]
            });
            setReviewInput(res[0][2]);
            setRatingInput(res[0][1]);
        })
    }, [professor, student]);

    function addReview() {
        let reviewId = `review-${student}-${professor}`;
        query(`INSERT INTO Reviews VALUES ("${reviewId}", ${ratingInput}, "${reviewInput}", "${student}", "${professor}");`).then(() => {
            setReview({
                id: reviewId,
                rating: ratingInput,
                review: reviewInput
            });
        });
        updateReviews();
    };

    function updateReview() {
        query(`UPDATE Reviews SET review="${reviewInput}", rating=${ratingInput} WHERE id = "${review.id}";`).then(() => {
            setReview((old) => {
                return {
                    id: old.id,
                    rating: ratingInput,
                    review: reviewInput
                }
            });
        });
        updateReviews();
    };

    function deleteReview() {
        query(`DELETE FROM Reviews WHERE id="${review.id}"`).then(() => {
            setReview(null);
            setReviewInput("");
            setRatingInput(5);
        });
        updateReviews();
    };

    return <body>
        <div className="logo"></div>
        <section className="body_txt">
            <div>
                <div className="page_txt">
                    <body>
                        Your NetID:
                    </body>
                    <br />
                    <input type="text" value={student} onChange={(e) => setStudent(e.target.value)} />
                </div> 

                <div className="page_txt">
                <div className="write-review">
                    <br />
                    <body>
                        Write a review:
                    </body>
                    <br />
                    <select value={dept ?? "Select a department"} onChange={(e) => setDept(e.target.value)}>
                        <option value="">Select a department</option>
                        {depts.map(d => <option value={d.id}>{d.id + " - " + d.name}</option>)}
                    </select>
                    {dept && <br />}
                    {dept && <select value={course ?? "Select a course"} onChange={(e) => setCourse(e.target.value)}>
                        <option value="">Select a course</option>
                        {courses.map(c => <option value={c.number}>{c.title}</option>)}
                    </select>}
                    {course && <br />}
                    {course && <select value={offering ?? "Select an offering"} onChange={(e) => setOffering(e.target.value)}>
                        <option value="">Select an offering</option>
                        {offerings.map(o => <option value={o.id}>{o.semester + " - " + o.CRN}</option>)}
                    </select>}
                    {offering && <br />}
                    {offering && <select value={professor ?? "Select a professor"} onChange={(e) => setProfessor(e.target.value)}>
                        <option value="">Select a professor</option>
                        {professors.map(p => <option value={p.relationId}>{p.name}</option>)}
                    </select>}
                    <br />
                    <br />
                    {professor && student && (
                        <div>
                            <p>{review ? "Update " : "Write "}Your Review:</p>
                            <textarea style={{ width: '70%', height: '150px' }} value={reviewInput} onChange={(e) => setReviewInput(e.target.value)} />
                            <br />
                            <p>
                            Rating (out of 5):
                            </p>
                            <input type="number" value={ratingInput} onChange={(e) => setRatingInput(e.target.value)} />
                            <br />
                            <button className="border-2 border-gray-400 h-8 px-2 rounded-lg" onClick={() => { review ? updateReview() : addReview() }}>{review ? "Update" : "Post"}</button>
                            <br />
                            {review && <button className="border-2 border-gray-400 h-8 px-2 rounded-lg" onClick={() => deleteReview()}>Remove</button>}
                        </div>
                    )}
                </div>
                </div>
                <div className="existing-reviews">
                    <body>
                    Your reviews:
                    </body>
                    
                    <br/>
                    <body>
                        {reviews.map((r,i) => {
                            return <div className="existing-review-box" key={i}>
                                <p>{`${r.courseNumber} - ${r.rating}/5`}</p>
                                <p>{r.name}</p>
                                <p>{`${r.semester} - ${r.crn}`}</p>
                            </div>
                        })}
                    </body>
                </div>
            </div>
        </section>
    </body>
}

export default Reviews;