import query from "./api";

function Reviews() {
    query("SELECT * FROM Reviews").then((data) => {
        console.log(data);
    });

    // console.log(query("SELECT * FROM Reviews"));

    return <div>
        review page
    </div>
}

export default Reviews;