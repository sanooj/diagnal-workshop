import React, { AnchorHTMLAttributes } from "react";

import { To, useNavigate } from "react-router-dom";

/**
 * A custom Link component that wraps the react-router-dom Link
 * component and allows it to accept a number as a "to" prop.
 * @param {React.ReactNode} children The children of the component.
 * @param {To & number} to The location to navigate to. This can be
 * either a string path or a number.
 * @param {AnchorHTMLAttributes<HTMLAnchorElement>} [props] Any other
 * props to be passed to the anchor element.
 * @returns {JSX.Element} The Link component.
 */
const Link = ({
  children,
  to,
  props,
}: {
  children: React.ReactNode;
  to: To & number;
  props?: AnchorHTMLAttributes<HTMLAnchorElement>;
}) => {
  const nav = useNavigate();

  return (
    <a {...props} onClick={() => nav(to)}>
      {children}
    </a>
  );
};

export default Link;
