import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    // Simulate subscription success (you can replace with real API call)
    toast.success("Thank you for subscribing!");

    // Reset the input
    setEmail("");
  };

  return (
    <>
      <div className="container-fluid position-relative pt-5 z-1 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
          <div className="bg-success p-5 rounded shadow">
            <h4 className="text-white mb-4 text-center">Subscribe to Our Newsletter</h4>
            <form className="mx-auto" onSubmit={handleSubscribe} style={{ maxWidth: "600px" }}>
              <div className="input-group">
                <input
                  type="email"
                  className="form-control border-white p-3"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button className="btn btn-dark px-4" type="submit">
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer position="top-right" />
    </>
  );
};

export default Newsletter;
