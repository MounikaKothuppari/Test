var addBtn = document.createElement("button");
document.body.appendChild(addBtn);
var rmvBtn = document.createElement("button");
document.body.appendChild(rmvBtn);
addBtn.innerHTML = "AddColumn";


rmvBtn.innerHTML = "RemoveColumn";

var popup = document.getElementById("popupID")



addBtn.addEventListener("click", addColumn);


rmvBtn.addEventListener("click", rmvColumn);




var tb1 = document.getElementById("tableID");

var x = document.getElementById("columnID");
var y = document.getElementById("columntypeID");
var z = document.getElementById("editableID");
var addBtnPop = document.getElementById("popupAddColumn");
addBtnPop.addEventListener("click", addColumnPopup);
var row;
var a;


function addColumn() {
    popup.style.display = "block";
    document.getElementById("cover").style.display = "block";

}
var aColumnDetails = [];
function addColumnPopup() {
    var oColumnDetails = {
        "columnName": x.value,
        "columnType": y.value,
        "editable": z.value
    };
    aColumnDetails.push(oColumnDetails);

    row = tb1.insertRow(tb1.rows.length);
    cell1 = row.insertCell(0);
    cell2 = row.insertCell(1);
    cell3 = row.insertCell(2);
    cell4 = row.insertCell(3);
    cell2.innerHTML = oColumnDetails.columnName;
    cell3.innerHTML = oColumnDetails.columnType;
    cell4.innerHTML = oColumnDetails.editable;
    check = document.createElement("input");
    check.setAttribute("type", "checkbox");
    cell1.appendChild(check);
    document.getElementById("popupID").style.display = "none";
    document.getElementById("cover").style.display = "none";

}
  
function rmvColumn() {
 a=tb1.rows.length;

    var lastRow = tb1.rows.length - 1;

    tb1.deleteRow(lastRow);
}



//////////////////////////////////////////////////////////
 var d=document.createElement("input");
  d.setAttribute("type","date");
 
var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; 

    var yyyy = today.getFullYear();
    if(dd<10){
        dd='0'+dd
    } 
    if(mm<10){
        mm='0'+mm
    } 
 var today = dd+'/'+mm+'/'+yyyy;
//////////////////////////////////////////////////
 var bl = document.createElement("INPUT");
    bl.setAttribute("list", "yn");


    var dl = document.createElement("DATALIST");
    dl.setAttribute("id", "yn");


    var op = document.createElement("OPTION");
    op.setAttribute("value", "YES");
     var op1 = document.createElement("OPTION");
    op1.setAttribute("value", "NO");
dl.appendChild(op);
dl.appendChild(op1);
    ///////////////////////////////////////////////////////
var txt1;
var j=0,cell=[];

var tb2=document.createElement("table");
document.body.appendChild(tb2);
var row1=tb2.insertRow(tb2.rows.length);
/*while(j<a)
{
  cell[j]=row1.insertCell(j),j++;
}
cell[0]="";
cell[1]="Column1";
cell[2]="Column2";
cell[3]="Column3";
cell[4]="Column4";*/
celli0 = row1.insertCell(0);
    celli1 = row1.insertCell(1);
    celli2 = row1.insertCell(2);
    celli3 = row1.insertCell(3);
     celli4 = row1.insertCell(4);
    celli0.innerHTML="";
celli1.innerHTML="Column1";
celli2.innerHTML="Column2";
celli3.innerHTML="Column3";
celli4.innerHTML="Column4";
var addRowBtn=document.createElement("button");
addRowBtn.innerHTML="AddRow";
document.body.appendChild(addRowBtn);
addRowBtn.addEventListener("click", addRow);
function addRow(){
row1 = tb2.insertRow(tb2.rows.length);
    cell6 = row1.insertCell(0);
    cell7 = row1.insertCell(1);
    cell8 = row1.insertCell(2);
    cell9 = row1.insertCell(3);
    cell10 = row1.insertCell(4);
   
 
var check1 = document.createElement("input");
    check1.setAttribute("type", "checkbox");

  cell6.appendChild(check1);


}
function fnSwitch(x,y)
{

 switch (x) {
        case 'string':
        y.setAttribute("contenteditable","true");
            break;
        case 'number':
            y.setAttribute("contenteditable","true");
            break;
        case 'date':
y.appendChild(d);
            break;
        case 'boolean':
            y.appendChild(bl),
             y.appendChild(dl);
            break;
              default:

            break;
}}