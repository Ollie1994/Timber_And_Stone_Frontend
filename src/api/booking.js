import React, { useState } from "react";
import axios from "axios"; 

// https://www.dhiwise.com/post/a-step-by-step-guide-to-understanding-react-post-request

export function Booking() {
    const [formData, setFormData] = useState ({});
    
    const handleBooking = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                "http://localhost:8080/booking",
                formData);
            console.log(response.data);
        } catch {
            console.error("Error posting data:", error);
    }
  };
}