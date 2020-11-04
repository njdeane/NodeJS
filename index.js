const fs = require("fs");

fs.copyFileSync("file1.txt", "file2.txt");
// running this file in terminal (node index.html) will copy file1.txt and make a duplicate called file2.txt 