const contextName = "http://localhost:3005";

const validate = (phone) => contextName + "/validate/" + phone;
const signUp = contextName + "/signup";
const update = (phone) => contextName + "/updateChange/" + phone;
const history = (phone) => contextName + "/history/" + phone;

export { validate, signUp, update, history };
