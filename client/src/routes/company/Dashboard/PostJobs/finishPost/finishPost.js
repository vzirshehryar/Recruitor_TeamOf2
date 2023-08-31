import "./finish.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function FinishPost() {
    const navigate = useNavigate();

    function NextPage(e) {
        e.preventDefault();
        console.log("Running");
        navigate("/companydashboard");
    }

    return (
        <div>
            <div className="parent-Container">
                <div className="Header">Header</div>
                <div className="finishPost-Title">
                    Welcome to the Step200 Employer Center!
                </div>
                <div className="finishPost-SubText">
                    Your account was created and you’re one step closer to
                    hiring the workers you need. ou can now create a hub and
                    manage candidates. Any job listings you create will activate
                    once your organization is approved.
                </div>
                <div className="finishPost-Next">Next Steps</div>
                <div className="finishPost-review">
                    Step200 is reviewing your organization for approval
                </div>
                <div className="finishPost-review-sub">
                    Once your organization is approved, your jobs will be
                    visible to members. This process
                    <br /> usually takes 1 business day.
                </div>
                <div className="finishPost-review">
                    Sponsor your job to start getting candidates
                </div>
                <div className="finishPost-review-sub">
                    Once you’ve created a job, it’s time to start attracting
                    candidates. Click the
                    <br /> sponsorship button on your listing to set your budget
                    and get your posting to the top
                    <br /> of search results.
                </div>
                <div className="finishPost-Button-Container">
                    <button
                        className="finishPost-Continue-Button"
                        onClick={NextPage}
                    >
                        Continue To Employee Center
                    </button>
                </div>
            </div>
        </div>
    );
}
export default FinishPost;
