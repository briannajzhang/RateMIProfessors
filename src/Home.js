import './Style.css'

function Home() {
    return <body>
        <header className="flex"> 
            <span class="title_text">RateM</span>
            <img class="title_image" src="http://ansatuiuc.web.engr.illinois.edu/images/Illinois_Block_I.png" alt="Block I" height="110" width="110"></img>
            <span class="title_text">Professor</span>
        </header>
        <section class="body">
            <div>FindMyProfessor is a website designed for UIUC students to find and post reviews for specific professors and the
                classes that they teach. If you want to search for a professor and see their reviews, you can use the "Search" tab
                above. If you want to use the two advanced queries written for the site, click on Advanced Query 1/2. Finally, to see reviews,
                go to "Reviews". 
            </div>
        </section>
    </body>
   
}

export default Home;