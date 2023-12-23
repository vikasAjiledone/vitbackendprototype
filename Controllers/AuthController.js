import UserModel from "../Models/UserModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

//Login Admin
export const LoginIn = async function (req, res) {
  try {
    const data = req.body;
    const { email, password } = data;
    if (!Object.keys(req.body).length > 0) {
      return res
        .status(400)
        .json({ status: false, message: "Please provide details" });
    }

    if (!email) {
      return res
        .status(400)
        .json({ status: false, message: "Please provide email" });
    }

    if (!password) {
      return res
        .status(400)
        .json({ status: false, message: "Please provide password" });
    }

    const user = await UserModel.findOne({ Email: email });
    if (!user) {
      return res.status(422).json({
        status: false,
        message: "User doesn't exist. Please register first",
      });
    }

    // password compare or not
    const compare = await bcrypt.compare(password, user.Password);
    if (!compare) {
      return res.status(422).json({
        status: false,
        message: "Incorrect password or email",
      });
    }

    const expireTokenDate = new Date();
    expireTokenDate.setDate(expireTokenDate.getDate() + 1);

    const payload = {
      _id: user._id,
    };
    const token = jwt.sign(payload, "VITBACKEND", {
      expiresIn: 86400,
    });

    res.cookie("jwtToken", token, {
      httpOnly: true,
      expires: expireTokenDate,
    });

    return res.status(201).json({
      status: true,
      message: "Login successfully",
      Token: {
        usertoken: token,
        expiry: expireTokenDate,
      },
    });
  } catch (err) {
    return res.status(500).json({ status: false, message: err.message });
  }
};

export const signUp = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(422).json({
        status: false,
        message: "Please provide all the required field.",
      });
    }

    const existingUsername = await UserModel.findOne({ Username: username });

    if (existingUsername) {
      return res
        .status(422)
        .json({ status: false, message: "Username already exists" });
    }

    const existingEmail = await UserModel.findOne({ Email: email });

    if (existingEmail) {
      return res
        .status(422)
        .json({ status: false, message: "Email already exists" });
    }

    const hashPass = await bcrypt.hash(password, 10);

    const newUser = new UserModel({
      Username: username,
      Email: email,
      Password: hashPass,
    });

    const saveUser = await newUser.save();

    if (saveUser) {
      return res
        .status(201)
        .json({ status: true, message: "User Registered successfully." });
    }
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};
