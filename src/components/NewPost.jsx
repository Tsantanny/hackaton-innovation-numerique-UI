import "../styles/NewPost.css";
import { useState } from "react";
import { useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
function NewPost() {
  const popUpRef = useRef(null);
  const [isUpdating, setIsUpdating] = useState(true);
  const darkBackground = isUpdating
    ? "pop-up-container darkBackground"
    : "pop-up-container";

  return (
    <div className={darkBackground}>
      <AnimatePresence>
        {isUpdating && (
          <motion.div
            ref={popUpRef}
            initial={{ y: -250 }}
            animate={{ y: 0 }}
            exit={{ y: -250 }}
            transition={{ duration: 0.2 }}
            className="update-pop-up"
          >
            <button
              className="close bg-danger"
              onClick={() => setIsUpdating(false)}
            >
              <i className="fa fa-close"></i>
            </button>
            <div className="container field">
              <input
                type="text"
                className="form-control mb-4 mt-3"
                placeholder="post title"
              />

              <div className="mb-3 d-flex gap-3">
                <label className="form-check-label">Category:</label>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="category"
                    id="environment"
                    value="environment"
                  />
                  <label className="form-check-label" htmlFor="environment">
                    Environment
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="category"
                    id="health"
                    value="health"
                  />
                  <label className="form-check-label" htmlFor="health">
                    Health
                  </label>
                </div>
              </div>

              <textarea
                className="form-control"
                placeholder="description"
                rows="4"
              ></textarea>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
export default NewPost;
