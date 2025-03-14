import { faFacebookF, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialMediaLink = () => {
  return (
    <>
      <a className="mx-3" href="#" target="_blank">
        <FontAwesomeIcon icon={faFacebookF} />
      </a>
      <a className="mx-3" href="#" target="_blank">
        <FontAwesomeIcon icon={faTwitter} />
      </a>
    </>
  );
};

export default SocialMediaLink;
