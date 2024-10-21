import { cleanEnv, port, str } from "envalid";

// import dotenv from 'dotenv';
// dotenv.config();
//OR
import 'dotenv/config';


// * export the output of cleanEnv function as the default export
export default cleanEnv(process.env, {
    MONGO_URI: str(),
    PORT: port()
});