import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faYoutube,
  faInstagram,
  faTiktok,
  faSpotify,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer>
      Copyright 2021
      <div className="icons">
        <a href="https://youtube.com/@mywork-man">
          <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>
        </a>
        <a href="https://www.instagram.com/myworkman0/">
          <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
        </a>
        <a href="https://www.tiktok.com/@my.work.man?_t=8Z3CIySPyju&_r=1">
          <FontAwesomeIcon icon={faTiktok}></FontAwesomeIcon>
        </a>
        <a href="https://open.spotify.com/show/0uA7bOC6sQu0Ev2KKlTgSr?si=TldPZIXgRHicqB88qbrsmA">
          <FontAwesomeIcon icon={faSpotify}></FontAwesomeIcon>
        </a>
        <a
          href="https://audiomack.com/my-work-man/song/my-work-man-show-ep-one-audio"
          className="audioMack"
        >
          <img src="/audiomack.svg"></img>
        </a>
      </div>
      <p>apologies for the poor ui site is still under developrment</p>
    </footer>
  );
};

export default Footer;
