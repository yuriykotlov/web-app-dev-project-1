'use strict';

import express from 'express';
import routes from "./routes.js";
import logger from "./utils/logger.js";
import { create } from 'express-handlebars';
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

const handlebars = create({
  extname: '.hbs', 
    helpers: {
        uppercase: (inputString) => {
            return inputString.toUpperCase();
        },
        getRatingMessage: (rating) => {
            if(rating == 5){
                return "- Most popular choice!";
            } else if(rating < 5 && rating >= 4){
                return "- A popular choice!";
            } else if(rating < 4 && rating >= 3){
                return "- A great option!";
            } else{
                return "";
            }
        },
    },
});
app.engine(".hbs", handlebars.engine);
app.set("view engine", ".hbs");

app.use("/", routes);

app.listen(port, () => logger.info(`Your app is listening on port ${port}`));