import * as React from "react";

import Card from "./components/Card";
import "./styles.css";

export default function App() {
  const [id, setId] = React.useState(1);
  const [user, setUser] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState("");

  React.useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchData = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`,
        { signal }
      );

      const data = await response.json();
      setUser(data);
      setLoading(false);
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, [id]);

  return (
    <main>
      <Card user={user} />
    </main>
  );
}
