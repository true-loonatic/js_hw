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

// class Enterprise {
    
//     constractor(id,) {id: Number,
//                 name: "Предприятие 1",
//                 departments: String
//     }
// }

// let n;
function addEnterprise(add_name_e){
    let n;
    for (let i=0; i<enterprises.length; i++){
        for (let j=0; j<enterprises[i].departments.length; j++){
            if (enterprises[i].departments[j].id>enterprises[i].id){
                n = enterprises[i].departments[j].id;
            }else {
                n = enterprises[i].id;
            }
            
        }
    } 
    console.log(n)
    enterprises.push({id: n+1, name: add_name_e, departments: [{id: Number, name: String, employees_count: Number}]})
    console.log(enterprises)           
}

addEnterprise("Новое предприятие");
addEnterprise("Новое предприятие2");
