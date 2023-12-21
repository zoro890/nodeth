const fs = require("fs");
const users = JSON.parse(
    fs.readFileSync(`${__dirname}/../dev-data/data/users.json`)
);

exports.login = (req,res)=>{
    const {email , password} = req.body;
    const user = users.find((el) => el.id === id)

    if (!email){
        return res.status(200).json({
            status : "fail",
            message : " Not found user"
        });

    }
    res.status(200).json({
        status: "success",
        data: user,
    });
 if (!password){
 
 const user = users.find((el) => el.id === id)

 if (!password){
     return res.status(200).json({
         status : "fail",
         message : " Not found user"
     });

 }
 res.status(200).json({
     status: "success",
     data: user,
 });
 }

}
exports.getAllUsers = (req, res) => {
    res.status(200).json({
        status: "success",
        result: users.length,
        data: users,
       
    });
};
exports.postNewUser = (req, res) => {
  console.log(req);
    const Newuser = {
        id: users.length,
       ...req.body,
      };
      users.push(Newuser);

      fs.writeFile(
        `${__dirname}/../dev-data/data/users.json`,
        JSON.stringify(users),
        (err) => {
          if (err) {
            return res.status(500).json({
              status: "fail",
              message: "Something went wrong.",
            });
          }
          res.status(200).json({
            status: "sucess",
            message: "Data has been added successfully.",
          });
        }
      );
    };
exports.getUserbyId = (req, res) => {
    const id = parseInt(req.params.id);

    const user = users.find((user) => user.id === id);

    if (!user) {
        return res.status(200).json({
            status: "fail",
            message: "No tour found with that id.",
            data: [],
        });
    }

    res.status(200).json({
        status : "success",
        data : users
    })

   
};

exports.UpdateUserId = (req, res) => {
    const id = parseInt(req.params.id);

    const user = users.find((user) => user.id === id);


    if (!user) {
        return res.status(200).json({
            status: "success",
            message: "No tour found with that id.",
            data: [],
        });
    }

    res.status(200).json({
        status: "success",
        data: user,
    })
}

exports.deleteById = (req,res)=>{
    const id = parseInt(req.params.email);
    
    const user = users.find((user)=> 
        user.id ===id);

        if (!user) {
            return res.status(404).json({
                status: "success",
                message: "No tour found with that id.",
                data: [],
            });
        }
    
        res.status(200).json({
            status: "success",
            data: user,
        })
   
}