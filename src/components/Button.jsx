const Button = ({ name, isBeam = false, containerClass }) => {
    return (
        <button className={`btn ${containerClass}`}>
            {isBeam && (
                <span className="btn-section">
          <span className="btn-ping"></span>
          <span className="btn-ping-dot"></span>
        </span>
            )}
            {name}
        </button>
    );
};

export default Button;