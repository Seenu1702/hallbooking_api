/* eslint-disable react/prop-types */
// import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faCheck } from '@fortawesome/free-solid-svg-icons'
import 'font-awesome/css/font-awesome.min.css';

function Card(props) {

    const {data} = props
    return <>
        <div className="col-lg-4">
            <div className="card mb-5 mb-lg-0">
                <div className="card-body">
                    <h5 className="card-title text-muted text-uppercase text-center">{data.plan}</h5>
                    <h6 className="card-price text-center">${data.price}<span className="period">/month</span></h6>
                    <hr />
                    <ul className="fa-ul">
                        <li className={data.userEnabler ? "" : "text-muted"}><span className='fa-li'><li>{data.userEnabler ? <FontAwesomeIcon icon={faCheck} /> : <FontAwesomeIcon icon={faXmark} />}</li></span>{data.user}</li>
                        <li className={data.storageEnabler ? "" : "text-muted"}><span className='fa-li'><li>{data.storageEnabler ? <FontAwesomeIcon icon={faCheck} /> : <FontAwesomeIcon icon={faXmark} />}</li></span>{data.storage}</li>
                        <li className={data.publicProjectsEnabler ? "" : "text-muted"}><span className='fa-li'><li>{data.publicProjectsEnabler ? <FontAwesomeIcon icon={faCheck} /> : <FontAwesomeIcon icon={faXmark} />}</li></span>{data.publicProjects}</li>
                        <li className={data.communityAccessEnabler ? "" : "text-muted"}><span className='fa-li'><li>{data.communityAccessEnabler ? <FontAwesomeIcon icon={faCheck} /> : <FontAwesomeIcon icon={faXmark} />}</li></span>{data.communityAccess}</li>
                        <li className={data.privateProjectsEnabler ? "" : "text-muted"}><span className='fa-li'><li>{data.privateProjectsEnabler ? <FontAwesomeIcon icon={faCheck} /> : <FontAwesomeIcon icon={faXmark} />}</li></span>{data.privateProjects}</li>
                        <li className={data.supportEnabler ? "" : "text-muted"}><span className='fa-li'><li>{data.supportEnabler ? <FontAwesomeIcon icon={faCheck} /> : <FontAwesomeIcon icon={faXmark} />}</li></span>{data.support}</li>
                        <li className={data.subDomainEnabler ? "" : "text-muted"}><span className='fa-li'><li>{data.subDomainEnabler ? <FontAwesomeIcon icon={faCheck} /> : <FontAwesomeIcon icon={faXmark} />}</li></span>{data.subDomain}</li>
                        <li className={data.reportsEnabler ? "" : "text-muted"}><span className='fa-li'><li>{data.reportsEnabler ? <FontAwesomeIcon icon={faCheck} /> : <FontAwesomeIcon icon={faXmark} />}</li></span>{data.reports}</li>
                    </ul>
                    <div className="d-grid">
                        <a href="#" className="btn btn-primary text-uppercase">Button</a>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Card