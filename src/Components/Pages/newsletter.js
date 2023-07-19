import React from "react";

const Newsletter = () => {

    return (
        <>
            {/* <div className="container-fluid position-relative pt-5 wow fadeInUp" data-wow-delay="0.1s" style="z-index: 1;"> */}
            <div className="container-fluid position-relative pt-5 wow fadeInUp z-1" data-wow-delay="0.1s">
                <div className="container">
                    <div className="bg-success p-5">
                        <form className="mx-auto max-w-150" >
                            <div className="input-group">
                                <input type="text" className="form-control border-white p-3" placeholder="Your Email"/>
                                <button className="btn btn-dark px-4">Sign Up</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Newsletter;