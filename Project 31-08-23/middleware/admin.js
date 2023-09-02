
const router = require("../routes/dashboard");

function adminAuth(test) {
  const checkAdmin = test
//   return checkAdmin

console.log(checkAdmin);

    if (checkAdmin) {
        if (checkAdmin == "Admin") {
            return ("Authorized")
        } else {
            return ("Not Authorized")            
        }
    }
    else {
        return ("Not authorized, token not available")            
    }
}

module.exports = adminAuth;