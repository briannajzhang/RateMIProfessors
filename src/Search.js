import { useState } from "react";
import { Link } from "react-router-dom";
import query from "./api";
import './Style.css'

function ResultCard(props) {


    let items = [];
    console.log(props.results)
    for (const result of props.results) {
        items.push(
            <Link className="p-4 flex space-x-4" to={`/course/${result[3]}`}>
                <p className="w-100px">{result[3]}</p>
                <p>{result[4]}</p>
            </Link>
        // <p>{`${result[3]} - ${result[4]}`}</p>
        )
    }

    return <div className="flex justify-center px-10 pt-10 pb-10 w-screen">
        <div className="w-11/12 border-2 border-gray-400 rounded-lg divide-y divide-gray-100">


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
        if (e.key !== "Enter") return;
        console.log(`Enter Pressed: ${search}`)

        if (search === lastSearch) return;
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

        if (matches === results) return;
        setResults(matches);
        setLastSearch(search);
    }

    // useEffect(() => {
    //     query
    // });

    return <body>
    <section className="body">
        <div>
            <div className="logo"></div>
            <div className="page_txt"> Enter your query here </div>
            <div className="flex justify-center pt-10 pb-10">
                <input
                    className="border-2 border-gray-400 h-12 px-2 rounded-lg w-7/12"
                    type="text"
                    placeholder="Search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyDown={onEnter}
                />
            </div>  
            <div className="flex justify-center">
                <ResultCard results={results} />
            </div>
        </div>
    </section>
</body>
}

export default Search;