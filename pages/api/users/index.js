import { apiHandler } from "/helpers/api/apiHandler";

// TODO: use a database instead
const users = require("data/users.json");

function handler(req, res) {
  switch (req.method) {
    case "GET":
      return getUsers();
    default:
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  function getUsers() {
    // return users without passwords in the response
    const response = users.map((user) => {
      const { password, ...userWithoutPassword } = user;
      return userWithoutPassword;
    });
    return res.status(200).json(response);
  }
}

export default apiHandler(handler);
