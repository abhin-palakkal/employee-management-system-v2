//import
const Employee = require('../db/models/employeeSchema');

//post employee route
module.exports.postEmployee = async (req, res) => {
  try {
    const { name, email, phone, department, position, salary, joiningDate } =
      req.body;
    const employee = await Employee.findOne({ email });
    if (employee) {
      return res.status(409).json({ message: 'email already exists' });
    }
    const newEmployee = await Employee.create({
      name,
      email,
      phone,
      department,
      position,
      salary,
      joiningDate,
    });
    return res
      .status(201)
      .json({ message: 'employee added successfully', newEmployee });
  } catch (error) {
    return res.status(500).json({ message: 'internal server error' });
  }
};

//get employee route
module.exports.getEmployee = async (req, res) => {
  try {
    const employee = await Employee.find();
    return res.status(200).json(employee);
  } catch (error) {
    return res.status(500).json({ message: 'internal server error' });
  }
};

//getbyid employee route
module.exports.getByIdEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    const employee = await Employee.findById(id);
    return res.status(200).json(employee);
  } catch (error) {
    return res.status(500).json({ message: 'internal server error' });
  }
};

//update employee route
module.exports.updateEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;
    const employee = await Employee.findByIdAndUpdate(id, body, { new: true });
    return res
      .status(200)
      .json({ message: 'updated data successfully', employee });
  } catch (error) {
    return res.status(500).json({ message: 'internal server error' });
  }
};

//delete employee route
module.exports.deleteEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    await Employee.findByIdAndDelete(id);
    return res.status(200).json({ message: 'deleted data successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'internal server error' });
  }
};
