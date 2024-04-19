async function isAdmin(req, res, next) {
  try {
    const authReq = await req.auth.role;
    if (authReq !== "Admin") {
      return res.json({ message: "Turn back, you're not an Admin!" });
    }
    next();
  } catch (err) {
    console.error(err);
    return res.json({ message: "Ups! Something went wrong." });
  }
}

module.exports = isAdmin;
