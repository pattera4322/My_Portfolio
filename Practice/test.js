//63130500143 พัทธ์ธีรา จงวัฒนานุกูล
//2.1
//เก็บข้อมูลของนักเรียน เป็น object 
//มี object ซ้อนที่เก็บข้อมูลของผลการเรียนในภาคการศึกษาที่ 1/2563 
let student = {
    id: 63130500143,
    name: 'Pattera',
    surname: 'Jongwatananugul',
    term1_2563: {
        //เปลี่ยนเป็นเก็บเป็น array เเยกเเต่ละตัวเเทนเพื่อง่ายในกาารนำไปคำนวณค่ะ
        subject:['GEN101','GEN121','INT100','INT101','INT102','INT114','LNG220'],
        credit:[1,3,3,3,1,3,3],
        grade:['B+','B+','B','C+','B+','B+','C+'],
        score: {
                totalCredit: 17,
                gpax: 3.05
            }
        }
    }
  //  console.log(student);

    

//2.2
//ฟังก์ชันการคำนวณผลรวมของหน่วยกิตทั้งหมด
// credit=[1,3,3,3,1,3,3]
function creditSum(credit) {
    let cre = '';
    let sum = 0;
    for(let c of credit){
        sum += c
        cre += c + ' '
    }
    return 'จำนวนหน่วยกิตที่ลง: '+ cre + 'จำนวนหน่วยกิตทั้งหมด: '+ sum;
}
console.log(creditSum(student.term1_2563.credit));




//2.3
//ฟังก์ชันการคิดเกรดให้เป็นเเต้มคะเเนน
let grade = 'Fa'
function gradeCredit(grade) {
    switch (grade) {
        case 'A':
          scoreGrade = 4;
          break;
        case 'B+':
            scoreGrade = 3.5;
          break;
        case 'B':
            scoreGrade = 3;
          break;
        case 'C+':
            scoreGrade = 2.5;
          break;
        case 'C':
            scoreGrade = 2;
          break;
        case 'D+':
            scoreGrade = 1.5;
          break;
        case 'D':
            scoreGrade = 1;
            break;
        case 'F': case 'Fa': case 'Fe':
            scoreGrade = 0;
            break;
      }
      return scoreGrade;
    }
//console.log(gradeCredit(grade));


//2.4
//ฟังชันก์คิดเเต้มระดับคะเเนน
function scoreSum(){
    let sum = 0;
    for(i = 0 ; i < student.term1_2563.grade.length ; i++ ){
        sum += gradeCredit(student.term1_2563.grade[i]) * student.term1_2563.credit[i];
    }
    return sum;
}
console.log(scoreSum());

//2.5
//

// let student = {
//     id: 63130500143,
//     name: Pattera,
//     surname: Jongwatananugul,
//     term1_2563: {
//         GEN101: [1,'B+'],
//         GEN121: [3,'B+'],
//         INT100: [3,'B'],
//         INT101: [3,'C+'],
//         INT102: [1,'B+'],
//         INT114: [3,'B+'],
//         LNG220: [3,'C+'],
//         creditSum () {return this.GEN101[0] + this.GEN121[0]+this.INT100[0] + 
//             this.INT101[0]+this.INT102[0] + this.INT114[0]+this.LNG220[0]},
//         score: {
//                 totalCredit: creditSum(),
        
//             }
        
//         },
 





//2.3
//2.4
//2.5
//2.6
//2.7
//2.8


