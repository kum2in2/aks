import React from 'react'

const Counts = () => {
  return (
    <>
        <section id="counts" className="counts">
            <div className="container aos-init aos-animate" data-aos="fade-up">
                <div className="row">
                <div className="col-lg-3 col-md-6">
                    <div className="count-box">
                    <i className="bi bi-emoji-smile" />
                    <span
                        data-purecounter-start={0}
                        data-purecounter-end={232}
                        data-purecounter-duration={0}
                        className="purecounter"
                    >
                        232
                    </span>
                    <p>Happy Clients</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
                    <div className="count-box">
                    <i className="bi bi-journal-richtext" />
                    <span
                        data-purecounter-start={0}
                        data-purecounter-end={521}
                        data-purecounter-duration={0}
                        className="purecounter"
                    >
                        521
                    </span>
                    <p>Projects</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
                    <div className="count-box">
                    <i className="bi bi-headset" />
                    <span
                        data-purecounter-start={0}
                        data-purecounter-end={1463}
                        data-purecounter-duration={0}
                        className="purecounter"
                    >
                        1463
                    </span>
                    <p>Hours Of Support</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
                    <div className="count-box">
                    <i className="bi bi-people" />
                    <span
                        data-purecounter-start={0}
                        data-purecounter-end={15}
                        data-purecounter-duration={0}
                        className="purecounter"
                    >
                        15
                    </span>
                    <p>Hard Workers</p>
                    </div>
                </div>
                </div>
            </div>
            </section>

    </>
  )
}

export default Counts;