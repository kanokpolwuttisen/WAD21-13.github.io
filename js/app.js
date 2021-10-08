$(document).ready(function () {
    console.log("Tableau Javascript is ready !");
    // $('#dpickold').datepicker({});
    // var tzoffset = (new Date()).getTimezoneOffset() * 60000;
    // var today =(new Date(Date.now() - tzoffset)).toISOString().slice(0, 10)
    // console.log(new Date().toISOString());
    var today = new Date().toISOString().slice(0, 10);
    $('#dpick').val(today);
});

var province_array = [
    ["กรุงเทพมหานคร และ ปริมณฑล", "เขต 13 (สปคม.)", "กรุงเทพมหานคร"],
    ["กรุงเทพมหานคร และ ปริมณฑล", "เขต 4", "นนทบุรี"],
    ["กรุงเทพมหานคร และ ปริมณฑล", "เขต 4", "ปทุมธานี"],
    ["กรุงเทพมหานคร และ ปริมณฑล", "เขต 6", "สมุทรปราการ"],
    ["กรุงเทพมหานคร และ ปริมณฑล", "เขต 5", "สมุทรสาคร"],
    ["กรุงเทพมหานคร และ ปริมณฑล", "เขต 5", "นครปฐม"],
    ["ภาคใต้", "เขต 11", "ภูเก็ต"],
    ["ภาคใต้", "เขต 11", "กระบี่"],
    ["ภาคตะวันตก", "เขต 5", "กาญจนบุรี"],
    ["ภาคตะวันออกเฉียงเหนือ", "เขต 7", "กาฬสินธุ์"],
    ["ภาคเหนือ", "เขต 3", "กำแพงเพชร"],
    ["ภาคตะวันออกเฉียงเหนือ", "เขต 7", "ขอนแก่น"],
    ["ภาคตะวันออก", "เขต 6", "จันทบุรี"],
    ["ภาคตะวันออก", "เขต 6", "ฉะเชิงเทรา"],
    ["ภาคตะวันออก", "เขต 6", "ชลบุรี"],
    ["ภาคกลาง", "เขต 3", "ชัยนาท"],
    ["ภาคตะวันออกเฉียงเหนือ", "เขต 9", "ชัยภูมิ"],
    ["ภาคใต้", "เขต 11", "ชุมพร"],
    ["ภาคเหนือ", "เขต 1", "เชียงใหม่"],
    ["ภาคเหนือ", "เขต 1", "เชียงราย"],
    ["ภาคใต้", "เขต 12", "ตรัง"],
    ["ภาคตะวันออก", "เขต 6", "ตราด"],
    ["ภาคเหนือ", "เขต 2", "ตาก"],
    ["ภาคตะวันออก", "เขต 4", "นครนายก"],
    ["ภาคตะวันออกเฉียงเหนือ", "เขต 8", "นครพนม"],
    ["ภาคตะวันออกเฉียงเหนือ", "เขต 9", "นครราชสีมา"],
    ["ภาคใต้", "เขต 11", "นครศรีธรรมราช"],
    ["ภาคกลาง", "เขต 3", "นครสวรรค์"],
    ["ภาคใต้", "เขต 12", "นราธิวาส"],
    ["ภาคเหนือ", "เขต 1", "น่าน"],
    ["ภาคตะวันออกเฉียงเหนือ", "เขต 8", "บึงกาฬ"],
    ["ภาคตะวันออกเฉียงเหนือ", "เขต 9", "บุรีรัมย์"],
    ["ภาคตะวันตก", "เขต 5", "ประจวบคีรีขันธ์"],
    ["ภาคตะวันออก", "เขต 6", "ปราจีนบุรี"],
    ["ภาคใต้", "เขต 12", "ปัตตานี"],
    ["ภาคกลาง", "เขต 4", "พระนครศรีอยุธยา"],
    ["ภาคเหนือ", "เขต 1", "พะเยา"],
    ["ภาคใต้", "เขต 11", "พังงา"],
    ["ภาคใต้", "เขต 12", "พัทลุง"],
    ["ภาคเหนือ", "เขต 3", "พิจิตร"],
    ["ภาคเหนือ", "เขต 2", "พิษณุโลก"],
    ["ภาคตะวันตก", "เขต 5", "เพชรบุรี"],
    ["ภาคเหนือ", "เขต 2", "เพชรบูรณ์"],
    ["ภาคเหนือ", "เขต 1", "แพร่"],
    ["ภาคตะวันออกเฉียงเหนือ", "เขต 7", "มหาสารคาม"],
    ["ภาคตะวันออกเฉียงเหนือ", "เขต 10", "มุกดาหาร"],
    ["ภาคเหนือ", "เขต 1", "แม่ฮ่องสอน"],
    ["ภาคตะวันออกเฉียงเหนือ", "เขต 10", "ยโสธร"],
    ["ภาคใต้", "เขต 12", "ยะลา"],
    ["ภาคตะวันออกเฉียงเหนือ", "เขต 7", "ร้อยเอ็ด"],
    ["ภาคใต้", "เขต 11", "ระนอง"],
    ["ภาคตะวันออก", "เขต 6", "ระยอง"],
    ["ภาคตะวันตก", "เขต 5", "ราชบุรี"],
    ["ภาคกลาง", "เขต 4", "ลพบุรี"],
    ["ภาคเหนือ", "เขต 1", "ลำปาง"],
    ["ภาคเหนือ", "เขต 1", "ลำพูน"],
    ["ภาคตะวันออกเฉียงเหนือ", "เขต 8", "เลย"],
    ["ภาคตะวันออกเฉียงเหนือ", "เขต 10", "ศรีสะเกษ"],
    ["ภาคตะวันออกเฉียงเหนือ", "เขต 8", "สกลนคร"],
    ["ภาคใต้", "เขต 12", "สงขลา"],
    ["ภาคใต้", "เขต 12", "สตูล"],
    ["ภาคกลาง", "เขต 5", "สมุทรสงคราม"],
    ["ภาคตะวันออก", "เขต 6", "สระแก้ว"],
    ["ภาคกลาง", "เขต 4", "สระบุรี"],
    ["ภาคกลาง", "เขต 4", "สิงห์บุรี"],
    ["ภาคเหนือ", "เขต 2", "สุโขทัย"],
    ["ภาคตะวันตก", "เขต 5", "สุพรรณบุรี"],
    ["ภาคใต้", "เขต 11", "สุราษฎร์ธานี"],
    ["ภาคตะวันออกเฉียงเหนือ", "เขต 9", "สุรินทร์"],
    ["ภาคตะวันออกเฉียงเหนือ", "เขต 8", "หนองคาย"],
    ["ภาคตะวันออกเฉียงเหนือ", "เขต 8", "หนองบัวลำภู"],
    ["ภาคกลาง", "เขต 4", "อ่างทอง"],
    ["ภาคตะวันออกเฉียงเหนือ", "เขต 10", "อำนาจเจริญ"],
    ["ภาคตะวันออกเฉียงเหนือ", "เขต 8", "อุดรธานี"],
    ["ภาคเหนือ", "เขต 2", "อุตรดิตถ์"],
    ["ภาคกลาง", "เขต 3", "อุทัยธานี"],
    ["ภาคตะวันออกเฉียงเหนือ", "เขต 10", "อุบลราชธานี"],
    ["ไม่ระบุ", "ไม่ระบุ", "ไม่ระบุ"]
]

function populate_province(filter_type, filter_value) {

    if (filter_value === "") {
        province_array.forEach(function (item, index) {
            console.log(item, index);
            $('#sel-province').append($('<option>', {
                value: item[2],
                text: item[2]
            }));
        });
    } else {
        if (filter_type === "region") {
            province_array.forEach(function (item, index) {
                if (item[0] === filter_value) {
                    console.log(item, index);
                    $('#sel-province').append($('<option>', {
                        value: item[2],
                        text: item[2]
                    }));
                }
            });
        } else if (filter_type === "odpc") {
            province_array.forEach(function (item, index) {
                if (item[1] === filter_value) {
                    console.log(item, index);
                    $('#sel-province').append($('<option>', {
                        value: item[2],
                        text: item[2]
                    }));
                }
            });
        } else {
            province_array.forEach(function (item, index) {
                console.log(item, index);
                $('#sel-province').append($('<option>', {
                    value: item[2],
                    text: item[2]
                }));
            });
        }
    }
}

function populate_text() {
    var province = $("#sel-province").val()
    var region = $("#sel-region").val()
    var odpc = $("#sel-odpc").val()
    var province_string = ""
    if (region !== "" && province !== "") {
        province_string = "<h4>ภูมิภาค : " + region + ", จังหวัด: " + province + "</h4>"
    } else if (odpc !== "" && province !== "") {
        province_string = "<h4>เขตสุขภาพ : " + odpc + ", จังหวัด: " + province + "</h4>"
    } else if (region !== "") {
        province_string = "<h4>ภูมิภาค : " + region + "</h4>"
    } else if (odpc !== "") {
        province_string = "<h4>เขตสุขภาพ : " + odpc + "</h4>"
    } else if (province !== "") {
        province_string = "<h4>จังหวัด: " + province + "</h4>"
    } else {
        province_string = "";
    }
    $("#province-text").html(province_string);
}


function change_filter_province(val) {
    sheet = viz.getWorkbook().getActiveSheet();
    if (val != "") {
        sheet.applyFilterAsync("province", val, tableau.FilterUpdateType.REPLACE);
    } else {
        sheet.applyFilterAsync("province", "", tableau.FilterUpdateType.ALL);
    }
    populate_text();
}

function change_filter_region(val) {

    $("#sel-province").val("");
    $("#sel-odpc").val("");

    sheet = viz.getWorkbook().getActiveSheet();
    if (val != "") {
        sheet.applyFilterAsync("region", val, tableau.FilterUpdateType.REPLACE);
        console.log("Remove Options")
        $("#sel-province option[value!='']").remove();
        console.log("Populate Province for Region : " + val)
        populate_province("region", val)

    } else {
        sheet.applyFilterAsync("region", "", tableau.FilterUpdateType.ALL);
        $("#sel-province option[value!='']").remove();
        console.log("Populate Province")
        populate_province("", "")
    }
    populate_text();
    sheet.applyFilterAsync("province", "", tableau.FilterUpdateType.ALL);
    sheet.applyFilterAsync("region_odpc", "", tableau.FilterUpdateType.ALL);

}

function change_filter_odpc(val) {

    $("#sel-province").val("");
    $("#sel-region").val("");

    sheet = viz.getWorkbook().getActiveSheet();
    if (val != "") {
        sheet.applyFilterAsync("region_odpc", val, tableau.FilterUpdateType.REPLACE);
        console.log("Remove Options")
        $("#sel-province option[value!='']").remove();
        console.log("Populate Province for ODPC : " + val)
        populate_province("odpc", val)


    } else {
        sheet.applyFilterAsync("region_odpc", "", tableau.FilterUpdateType.ALL);

        console.log("Populate Province")
        populate_province("", "")
    }
    populate_text();
    sheet.applyFilterAsync("province", "", tableau.FilterUpdateType.ALL);
    sheet.applyFilterAsync("region", "", tableau.FilterUpdateType.ALL);
}

function change_param_wave(val) {
    console.log(val);
    wb = viz.getWorkbook();
    wb.changeParameterValueAsync("param_wave", val);
}

function change_param_date_range(val) {
    console.log(val);
    wb = viz.getWorkbook();
    wb.changeParameterValueAsync("param_date_range", val);

    if (val !== "") {
        param_string = "ช่วงเวลาในการวิเคราะห์ : " + val;
    }
    $("#param-text").html(param_string);
}

function change_param_date(val) {
    console.log(val);
    var d = new Date(val);
    wb = viz.getWorkbook();
    wb.changeParameterValueAsync("param_date", val);
}