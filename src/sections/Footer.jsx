const Footer = () => {
    return (
        <footer className="c-space pt-32 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
            <div className="text-white-500 flex gap-2">
                <p>Terms & Conditions</p>
                <p>|</p>
                <p>Privacy Policy</p>
            </div>

            <div className="flex gap-3">
                <div className="social-icon">
                    <a href="https://github.com/Ellen010" target="_blank" rel="noopener noreferrer">
                    <img src="/assets/github.svg" alt="github" className="w-5/6 h-5/6" />
                    </a>
                </div>
                <div className="social-icon">
                    <a href="https://www.linkedin.com/in/elena-welty-422a02177/" target="_blank" rel="noopener noreferrer">
                    <img src="/assets/linkedin.svg" alt="linkedin" className="w-5/6 h-5/6" />
                    </a>
                </div>
                <div className="social-icon">
                    <a href="https://huggingface.co/Ellen010" target="_blank" rel="noopener noreferrer">
                    <img src="/assets/higgingface.svg" alt="higgingface" className="w-2/3 h-2/3" />
                    </a>
                </div>
            </div>

            <p className="text-white-500">© 2025 Yvelines Technologies. All rights reserved.</p>
        </footer>
    );
};

export default Footer;