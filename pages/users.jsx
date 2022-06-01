import { useState, useEffect } from "react";

import { userService } from "/services/userService";

import DefaultLayout from "/components/DefaultLayout";

export default function Home() {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    userService.getAll().then((x) => setUsers(x));
  }, []);

  return (
    <DefaultLayout title="Logged in!">
      {users && (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.firstName} {user.lastName}
            </li>
          ))}
        </ul>
      )}
      {!users && <div className="spinner-border spinner-border-sm"></div>}
    </DefaultLayout>
  );
}
