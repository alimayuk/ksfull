const User = require("../models/User");
const { createToken } = require("../util/createToken");
const { verifyHashedData, hashData } = require("../util/hashData");


// login
const login = async (req, res) => {
  try {
    let { username, password } = req.body;
    username = username.trim();
    password = password.trim();

    if (!(username && password)) {
      throw Error("Yanlış bilgi !!");
    }
    const fetchedUser = await User.findOne({ username });
    const tokenData = { userId: fetchedUser._id, username };
    const token = await createToken(tokenData);
    //assing user token
    fetchedUser.token = token;
    const authenticatedUser = await authenticateUser({ username, password });
    res
      .cookie("access_token", token)
      .status(200)
      .json(authenticatedUser);
  } catch (err) {
    res.status(400).json(err.message);
  }
};
//register
const register =  async (req,res)=>{
    try {
        let {username, password} = req.body;
        username = username.trim();
        password = password.trim();
        if(!(username && password)){
            throw Error("Empty input fields!");
        }else if (!/^[a-zA-Z ]*$/.test(username)){
            throw Error("Invalid name entered!");
        }else if (password.length < 8){
            throw Error("short password!");
        }else{
                const newUser = await createNewUser({
                    username,
                    password,
                });
                res.status(200).json(newUser); 
        }
    } catch (err) {
        res.status(400).send(err.message);
    }
};
//logout
const logout = (req,res)=>{
    res.clearCookie("access_token",{
      sameSite: "none",
      secure: true
    }).status(200).json("user hass been logged out.")
  };
  
const authenticateUser = async(data)=>{
    try {
        const {username,password} = data;
        const fetchedUser = await User.findOne({username});
        if(!fetchedUser){
            throw Error("Geçersiz Kullanıcı Adı");
        }
        const hashedPassword = fetchedUser.password;
        const passwordMatch = await verifyHashedData(password,hashedPassword);
        if(!passwordMatch){
            throw Error("Invalid password entered!");
        }
        return fetchedUser;
    } catch (err) {
        throw err; 
    }
}
const createNewUser = async (data)=>{
    try {
        const {username, password} = data;
        const existingUser = await User.findOne({username});

        if(existingUser){
            throw Error("User username already exists");
        }

        const hashedPassword = await hashData(password);
        const newUser = new User({
            username,
            password: hashedPassword,
        });
        const createdUser = await newUser.save();
        return createdUser;
    } catch (err) {
        throw err;
    }
};


module.exports = {login,register,logout}