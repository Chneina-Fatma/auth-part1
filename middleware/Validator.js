const{check,validation}=require("express-Validator");


exports.registerRules=()=>
   [ 
    check("name","name is required").notEmpty(),
    check("lastname","lastname is required").notEmpty(),
    check("email","email is required").notEmpty(),
    check("email","check email egain").isEmail(),
    check("password","password is required").isLength ({
        min:6,
        max:20,
    }),
];

exports.loginRules=()=>
    [ 
    
     check("email","email is required").notEmpty(),
     check("email","check email egain").isEmail(),
     check("password","password is required").isLength ({
         min:6,
         max:20,
     }),
 ];
 

exports.validation=(req,res,next)=>{
    const errors=validationResult(req)
    console.log(errors);

    if (!errors.isEmpty()){
        return res.status(400).send({errors:error.array().map((el)=>{
            msg:el.msg;
        }),
    })
    }
next();
};