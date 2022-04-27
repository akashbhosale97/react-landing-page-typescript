import React, { useEffect, useState } from "react";
import "./contact.css";
import { getEntryByURL } from "../helpers/index";

const Contact = () => {
  const [contact, setContact] = useState<any>([]);

  const fetchData = async () => {
    const result: any = await getEntryByURL("Page", []);
    setContact(result.pages[2].contact);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      {contact.length === 0 ? (
        "loading"
      ) : (
        <div className="container" style={{ paddingTop: "80px" }}>
          <div
            className="row"
            style={{ marginBottom: "100px", minHeight: "70vh" }}
          >
            <div className="col-lg-6">
              <h1 className="my-lg-5 my-4 contacttitle">
                {contact.contact_title}
              </h1>
              <p className="contactcontent my-lg-2 my-4">
                {contact.contact_content}
              </p>
            </div>
            <div className="col-lg-6">
              <form>
                <input
                  type="text"
                  placeholder={contact.name_placeholder}
                  className="w-100 my-lg-4"
                />
                <input
                  type="email"
                  placeholder={contact.email_placeholder}
                  className="w-100 my-lg-4"
                />
                <textarea
                  className="w-100 my-lg-4"
                  placeholder={contact.message_placeholder}
                />
                <button
                  className="btn btn-primary btnbgcolor px-lg-3 py-lg-2 py-sm-0 px-sm-0"
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                >
                  {contact.sendmsg_btn}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Contact;
