import React from 'react';

const Home = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-8 offset-lg-2">
          <h2 className="text-center mb-4">Your Web Client's Home Page</h2>
          <p>
            Welcome to this example of a simple web client built using React.js, React-router-dom, and Bootstrap.
            It is designed to work in conjunction with a Node.js Express REST API web service.
          </p>
          <p>
            Here, you can observe some basic interactions, such as sending data to the server (adding new data to the archive)
            and fetching data from the server (browsing the archive).
          </p>
          <div className="alert alert-info" role="alert">
            <strong>Note:</strong> This is a demonstration website. Make sure to replace this content with your actual information.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
