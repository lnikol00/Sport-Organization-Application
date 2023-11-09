import React, { useEffect, useRef, useState } from 'react'
import styles from "../../../styles/home/member.module.css"
import { motion } from "framer-motion"
import { useDispatch, useSelector } from "react-redux"
import Loading from '../../../components/messages/Loading'
import Error from '../../../components/messages/Error'
import { listMembers } from "../../../Redux/Actions/MemberAction"

function Members() {

    const dispatch = useDispatch()

    const membersList = useSelector((state) => state.membersList);
    const { loading, error, members } = membersList;

    useEffect(() => {
        dispatch(listMembers());
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }, [dispatch])

    const [width, setWidth] = useState(0)
    const carousel = useRef();

    return (
        <motion.div ref={carousel} className={styles.mainContainer}>
            <motion.div drag="x" dragConstraints={{ right: 0, left: -width }} whileTap={{ cursor: "grabbing" }} className={styles.imageContainer}>
                {
                    loading ? (<Loading />) : error ? (<Error>Something went wrong</Error>)
                        :
                        (
                            <>
                                {members.map((member) => {
                                    return (
                                        <motion.div className={styles.itemContainer} >
                                            <img src={member.image} alt={member.name} />
                                            <div>
                                                <h3>{member.role}</h3>
                                                <span>{member.name}</span>
                                            </div>
                                        </motion.div>
                                    )
                                })}
                            </>
                        )
                }
            </motion.div>
        </motion.div>
    )
}

export default Members
