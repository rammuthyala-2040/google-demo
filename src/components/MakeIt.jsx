import React from "react";
import { motion } from "framer-motion";
import "./MakeIt.css"; // Include your CSS file for styling

const MakeIt = () => {
  return (
    <div>
      {/* Heading Section */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="make text-center fw-bold">
          Make it <span className="text-danger">Yours</span> and <br /> take it
          with you
        </h1>
      </motion.div>

      {/* Customise Section */}
      <motion.div
        className="left text-center"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <img
          src="https://www.google.com/chrome/static/images/v2/accordion-timed/themes-mobile.webp"
          alt=""
          className="hover-effect large-image"
        />

        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Customise your Chrome
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Personalise your web browser with themes, dark <br /> mode and other
          options built just for you. <br />
          <span className="text-primary">Explore themes</span>
        </motion.p>
      </motion.div>

      {/* Browse Across Devices Section */}
      <motion.div
        className="d-flex justify-content-around align-items-center p-3"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="leftOne"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1>Browse Across devices</h1>
          <p>
            Sign in to Chrome on any device to access your <br /> bookmarks,
            saved passwords and more.
          </p>
        </motion.div>
        <motion.div
          className="RightOne"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src="https://www.google.com/chrome/static/images/v2/accordion-timed/tab-sync-mobile.webp"
            alt=""
            className="hover-effect large-image"
          />
        </motion.div>
      </motion.div>

      <div>
        <h1 className=" safe text-center text-warning fw-bold">
          Stay<span className=" text-primary p-3 m-3 ">Safe</span>while You Browse
        </h1>
        <img src="https://www.google.com/chrome/static/images/v2/gallery/passwords-fill.webp" alt=""  className=""/>
        
      </div>



      
    

    </div>
  );
};

export default MakeIt;
