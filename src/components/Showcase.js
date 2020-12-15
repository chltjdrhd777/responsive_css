import React from "react";
import "scss/Showcase.scss";
import { Link } from "@material-ui/core";

function Showcase() {
  return (
    <section className="showcase">
      <article className="container">
        <div className="showcase_text">
          <h1>Hello there</h1>
          <p>
            English is a West Germanic language first spoken in early medieval
            England which eventually became the leading language of
            international discourse in today's world. English is ...
          </p>
          <Link href="/features" className="btn btn_outline">
            Read More
          </Link>
        </div>

        <div className="showcase_form">
          <h2>Request a Demo</h2>
          <form>
            <div className="form_control">
              <input type="text" name="name" placeholder="Name" required />
            </div>

            <div className="form_control">
              <input
                type="text"
                name="company"
                placeholder="Company Name"
                required
              />
            </div>

            <div className="form_control">
              <input type="email" name="email" placeholder="Email" required />
            </div>

            <input type="submit" value="Send" className="btn btn-primary" />
          </form>
        </div>
      </article>
    </section>
  );
}

export default Showcase;
