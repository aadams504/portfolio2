import React from "react";
import PropTypes from "prop-types";
import AvatarImg from "../assets/avatar-image.png";
import "../styles/avatar.css";

const Avatar = ({ page }) => {
  const avatarClass = `avatar ${page}`;
  const spanClass = `shadow-overlay-${page}`;

  return (
    <>
      <span className={spanClass}></span>
      <img src={AvatarImg} className={avatarClass} alt="avatar" />
    </>
  );
};

export default Avatar;
