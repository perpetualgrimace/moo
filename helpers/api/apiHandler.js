import { errorHandler } from "/helpers/api/errorHandler";
import { jwtMiddleware } from "/helpers/api/jwtMiddleware";

function apiHandler(handler) {
  return async (req, res) => {
    try {
      await jwtMiddleware(req, res);
      await handler(req, res);
      // catch errors
    } catch (err) {
      errorHandler(err, res);
    }
  };
}

export { apiHandler };
