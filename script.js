

const tableData = [
    [1, 'mohammad', 30],
    [2, 'mohammad', 20],
    [3, 'mohammad', 25],
    [4, 'mohammad', 30],
    [5, 'mohammad', 20],
    [6, 'mohammad', 25],
    [1, 'mohammad', 30],
    [2, 'mohammad', 20],
    [3, 'mohammad', 25],
    [4, 'mohammad', 30],
    [5, 'mohammad', 20],
    [6, 'mohammad', 25],
    [1, 'mohammad', 30],
    [2, 'mohammad', 20],
    [3, 'mohammad', 25],
    [4, 'mohammad', 30],
    [5, 'mohammad', 20],
    [6, 'mohammad', 25],
    [1, 'mohammad', 30],
    [2, 'mohammad', 20],
    [3, 'mohammad', 25],
    [4, 'mohammad', 30],
    [5, 'mohammad', 20],
    [6, 'mohammad', 25]
];


const dataTable = document.getElementById('tbody');
let str = '';



for (let i = 0; i < tableData.length; i++) {

    let class_Name = (i % 2 === 0) ? 'even' : 'odd';


    str += '<tr class="' + class_Name + '"><td>' + tableData[i].join('</td><td>') + '</td></tr>';

}


function fillData() {




    dataTable.innerHTML = str;


}



