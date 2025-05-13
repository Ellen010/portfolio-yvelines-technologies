const Alert = ({ type, text }) => {
    return (
        <div className="alert-container">
            <div
                className="alert-div success lg"
                role="alert">
                <p className="alert-sign success">
                </p>
                <p className="alert-p">{type === 'danger' ? 'Failed' : 'Success'}: {text}</p>
            </div>
        </div>
    );
};

export default Alert;