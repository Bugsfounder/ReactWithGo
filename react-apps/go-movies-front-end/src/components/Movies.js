import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
const Movies = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        let movies = [
            {
                id: 1,
                title: "Hightlander",
                release_date: "1986-03-07",
                runtime: 116,
                mpa_rating: "R",
                description: "Some long Description"
            },
            {
                id: 2,
                title: "Raiders of the Lost Ark",
                release_date: "1981-06-12",
                runtime: 116,
                mpa_rating: "PG-13",
                description: "Some long Description"
            },
            {
                id: 3,
                title: "Indian",
                release_date: "2024-03-07",
                runtime: 116,
                mpa_rating: "5-starts",
                description: "Some long Description"
            },
        ];

        setMovies(movies)
    }, [])

    return (
        <div>
            <h2>Movies</h2>
            <hr />

            <table className="table table-striped-table-hover">
                <thead>
                    <tr>
                        <th>Movies</th>
                        <th>Release Date</th>
                        <th>Rating</th>
                    </tr>
                </thead>

                <tbody>
                    {movies.map((m) => (
                        <tr key={m.id}>
                            <td>
                                <Link to={`/movies/${m.id}`} > {m.title}</Link>
                            </td>
                            <td>{m.release_date}</td>
                            <td>{m.mpa_rating}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Movies
