import { Apiresponse } from "../../utils/ApiResponse.js";

const createUser = async (request, response) => {
  try {
    const { name, email, password } = request.body;
    if (!name || !email || !password || !phone) {
      return response
        .status(400)
        .send(new Apiresponse(400, null, "bad response"));
    }

    const registerUser = await User.create({
      name,
      email,
      password: hashed,
    });
    const token = await jwt.sign(
      { name, email, _id: registerUser._id },
      process.env.jwt_screat,
      { expiresIn: "10m" }
    );

    response
      .status(202)
      .send(new Apiresponse(202, { token }, "user registerd sucessfully"));
  } catch (error) {
    console.log(error);
    response.json.send(new Apiresponse(500, { error }, "error"));
  }
};
