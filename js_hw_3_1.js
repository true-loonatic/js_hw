const enterprises = [
    {
      id: 1,
      name: "Предприятие 1",
      departments: [
        {
          id: 2,
          name: "Отдел тестирования",
          employees_count: 10,
        },
        {
          id: 3,
          name: "Отдел маркетинга",
          employees_count: 20,
        },
        {
          id: 4,
          name: "Администрация",
          employees_count: 15,
        },
      ]
    },
    {
      id: 5,
      name: "Предприятие 2",
      departments: [
        {
          id: 6,
          name: "Отдел разработки",
          employees_count: 50,
        },
        {
          id: 7,
          name: "Отдел маркетинга",
          employees_count: 20,
        },
        {
          id: 8,
          name: "Отдел охраны труда",
          employees_count: 5,
        },
      ]
    },
    {
      id: 9,
      name: "Предприятие 3",
      departments: [
        {
          id: 10,
          name: "Отдел аналитики",
          employees_count: 0,
        },
      ]
    }
  ]

  console.log('------------------');


  for (let i=0; i<enterprises.length; i++){
    let summ = 0;
    for (let j=0; j<enterprises[i].departments.length; j++){
        summ += enterprises[i].departments[j].employees_count; //summ = summ + enterprises[i].departments[j].employees_count
    }
    console.log(enterprises[i].name, '(', summ, 'сотрудников)');
    for (let j=0; j<enterprises[i].departments.length; j++){
        console.log('-', enterprises[i].departments[j].name, '(', enterprises[i].departments[j].employees_count, 'сотрудников)');
    };
}

console.log('------------------');

console.log('------------------');

function getEnterpriseName(name_e){
   let i = enterprises.findIndex((dept) => dept.departments.find(element => 
    element.id == name_e || element.name == name_e));
    console.log(enterprises[i].name);

}
getEnterpriseName(3);
getEnterpriseName('Отдел аналитики');
getEnterpriseName(6);

console.log('------------------');
// function getEnterpriseName_1 (departmentId) {
//     enterprises.filter(function (item) {item.departments.filter(dept => dept.id == departmentId || dept.name == departmentId).filter(dept => console.log(item.name))
//     })
// }

// getEnterpriseName_1(3);
// getEnterpriseName_1('Отдел аналитики');

function addEnterprise(add_name_e){
    let n=0;
    for (let i=0; i<enterprises.length; i++){
        for (let j=0; j<enterprises[i].departments.length; j++){
            if (enterprises[i].departments[j].id>enterprises[i].id){
                n = enterprises[i].departments[j].id;
            }else {
                n = enterprises[i].id;
            }
            
        }
    } 
    console.log('last for Ent', n)
    enterprises.push({id: n+1, name: add_name_e, departments: [{id: Number, name: String, employees_count: Number}]})
    console.log(enterprises)           
}

addEnterprise("Новое предприятие");
addEnterprise("Новое предприятие2");

console.log('------------------');

function addDepartament (id_e, add_name_d){
    let i = enterprises.findIndex((element) => element.id == id_e);
    enterprises[i].departments.push({id: Number, name: add_name_d, employees_count: Number});
    console.log(enterprises[i])
}

addDepartament(1, 'Новый отдел');

console.log('------------------');

// enterprises.forEach(enterprises.id, function)
// console.log(enterprises_temp);

function editEnterprise (id_e, edited_name_e){
    let i = enterprises.findIndex((element) => element.id == id_e);
    enterprises[i].name = edited_name_e;
    console.log(enterprises[i])
}

editEnterprise (1, 'Новое предприятие');

console.log('------------------');

function editDepartments (id_d, edited_name_d){
    let i = enterprises.findIndex((dept) => dept.departments.find(element => 
        element.id == id_d));
    let j = enterprises[i].departments.findIndex(index_d => index_d.id == id_d);
    enterprises[i].departments[j].name = edited_name_d;
    console.log(enterprises[i].departments[j]);
}

editDepartments (7, 'Новый отдел');

console.log('------------------');

function deleteEnterprise (id_e){
    let i = enterprises.findIndex(value_for_index => value_for_index.id == id_e);
    enterprises.splice(i, 1);
    console.log(enterprises);
}

deleteEnterprise(1);

console.log('------------------');

function deleteDepartments (id_d){
    let i = enterprises.findIndex((dept) => dept.departments.find(element => 
        element.id == id_d && element.employees_count > 0));
    let j = enterprises[i].departments.findIndex(index_d => index_d.id == id_d);
    delete enterprises[i].departments[j];
    console.log(enterprises[i].departments);
}

deleteDepartments (7);

console.log('------------------');