import "../styles/global-style.css";
import "../styles/Header.css";
import logo from "../assets/images/logo.png";
import NotificationDropdown from "./notification";
import "../styles/NewPost.css";
import { useState } from "react";
import { useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useForm } from "react-hook-form";
import axios from "axios";

function Header() {
  const [isUpdating, setIsUpdating] = useState(false);

  function NewPost() {
    const {
      handleSubmit,
      register,
      formState: { err },
    } = useForm();

    function onAdd(data) {
      console.log(data);
      axios.post("", {
        postId: crypto.randomUUID(),
        ...data,
      });
    }

    const popUpRef = useRef(null);
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
                  {...register("title", {
                    required: true,
                  })}
                />

                <div class="mb-3 d-flex gap-3" {...register("postType")}>
                  <label class="form-check-label">Category:</label>
                  <div class="form-check">
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
                    <label class="form-check-label" for="health">
                      Health
                    </label>
                  </div>
                </div>

                <textarea
                  className="form-control"
                  placeholder="description"
                  rows="4"
                  {...register("description", {
                    required: true,
                  })}
                ></textarea>

                <button className="primary-btn mt-4">Submit</button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }
  const today = new Date();
  const day = String(today.getDate()).padStart(2, "0");
  const month = String(today.getMonth() + 1).padStart(2, "0"); // Les mois sont indexés à partir de 0
  const year = today.getFullYear();

  const formattedDate = `${day}/${month}/${year}`;
  console.log(formattedDate);

  return (
    <>
      <div className="min-container header">
        <div className="d-flex">
          <div className="d-flex gap-4">
            <button className="round-btn box-shadow">
              <i className="fas fa-bars"></i>
            </button>
            <img src={logo} className="dashboard-logo" alt="Logo" />
          </div>
          <div className="search-bar box-shadow">
            <input type="text" />
            <button className="round-btn">
              <i className="fas fa-search"></i>
            </button>
          </div>
          <div className="personnal">
            <button
              onClick={() => setIsUpdating(true)}
              className="round-btn box-shadow"
            >
              <i className="fas fa-plus"></i>
            </button>
            <button className="round-btn box-shadow">
              <i className="fas fa-user"></i>
            </button>

            <NotificationDropdown
              notifications={[
                {
                  content: "content",
                  date: formattedDate,
                },
                {
                  content: "content",
                  date: "date",
                },
                {
                  content: "content",
                  date: "date",
                },
                {
                  content: "content",
                  date: "date",
                },
                {
                  content: "content",
                  date: "date",
                },
              ]}
            />
          </div>
        </div>
      </div>
      <NewPost></NewPost>
    </>
  );
}

export default Header;
