import {motion} from 'framer-motion';

import './Layout.css';

const RowLayout=({movies})=>{
    return (
        <div className="row-layout">
            {movies.map(movie=>(
                <motion.div key={movie.id} className="row-content"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 0.5}}
                >
                    <img src={movie.url} className="row-content-image" alt="movie" />
                    <div className="row-content-title">{movie.title}</div>
                    <div className="row-content-director">{movie.director}</div>
                    <div className="row-content-actors">{movie.actors}</div>
                    <div className="row-content-type">{movie.type}</div>
                    <div className="row-content-summary">{movie.summary}</div>
                    <div className="row-content-date">{movie.date}</div>
                </motion.div>
            ))}
        </div>
    );
}

export default RowLayout;