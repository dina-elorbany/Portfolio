import React from 'react';

import { FaLinkedin } from 'react-icons/fa';
import { BsFacebook, BsGithub } from 'react-icons/bs';
import { RiWhatsappFill } from 'react-icons/ri';
import { AiFillFilePdf } from 'react-icons/ai';

const SocialMedia = () => {
  return (
    <div className='app__social'>
      <a
        href='https://drive.google.com/file/d/1TKofErHj3YznQ-cT04Ro90o4vcy2p9YN/view?usp=sharing
'
        target='_blank'
      >
        <div>
          <AiFillFilePdf />
        </div>
      </a>

      <a
        href='https://github.com/dina-elorbany
'
        target='_blank'
      >
        <div>
          <BsGithub />
        </div>
      </a>

      <a
        href='https://www.linkedin.com/in/dina-elorbany/
'
        target='_blank'
      >
        <div>
          <FaLinkedin />
        </div>
      </a>

      <a
        href='https://wa.me/1004521046
'
        target='_blank'
      >
        <div>
          <RiWhatsappFill />
        </div>
      </a>

      {/* <a
        href='https://www.facebook.com/dina.elorbany/
'
        target='_blank'
      >
        <div>
          <BsFacebook />
        </div>
      </a> */}
    </div>
  );
};

export default SocialMedia;
