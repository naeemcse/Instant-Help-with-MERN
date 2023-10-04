import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin, FaMobile } from 'react-icons/fa';

const SocialIcons = ({ facebookUrl, githubUrl, linkedinUrl, mobileUrl }) => {
  const openLink = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className="flex justify-center space-x-6 text-2xl m-10">
      <div onClick={() => openLink(facebookUrl)} className="cursor-pointer">
        <FaFacebook />
      </div>
      <div onClick={() => openLink(githubUrl)} className="cursor-pointer">
        <FaGithub />
      </div>
      <div onClick={() => openLink(linkedinUrl)} className="cursor-pointer">
        <FaLinkedin />
      </div>
      <div onClick={() => openLink(mobileUrl)} className="cursor-pointer">
        <FaMobile />
      </div>
    </div>
  );
};

export default SocialIcons;