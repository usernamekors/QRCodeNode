const QR = require("qrcode");
const Excel = require("xlsx");

function createQR(filename, data) {
    try {
        QR.toFile("images/" + filename + ".png", data, { width: 500 });
    } catch (e) {
        console.log("Error creating file: " + filename);
    }
}

const ws = Excel.readFile("inwer.xlsx").Sheets["Sheet1"];
const data = Excel.utils.sheet_to_json(ws);
data.forEach(function(r) {
    createQR(r.Inventory_index + r.Description, r.Lp + '/' + r.Description + '/' + r.Name + '/' + r.ID_employee);
    // createQR(r.Inventory_index, r.Description);
});

//https://www.youtube.com/watch?v=UjJSJAMcD44&ab_channel=LearnGoogleSpreadsheets