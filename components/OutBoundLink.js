import React from "react";
import Link from "next/link";
import { FiExternalLink } from 'react-icons/fi'; // Replace FiExternalLink with the desired icon from react-icons

const OutboundLink = ({ href, children ,className }) => {
  return (
    <Link className={`text-blue-500 flex items-center ${className}`} target="_blank" href={href} passHref rel="noopener noreferrer">
      <span>{children}</span>
        <span className="ml-2">
          <FiExternalLink />
        </span>
    </Link>
  );
};

export default OutboundLink;