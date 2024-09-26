import { SiLinuxprofessionalinstitute } from "react-icons/si";
import { PiCoinsThin } from "react-icons/pi";
import { PiMountainsThin } from "react-icons/pi";
import React from 'react'
import { motion } from 'framer-motion'
import Card from 'react-bootstrap/Card'
import { MdCheckBox } from "react-icons/md";
import JoinSection from "./JoinSection";

const PlanList = () => {

    const planList = [
        {
            id: 1,
            itemClasses: 'bg-success rounded-0 p-4',
            itemIcon: <SiLinuxprofessionalinstitute />,
            itemTitle: 'Basic',
            itemPrice: 30,
            firstListItem: 'First List item',
            SecondListItem: 'Second list Item',
            thirdListItem: 'Third List Item',
            btnClasses: 'btn btn-light rounded text-capitalize w-100'
        },


        {
            id: 2,
            itemClasses: 'bg-danger rounded-0 p-4',
            itemIcon: <PiCoinsThin />,
            itemTitle: 'Permium',
            itemPrice: 40,
            firstListItem: 'First List item',
            SecondListItem: 'Second list Item',
            thirdListItem: 'Third List Item',
            btnClasses: 'btn btn-success rounded text-capitalize w-100'

        },

        {
            id: 3,
            itemClasses: 'bg-warning rounded-0 p-4',
            itemIcon: <PiMountainsThin />,
            itemTitle: 'Pro',
            itemPrice: 50,
            firstListItem: 'First List item',
            SecondListItem: 'Second list Item',
            thirdListItem: 'Third List Item',
            btnClasses: 'btn btn-success rounded text-capitalize w-100'

        },



    ]

    return (

        <div>
            <div className="mb-5 pb-4">
            <JoinSection />
            </div>



            <motion.div className="col-lg-4"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                whileHover={{ scale: 1.1 }}>


                <div className="d-sm-flex w-100 mb-5 mb-lg-0">
                    {
                        planList.map(({ itemClasses, itemIcon, itemTitle, itemPrice, firstListItem, SecondListItem, thirdListItem, btnClasses }) => {
                            return (
                                <Card.Body className="">
                                    <div className="planCard">
                                        <article className={itemClasses}>
                                            <div>{itemClasses}</div>
                                            <div className="fs-1">{itemIcon}</div>
                                            <h3>{itemTitle}</h3>
                                            <p>${itemPrice}</p>
                                            <ul className="list list-unstyled">
                                                <li><MdCheckBox />{firstListItem}</li>
                                                <li><MdCheckBox />{SecondListItem}</li>
                                                <li><MdCheckBox />{thirdListItem}</li>
                                            </ul>
                                            <button className={btnClasses}>Enroll Now</button>
                                        </article>
                                    </div>
                                </Card.Body>
                            )
                        })
                    }
                </div>

            </motion.div>
        </div>
    )
}

export default PlanList