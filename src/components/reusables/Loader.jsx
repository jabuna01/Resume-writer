import { Button } from "react-bootstrap";

export default function Loader() {
  return (
    <div className="animation">
      <div className="loading-ani">
        <img src="/resume-gif.gif" alt="loading-animation" />
      </div>
      <Button variant="info" className="mb-3">
        Skip
      </Button>
      <p className="text-muted">
        Press Skip button above to start editing by yourself.
      </p>
    </div>
  );
}
