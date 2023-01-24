import React, { useState, useEffect } from 'react';
// import { FaLink } from 'react-icons/fa';
import { MdVerified } from 'react-icons/md';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Certificates.scss';

const Certificates = () => {
  const [certificates, setCertificates] = useState([]);

  useEffect(() => {
    const query = '*[_type == "certificates"]';

    client.fetch(query).then(data => {
      setCertificates(data);
    });
  }, []);

  return (
    <>
      <h2 className='head-text'>licenses & certificates</h2>

      <motion.div
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className='app__certificates--container'
      >
        {certificates.map(certificate => (
          <div className='app__certificate app__flex' key={certificate._id}>
            <div className='app__certificate--img app__flex'>
              <img src={urlFor(certificate.imgUrl)} alt={certificate.title} />
              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: 'easeInOut',
                  staggerChildren: 0.5,
                }}
                className='app__certificate--hover app__flex'
              >
                <a
                  href={certificate.verificationLink}
                  target='_blank'
                  rel='noreferrer'
                >
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className='app__flex'
                  >
                    {/* <FaLink /> */}
                    <MdVerified />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className='app__certificate--desc app__flex'>
              <h4 className='bold-text'>{certificate.title}</h4>

              <div className='app__certificate--desc-info'>
                <p
                  className='app__certificate--desc-info-destination p-text'
                  style={{ marginTop: 10 }}
                >
                  {certificate.destination}
                </p>
                <p className='app__certificate--description-info-date p-text'>
                  {certificate.date}
                </p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default MotionWrap(
  AppWrap(Certificates, 'certificates'),
  'app__certificates',
  'app__primarybg'
);
