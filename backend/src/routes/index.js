const gptRoutes = require("./GPTRoutes");
module.exports = (router) => {
  router.use("/api/v1", gptRoutes());

  return router;
};
