exports.vaidateFile = (field) => {
  return (req, res, next) => {
    if (!req.files?.[field]) {
      return res.status(411).json({
        status: "error",
        error: {
          message: `the image [ ${field} ] filed is required`,
        },
      });
    }

    next();
  };
};
