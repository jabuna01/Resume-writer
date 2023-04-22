import { Button } from "react-bootstrap";

export default function Loader() {
  return (
    <div className="animation">
      <div className="loading-ani">
        <img src="/resume-gif.gif" alt="loading-animation" />
      </div>
    </div>
  );
}
