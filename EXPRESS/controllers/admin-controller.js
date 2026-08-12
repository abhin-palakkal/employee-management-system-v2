//import
const Admin = require('../db/models/adminSchema');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//signup admin
module.exports.signupAdmin = async (req, res) => {
  try {
    const { email, name, password } = req.body;
    const admin = await Admin.findOne({ email });
    if (admin) {
      return res.status(409).json({ message: 'email already exists' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    await Admin.create({
      email: email,
      name: name,
      password: hashedPassword,
    });
    return res.status(201).json({ message: 'admin registered successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'internal server error' });
  }
};

//login admin
module.exports.loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res
        .status(401)
        .json({ message: 'email or password is incorrect' });
    }
    const isMatching = await bcrypt.compare(password, admin.password);
    if (!isMatching) {
      return res
        .status(401)
        .json({ message: 'email or password is incorrect' });
    }
    const token = jwt.sign({ id: admin._id, role: 'ADMIN' }, process.env.KEY, {
      expiresIn: '7d',
    });
    return res.status(200).json({
      message: 'admin login successfully',
      token,
      role: 'ADMIN',
      id: admin._id,
    });
  } catch (error) {
    return res.status(500).json({ message: 'internal server error' });
  }
};
