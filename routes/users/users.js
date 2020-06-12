module.exports = (req, res) => {
    const models = [
        {
            username: "rithik",
            age: 19
        },
        {
            username: "pragna",
            age:19
        }
    ];
  
    res.status(200).json({ models });
  };