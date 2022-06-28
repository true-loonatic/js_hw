//3 

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

function getEnterpriseName(name_e){
    for (let i=0; i<enterprises.length; i++){
        for (let j=0; j<enterprises[i].departments.length; j++){
            if (name_e === enterprises[i].id || name_e === enterprises[i].departments[j].id){
                console.log(enterprises[i].name);
                break;
            } else if (name_e === enterprises[i].name || name_e === enterprises[i].departments[j].name){
                console.log(enterprises[i].name);
                break;
            }

        }

    }

}

getEnterpriseName('Отдел аналитики');
getEnterpriseName('Администрация');
getEnterpriseName(5);
getEnterpriseName(1);
getEnterpriseName(3);

console.log('------------------');

// class Enterprise {
    
//     constractor(id,) {id: Number,
//                 name: "Предприятие 1",
//                 departments: String
//     }
// }

// let n;
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

function addDepartament(id_enterprise, add_name_d){
    let n = 0;
    for (let i=0; i<enterprises.length; i++){
        if (n<=enterprises[i].id){
            n = enterprises[i].id;
            for (let j=0; j<enterprises[i].departments.length; j++){
                if (enterprises[i].departments[j].id>n){
                    n = enterprises[i].departments[j].id;
                }else {
                    n = enterprises[i].id;
                }
            }
        }
    }
    console.log('last for dep', n);
    for (let i=0; i<enterprises.length; i++){
        if (id_enterprise == enterprises[i].id){
            enterprises[i].departments.push({id: n+1, name: add_name_d, employees_count: Number})
        }
    }
    console.log(enterprises); 
    console.log('!dep', n);
}

addDepartament(11, 'Новый департамент');
addDepartament(12, 'Новый департамент2');

console.log('------------------');

// function addDepartament_1(id_enterprise_1, add_name_d_1){
//     let a = enterprises.indexOf(enterprises.id == id_enterprise_1);
//     enterprises[a].departments.push ({id:Number, name: add_name_d_1, employees_count:Number});
//     console.log (enterprises[a].departments);
// }
// addDepartament_1(12, 'Самый новый')

function editEnterprise (edit_id, new_name_e){
    for (let i=0; i<enterprises.length; i++){
        if (enterprises[i].id == edit_id){
            console.log('cтарое = ', enterprises[i]);
            enterprises[i].name = new_name_e;
            console.log('новое = ', enterprises[i]);
        }
    }
}
editEnterprise (1, 'Новое Предприятие 1');

console.log('------------------');

for (let i=0; i<enterprises.length; i++){
    console.log (enterprises[i]);
}

console.log('------------------');

function editDepartments (edit_id_d, new_name_d){
    for (let i=0; i<enterprises.length; i++){
        for (let j=0; j<enterprises[i].departments.length; j++){
        if (enterprises[i].departments[j].id == edit_id_d){
            console.log('cтарое = ', enterprises[i].departments[j]);
            enterprises[i].departments[j].name = new_name_d;
            console.log('новое = ', enterprises[i].departments[j]);
        }
        }
    }
}

editDepartments(7, 'Новое название отдела');