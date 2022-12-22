const { connect } = require('getstream')
const bcrypt = require('bcrypt');
const StreamChat = require('Stream-Chat');
const crypto = require('crypto');

const signup = () => {
    try {
        const {fullName, userName, password} = req.body;

        const userId = crypto

    } catch (error){
        console.log(error);
        res.status(500).json({message: error})
    }

};

const login = () => { 
    try{

    } catch (error){
        console.log(error);
        res.status(500).json({message: error})
    }
};



module.exports = {
    login,
    signup
}