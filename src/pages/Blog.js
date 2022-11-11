import React from "react";
import { useTitle } from "../Hooks/useTitle";

const Blog = () => {
  useTitle('Blog')
  return (
    <div className="md:px-20 px-10 lg:w-3/5 mx-auto mt-14">
      <div className="mb-5">
        <h1 className="text-2xl font-bold mb-3">1. What is cors?</h1>
        <p>
          <span className="bg-yellow-500 mr-3 text-white font-semibold px-1">
            Ans :{" "}
          </span>
          Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism
          that allows a server to indicate any origins (domain, scheme, or port)
          other than its own from which a browser should permit loading
          resources. CORS also relies on a mechanism by which browsers make a
          "preflight" request to the server hosting the cross-origin resource,
          in order to check that the server will permit the actual request. In
          that preflight, the browser sends headers that indicate the HTTP
          method and headers that will be used in the actual request.
        </p>
      </div>
      <div className="mb-5">
        <h1 className="text-2xl font-bold mb-3">
          2. Why are you using firebase? What other options do you have to
          implement authentication?
        </h1>
        <p>
          <span className="bg-yellow-500 mr-3 text-white font-semibold px-1">
            Ans :{" "}
          </span>
          The Firebase Realtime Database lets you build rich, collaborative
          applications by allowing secure access to the database directly from
          client-side code. Data is persisted locally, and even while offline,
          realtime events continue to fire, giving the end user a responsive
          experience.
          <br />
          Auth0, MongoDB, Passport, Okta, and Firebase are the most popular
          alternatives and competitors to Firebase Authentication.
          <br />
          Usually, authentication by a server entails the use of a user name and
          password. Other ways to authenticate can be through cards, retina
          scans, voice recognition, and fingerprints.
        </p>
      </div>
      <div className="mb-5">
        <h1 className="text-2xl font-bold mb-3">
          3. How does the private route work?
        </h1>
        <p>
          <span className="bg-yellow-500 mr-3 text-white font-semibold px-1">
            Ans :{" "}
          </span>
          The The private route component is similar to the public route, the
          only change is that redirect URL and authenticate condition. If the
          user is not authenticated he will be redirected to the login page and
          the user can only access the authenticated routes If he is
          authenticated (Logged in).
        </p>
      </div>
      <div className="mb-20">
        <h1 className="text-2xl font-bold mb-3">
          4. What is Node? How does Node work?
        </h1>
        <p>
          <span className="bg-yellow-500 mr-3 text-white font-semibold px-1">
            Ans :{" "}
          </span>
          The Node is an asynchronous event-driven JavaScript runtime. It allows
          developers to write JavaScript code that runs directly in a computer
          process itself instead of in a browser. <br />
          It is a used as backend service where javascript works on the
          server-side of the application. This way javascript is used on both
          frontend and backend. Node. js runs on chrome v8 engine which converts
          javascript code into machine code, it is highly scalable, lightweight,
          fast, and data-intensive.
        </p>
      </div>
      
    </div>
  );
};

export default Blog;
