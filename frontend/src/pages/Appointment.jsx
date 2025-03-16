/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'

const Appointment = () => {

  const { docId } = useParams();
  const { doctors } = useContext(AppContext);

  const [docInfo, setDocInfo] = useState(null);

  const fetchDocInfo = async () => {
    const docInfo = doctors.find(doc => doc._id === docId);
    setDocInfo(docInfo);
    console.log(docInfo);
  }

  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId])

  return docInfo && (
    <div>
      {/* ====== Doctors Details ===== */}
      <div className='flex flex-col sm:flex-row gap-4'>
        {/* === LEFT === */}
        <div>
          <img className='' src={docInfo.image} alt="Doctor Image" />
        </div>

        {/* === RIGHT === */}
        <div>
          {/* == Doc Info: name, degree, experience == */}
          <p>
            {docInfo.name}
            <img src={assets.verified_icon} alt="Verified Icon" />
          </p>
          <div>
            <p>{docInfo.degree} - {docInfo.speciality}</p>
            <button>{docInfo.experience}</button>
          </div>

          {/* == Doctor About == */}
          <div>
            <p>
              About <img src={assets.info_icon} alt="Info Icon" />
            </p>
            <p>{docInfo.about}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Appointment