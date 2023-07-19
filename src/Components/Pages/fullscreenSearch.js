import React from "react";

const FullscreenSearch = () => {

    return (
        <>
            <div className="modal fade" id="searchModal" tabIndex="-1">
                <div className="modal-dialog modal-fullscreen">
                    <div className="modal-content bg-secondary bg-gradient">
                        <div className="modal-header border-0">
                            <button type="button" className="btn bg-white btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body d-flex align-items-center justify-content-center">
                            {/* <div className="input-group" style="max-width: 600px;"> */}
                            <div className="input-group mw-600">
                                <input type="text" className="form-control bg-transparent border-success p-3" placeholder="Type search keyword" />
                                <button className="btn btn-success px-4"><i class="bi bi-search"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FullscreenSearch;