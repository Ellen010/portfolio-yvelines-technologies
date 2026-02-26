import { clientReviews } from '../assets/constants/index.js';

const Clients = () => {
    return (
        <section className="c-space my-20">
            <h3 className="head-text mb-5">Recommendations</h3>

            <div className="client-container">
                {clientReviews.map((item) => (
                    <div key={`review-${item.id}`} className="client-review">
                        <div>
                            <p className="text-white-800 font-light">{item.review}</p>

                            <div className="client-content">
                                <div className="flex gap-3">
                                    <img src={item.img} alt="reviewer" className="w-12 h-12 rounded-full" />
                                    <div className="flex flex-col">
                                        <p className="font-semibold text-white-800">{item.name}</p>
                                        <p className="text-white-500 md:text-base text-sm font-light">{item.position}</p>
                                    </div>
                                </div>
                                <a
                                    className="flex items-center gap-2 cursor-pointer text-white-600"
                                    href={item.href}
                                    target="_blank"
                                    rel="noreferrer">
                                    <p>LinkedIn Page</p>
                                    <img src="/assets/arrow-up.png" alt="arrow" className="w-3 h-3" />
                                </a>

                                <div className="flex self-end items-center gap-2">
                                    {Array.from({ length: 5 }).map((_, index) => (
                                        <img key={index} src="/assets/star.png" alt="star" className="w-5 h-5" />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Clients;