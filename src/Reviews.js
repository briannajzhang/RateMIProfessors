import { useEffect, useState } from "react";
import query from "./api";
import './Style.css'

function Reviews() {
    const [dept, setDept] = useState("");
    const [depts, setDepts] = useState([]);
    const [course, setCourse] = useState("");
    const [courses, setCourses] = useState([]);
    const [offering, setOffering] = useState("");
    const [offerings, setOfferings] = useState([]);
    const [professor, setProfessor] = useState("");
    const [professors, setProfessors] = useState([]);
    const [student, setStudent] = useState("");
    const [review, setReview] = useState(null);
    const [reviewInput, setReviewInput] = useState("");
    const [ratingInput, setRatingInput] = useState(5);

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
        query('SELECT courseNumber, title FROM Courses WHERE departmentId = "' + dept + '" ORDER BY courseNumber;').then(res => {
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
        query('SELECT id, CRN, semester FROM Offerings WHERE courseNumber = "' + course + '" ORDER BY semester, CRN;').then(res => {
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
        query('SELECT id, name FROM OfferingsToProfessorRelations JOIN Professors ON professor=netid ' +
            'WHERE offering="' + offering + '" ORDER BY name;').then(res => {
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
        query('SELECT id, rating, review FROM Reviews WHERE student = "' + student + '" AND offeringToProfessorRelation = "' + professor + '"').then(res => {
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
        let reviewId = 'review-' + student + '-' + professor;
        query('INSERT INTO Reviews VALUES ("' + reviewId + '", ' + ratingInput + ', "' +
            reviewInput + '", "' + student + '", "' + professor + '");').then(() => {
                setReview({
                    id: reviewId,
                    rating: ratingInput,
                    review: reviewInput
                });
            });
    };

    function updateReview() {
        query('UPDATE Reviews SET review="' + reviewInput + '", rating=' + ratingInput +
            ' WHERE id = "' + review.id + '";').then(() => {
                setReview((old) => {
                    return {
                        id: old.id,
                        rating: ratingInput,
                        review: reviewInput
                    }
                });
            })
    };

    function deleteReview() {
        query('DELETE FROM Reviews WHERE id="' + review.id + '"').then(() => {
            setReview(null);
            setReviewInput("");
            setRatingInput(5);
        });
    };

    return <body>
    <header> 
        <span class="title_text">RateM</span>
        <img class="title_image" src="http://ansatuiuc.web.engr.illinois.edu/images/Illinois_Block_I.png" alt="Block I" height="110" width="110"></img>
        <span class="title_text">Professor</span>
    </header>
    <section class="body">
        <div>
        Write a review:
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
        Your NetID: <input type="text" value={student} onChange={(e) => setStudent(e.target.value)} />
        <br />
        <br />
        {professor && student && (
            <div>
                <p>{review ? "Update " : "Write "}Your Review:</p>
                <input type="text" style={{ width: '70%' }} value={reviewInput} onChange={(e) => setReviewInput(e.target.value)} />
                <br />
                Rating:<input type="number" value={ratingInput} onChange={(e) => setRatingInput(e.target.value)} />/5
                <br />
                <button onClick={()=>{review ? updateReview() : addReview()}}>{review ? "Update" : "Post"}</button>
                {review && <button onClick={()=>deleteReview()}>Remove</button>}
            </div>
        )}
    </div>
    </section>
</body>
}

export default Reviews;