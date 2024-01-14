const jwt = require("jsonwebtoken");
const jwtPassword = "secret";
const zod = require("zod");

const emailSchema = zod.string().email();
const passwordSchema = zod.string().min(6);

function signJwt(username, password) {
  const emailResoponse = emailSchema.safeParse(username);
  const passwordResoponse = passwordSchema.safeParse(password);
  if (!emailResoponse?.success || !passwordResoponse?.success) {
    return null;
  }
  const signature = jwt.sign({ username }, jwtPassword);
  return signature;
  // Your code here
}
console.log(signJwt("pavan@gmail.com", "dddddd"));

function verifyJwt(token) {
  // Your code here
  try {
     jwt.verify(token, jwtPassword);
     return true
  } catch (error) {
    return false
  }
  
//   console.log(hello)

}
// verifyJwt(
//     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InBhdmFuQGdtYWlsLmNvbSIsImlhdCI6MTcwNTEyNzIzOX0.K_E1196a_1EswIQVBCJtCb6td_phKSGCtpcvJVNg8go"
//   );
function decodeJwt(token) {
  // Your code here
  const hello = jwt.decode(token);
  console.log(hello);
  if (hello) {
    return true;
  }
  return false;
}

module.exports = {
  signJwt,
  verifyJwt,
  decodeJwt,
  jwtPassword,
};
