import query from "./api";
import './Style.css'

function Reviews() {
    query("SELECT * FROM Reviews").then((data) => {
        console.log(data);
    });

    // console.log(query("SELECT * FROM Reviews"));

    return <body>
    <header> 
        <span class="title_text">RateM</span>
        <img class="title_image" src="http://ansatuiuc.web.engr.illinois.edu/images/Illinois_Block_I.png" alt="Block I" height="110" width="110"></img>
        <span class="title_text">Professor</span>
    </header>
    <section class="body">
        <div>This is the reviews page! Something will be returned here.</div>
    </section>
</body>
}

export default Reviews;