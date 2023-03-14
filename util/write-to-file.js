const fs = require("fs");
const path = require("path");
require("../data/movies.json")
module.exports = (data) => {
    try{
        fs.writeFileSync(
            path.join(
                __dirname, 
                "..",
                "data",
                "movies.json"), 
                JSON.stringify(data),
                "utf-8");
    }
    catch(error){
        console.log(error); 
    }
}