import React, { useEffect, useState } from 'react';

const BrowseData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from the server when the component mounts
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3000/data'); // Replace with your actual server URL
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Browse Data</h2>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Slug</th>
            <th>Title</th>
            <th>Image</th>
            <th>Summary</th>
            <th>Instructions</th>
            <th>Creator</th>
            <th>Creator Email</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.slug}</td>
              <td>{item.title}</td>
              <td>{item.image}</td>
              <td>{item.summary}</td>
              <td>{item.instructions}</td>
              <td>{item.creator}</td>
              <td>{item.creator_email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BrowseData;
