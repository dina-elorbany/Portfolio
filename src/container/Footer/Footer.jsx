import React, { useState } from 'react';
import { AppWrap, MotionWrap } from '../../wrapper';
import useMediaQuery from '@mui/material/useMediaQuery';

import { client } from '../../client';
import { images } from '../../constants';
import { SocialMedia } from '../../components';

import './Footer.scss';

const Footer = () => {
  const matches = useMediaQuery('(max-width:500px)');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: formData.username,
      email: formData.email,
      message: formData.message,
    };

    client
      .create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch(err => console.error(err));
  };

  return (
    <>
      <h2 className='head-text'>Take a coffee & chat with me</h2>

      <div className='app__footer--cards'>
        <div className='app__footer--cards-card'>
          <a href='mailto:dina.elorbany@outlook.com'>
            <div>
              <img src={images.email} alt='Email' />
              <p className='p-text'>dina.elorbany@outlook.com</p>
            </div>
          </a>
        </div>

        <div className='app__footer--cards-card'>
          <a
            href='tel:+201004521046
'
          >
            <div>
              <img src={images.phone} alt='Phone' />
              <p className='p-text'>+20 100 452 1046</p>
            </div>
          </a>
        </div>
      </div>

      {!isFormSubmitted ? (
        <form
          action='mailto:dina.elorbany@outlook.com'
          method='post'
          encType='text/plain'
          className='app__footer--form app__flex'
        >
          <div className='app__flex'>
            <input
              className='p-text'
              type='text'
              placeholder='Your Name'
              name='username'
              value={username}
              onChange={handleChangeInput}
            />
          </div>

          <div className='app__flex'>
            <input
              className='p-text'
              type='email'
              placeholder='Your Email'
              name='email'
              value={email}
              onChange={handleChangeInput}
            />
          </div>

          <div>
            <textarea
              className='p-text'
              placeholder='Your Message'
              value={message}
              name='message'
              onChange={handleChangeInput}
            />
          </div>

          <button type='submit' className='p-text' onClick={handleSubmit}>
            {!loading ? 'Send Message' : 'Sending...'}
          </button>
        </form>
      ) : (
        <div>
          <h3 className='head-text'>Thank you for getting in touch!</h3>
        </div>
      )}

      <div className='app__footer--social'>{matches && <SocialMedia />}</div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__primarybg'
);
