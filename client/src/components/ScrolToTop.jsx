import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrolToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {},[pathname]);
  return null;

} 

export default ScrolToTop;