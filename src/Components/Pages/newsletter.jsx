import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import { API_BASE_URL } from "../../config";
import "react-toastify/dist/ReactToastify.css";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    if (!email) {
      toast.error("Please fill out all required fields.", { position: "top-right" });
      return;
    }

    const payload = {
      subscriberEmail: email,
      ownerEmail: "info@elitelisten.com",
    };

    try {
      setLoading(true);
      const response = await axios.post(`${API_BASE_URL}/api/newsletter/subscribe`, payload);
      if (response.status === 200) {
        toast.success(response.data.message, { position: "top-right" });
        setEmail("");
      }
    } catch (error) {
      toast.error("Failed to subscribe!.", { position: "top-right" });
      console.error(error);
    } finally {
      setLoading(false);
    }
    // Simulate subscription success (you can replace with real API call)


    // Reset the input

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
                <button className="btn btn-dark px-4" type="submit" disabled={loading}>
                  {loading ? "Submitting..." : "Sign Up"}
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
