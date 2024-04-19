function isAdmin() {
  const authReq = req.auth.role;
  if (authReq !== "Admin") {
    return res.json({ message: "Turn back, you're not an Admin!" });
  }
  next();
}

module.exports = isAdmin;
