import {motion} from 'framer-motion';

import './Layout.css';

const GridLayout=({movies})=>{
    return (
        <div className="grid-layout">
            {movies.map(movie=>(
                <motion.div key={movie.id} className="grid-content"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 0.5}}
                >
                    <img src={movie.url} alt="movie" />
                    <div className="grid-content-title">{movie.title}</div>
                    <div className="grid-content-director">{movie.director}</div>
                    <div className="grid-content-type">{movie.type}</div>
                    <div className="grid-content-date">{movie.date}</div>
                </motion.div>
            ))}
        </div>
    );
}

export default GridLayout;