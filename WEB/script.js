function randomTime() {
    hour = Math.round(Math.random()*24);
    minite = Math.round(Math.random()*60);
    var hFormat = (hour<10 ? "0" +hour: ""+hour);
    var mFormat = (minite<10 ? "0"+minite : ""+minite);
    return hFormat+":"+mFormat;

}

function generate_table() {
    if (document.getElementById('from_station').value.length === 0 || document.getElementById('to_station').value.length === 0 )
    {
        alert("Перезагрузите и введите значения")
    }
    else
    {
        var body = document.getElementsByTagName("body")[0];
        var tbl = document.createElement("table");
        var tblBody = document.createElement("tbody");
        var head = document.createElement('tr');
        var th1 = document.createElement('td');
        var th2 = document.createElement('td');
        var th3 = document.createElement('td');
        var th4 = document.createElement('td');
        th1.innerHTML = "Отправление"
        th2.innerHTML = "Прибытие"
        th3.innerHTML = "Время отправления"
        th4.innerHTML = "Цена"
        head.appendChild(th1)
        head.appendChild(th2)
        head.appendChild(th3)
        head.appendChild(th4)
        tblBody.appendChild(head)
        for (var i = 0; i < 8; i++) {
            var row = document.createElement('tr');
            var td1 = document.createElement('td');
            var td2 = document.createElement('td');
            var td3 = document.createElement('td');
            var td4 = document.createElement('td');
            td1.innerHTML = document.getElementById('from_station').value;
            td2.innerHTML = document.getElementById('to_station').value;
            td3.innerHTML = randomTime()
            td4.innerHTML = Math.floor(Math.random() * 1000) + "р";
            row.appendChild(td1);
            row.appendChild(td2);
            row.appendChild(td3);
            row.appendChild(td4);
            tblBody.appendChild(row);
        }
        tbl.appendChild(tblBody);
        body.appendChild(tbl);
        tbl.setAttribute("border", "2");
        tbl.setAttribute( "align", "center");
    }
}

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();
 if(dd<10){
        dd='0'+dd
    }
    if(mm<10){
        mm='0'+mm
    }

today = yyyy+'-'+mm+'-'+dd;
document.getElementById("datee").setAttribute("min", today);