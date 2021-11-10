<<<<<<< HEAD
import './Style.css'

function Search() {
    return <body>
    <header> 
        <span class="title_text">RateM</span>
        <img class="title_image" src="http://ansatuiuc.web.engr.illinois.edu/images/Illinois_Block_I.png" alt="Block I" height="110" width="110"></img>
        <span class="title_text">Professor</span>
    </header>
    <section class="body">
        <div>This is the page for the first advanced query. Something will be returned here.</div>
    </section>
    </body>
=======
import { useEffect, useState } from "react";
import query from "./api";

const apiGetColumnNames = (column: string): string[] => {
    return query(`SHOW COLUMNS FROM ${column};`)
        .then((cols) => cols.map(col => col[0]))
};

function ResultCard(props) {


    let items = [];
    console.log(props.results)
    for (const result of props.results) {
        items.push(
            <div class="p-4 flex space-x-4">
                <p className="w-100px">{result[3]}</p>
                <p>{result[4]}</p>
            </div>
        // <p>{`${result[3]} - ${result[4]}`}</p>
        )
    }

    return <div class="flex justify-center px-10 pt-10 pb-10 w-screen">
        <div class="w-11/12 border-2 border-gray-400 rounded-lg divide-y divide-gray-100">


        {/* ${JSON.stringify(props.results)} */}
        {items}

        </div>
    </div>
}

function Search() {
    const [lastSearch, setLastSearch] = useState('')
    const [search, setSearch] = useState('')
    const [results, setResults] = useState([])
    
    const onEnter = async (e) => {
        if (e.key != "Enter") return;
        console.log(`Enter Pressed: ${search}`)

        if (search == lastSearch) return;
        console.log("Running search")

        let tsearch = search.trim();

        const re = /\d+$/;
        let num_matches =  tsearch.match(re);
        let num;

        if (num_matches) {
            num = num_matches[0];
            tsearch = tsearch.replace(re, '').trim();
        }

        // let columns = await apiGetColumnNames("Departments");
        let columns = ['id', 'name', 'college', 'title'];
        console.log(columns);
        
        let sql = `
            SELECT college, id, name, courseNumber, title
            FROM Departments JOIN Courses ON id=departmentId
            `
        
        if (num || tsearch) {
            sql += " WHERE "
        }

        if (tsearch) {
            sql += " ( "
            sql += columns.map(c => ` ${c} LIKE '%${tsearch}%' `).join(" OR ")
            sql += " ) "

            if (num) {
                sql += " AND "
            }
        }

        if (num) {
            sql += " ( "
            sql += ` courseNumber LIKE '%_${num}%' `
            sql += " ) "
        }

        console.log(sql);

        let matches = await query(sql);
        matches = matches.slice(0, 50);
        console.log(matches);

        if (matches == results) return;
        setResults(matches);

    }

    // useEffect(() => {
    //     query
    // });

    return <div>
        <div class="flex justify-center pt-10 pb-10">
            <input
                className="border-2 border-gray-400 h-12 px-2 rounded-lg w-7/12"
                type="text"
                placeholder="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={onEnter}
            />
        </div >
        <div class="flex justify-center">
            <ResultCard results={results} />
        </div>
    </div>

>>>>>>> e3219835794463be82980d6eb5e49a15e52bbfbe
}

export default Search;