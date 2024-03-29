import React from 'react'
import { motion } from 'framer-motion'
import logoImage from '../utils/images/header/grb2.png'
import "../assets/global.css"

function AnimatedPage({ children }) {
    return (
        <>
            <div>
                {children}
            </div>
            <motion.div
                className='slide-in'
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 1 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
                <img alt='logo' src={logoImage} />
            </motion.div>
            <motion.div
                className='slide-out'
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 0 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
                <img alt='logo' src={logoImage} />
            </motion.div>

        </>

    )
}

export default AnimatedPage