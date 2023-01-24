import React, { useState, useEffect, Fragment } from 'react';
import { motion } from 'framer-motion';

import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import Zoom from '@mui/material/Zoom';
import useMediaQuery from '@mui/material/useMediaQuery';

import { urlFor, client } from '../../client';
import { AppWrap, MotionWrap } from '../../wrapper';
import './Skills.scss';

const Skills = () => {
  const matches = useMediaQuery('(min-width:2000px)');

  const LightTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(() => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: '#edf2f8',
      boxShadow: '0 3px 10px rgba(0, 0, 0, 0.5)',
      color: 'var(--gray-color)',
      fontSize: matches ? '1.7rem' : '.8rem',
      fontWeight: '500',
      borderRadius: 10,
      padding: matches ? '1.8rem' : '.8rem',
      lineHeight: matches ? '2.2rem' : '1.2rem',
      letterSpacing: matches ? '1px' : '.5px',
      maxWidth: matches ? 800 : 500,
      whiteSpace: 'pre-wrap',
    },
  }));

  const [skills, setSkills] = useState([]);
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    const skillsQuery = '*[_type == "skills"]';
    const experiencesQuery = '*[_type == "experiences"]';

    client.fetch(skillsQuery).then(data => {
      setSkills(data);
    });

    client.fetch(experiencesQuery).then(data => {
      setExperiences(data);
    });
  }, []);

  return (
    <>
      <h2 className='head-text'>Skills & Experiences</h2>

      <div className='app__skills--container'>
        {/* SKILLS */}
        <motion.div className='app__skills--list'>
          {skills.length &&
            skills.map(skill => (
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className='app__skills--list-skill app__flex'
                key={skill._id}
              >
                <div className='app__flex'>
                  <img src={urlFor(skill.icon)} alt={skill.name} />
                </div>

                <p className='p-text'>{skill.name}</p>
              </motion.div>
            ))}
        </motion.div>

        {/* EXPERIENCES */}
        <motion.div className='app__skills--experiences'>
          {experiences.length &&
            experiences.map(experience => (
              <motion.div
                key={experience._id}
                className='app__skills--experience'
              >
                <div className='app__skills--experience-year'>
                  <p className='bold-text'>{experience.year}</p>
                </div>

                <motion.div className='app__skills--experience-works'>
                  {experience.works.map(work => {
                    const workDesc = work.desc
                      .split('. ')
                      .join('.\n')
                      .split(': ')
                      .join(':\n');

                    return (
                      <Fragment key={work._key}>
                        <LightTooltip
                          title={workDesc}
                          TransitionComponent={Zoom}
                          TransitionProps={{ timeout: 500 }}
                        >
                          <motion.div
                            whileInView={{ opacity: [0, 1] }}
                            transition={{ duration: 0.5 }}
                            className='app__skills--experience-work'
                            data-tip
                            data-for={work.name}
                            key={work.name}
                          >
                            <h4 className='bold-text'>{work.name}</h4>
                            <p className='p-text'>{work.company}</p>
                          </motion.div>
                        </LightTooltip>
                      </Fragment>
                    );
                  })}
                </motion.div>
              </motion.div>
            ))}
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__whitebg'
);
