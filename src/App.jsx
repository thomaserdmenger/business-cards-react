import * as React from "react";

import Card from "./components/Card";
import "./styles.css";

export default function App() {
  const [id, setId] = React.useState(1);
  const [user, setUser] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState("");

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );

        if (!response.ok) {
          const errorMessage = `There is a network error: ${response.status}`;
          throw new Error(errorMessage);
        }

        const data = await response.json();
        setUser(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  console.log(id);

  const handleNextUser = () => {
    if (id < 10) {
      setId((prevId) => prevId + 1);
    }
  };

  const handlePrevUser = () => {
    if (id > 1) {
      setId((prevId) => prevId - 1);
    }
  };

  if (loading && !error) {
    return <p>Loading ...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <main>
      <Card
        user={user}
        handleNextUser={handleNextUser}
        handlePrevUser={handlePrevUser}
      />
    </main>
  );
}
