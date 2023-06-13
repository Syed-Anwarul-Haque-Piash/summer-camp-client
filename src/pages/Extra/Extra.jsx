import React from 'react';
import {motion} from 'framer-motion'

const Extra = () => {
    return (
        <div className='text-7xl mt-5 mb-5 text-blue-400'>
            <motion.h1
            initial={{x: -1000}}
            animate={{x:[0,900,0]}}
            transition={{
                duration: "3",
                delay: "1"
            }}
            whileHover={{scale: "0.9",opacity: "0.4"}}
            >
                There is our all instructor
            </motion.h1>
        </div>
    );
};

export default Extra;