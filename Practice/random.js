
// function getRandomNumber(min,max){

//     return Math.floor(Math.random() * 100) + 1;

// }
// var a1 = getRandomNumber(1)
// var a2 = getRandomNumber(2)
// var a3 = getRandomNumber(3)

// function sum (a,b,c){
//     return a+b+c
// }
// console.log()
// var sum1 = sum(a1,a2,a3)
// console.log(sum1)
//สุ่มตัวเลขระหว่าง 1-100 โดยใช้การ random
function getRandomNumber(){
    return Math.floor(Math.random() * 100) + 1; 
  }
  
  // เป็น function ไว้รวมผลบวกของค่าที่เราสุ่มมาได้โดยเราเก็บค่าที่สุ่มมาใน a,b,c
  function sum(a,b,c){
  return a+b+c  
  }
  
  // เป็น function ที่ไว้เปรียบเทียบหาค่ามากที่สุด 
  function max(a,b,c){
    if(a>b&&a>c) return a 
  //โดยเปรียบเทียบ a ว่ามากกว่า b เเละ c ไหม ถ้า true จะ return ค่า a ถ้าไม่ใช่จะไปทำบรรทัดต่อไป
    else if(b>a&&b>c) return b
  //เปรียบเทียบ b ว่ามากกว่า a เเละ c ไหม ถ้า true จะ return ค่า b ถ้าไม่ใช่จะไปทำบรรทัดต่อไป
    else if(c>a&&c>b) return c
  //เปรียบเทียบ c ว่ามากกว่า a เเละ b ไหม ถ้า true จะ return ค่า c 
  }
  
  // เป็นfunctionที่ไว้เปรียบเทียบหาค่าน้อยสุด 
  function min(a,b,c){
    if(a<b&&a<c) return a  
  //โดยเปรียบเทียบ a ว่าน้อยกว่า b เเละ c ไหม ถ้า true จะ return ค่า a ถ้าไม่ใช่จะไปทำบรรทัดต่อไป 
    else if(b<a&&b<c) return b 
  //เปรียบเทียบ b ว่าน้อยกว่า a และ c ไหม ถ้า true จะ return ค่า b ถ้าไม่ใช่จะไปทำบรรทัดต่อไป 
    else if(c<a&&c<b) return c 
  //เปรียบเทียบ c ว่าน้อยกว่า a เเละ b ไหม ถ้า true จะ return ค่า c
    }
  
  //เป็น function ที่ใช้เก็บค่าตัวเลขจากการสุ่มไปไว้ในตัวแปร
  //จากนั้นจึงนำไปเข้า function find
  function main(){
    const a = getRandomNumber(); 
  //สุ่มตัวเลขครั้งที่1 โดยใช้ฟังก์ชั่น getRandomNumber() แล้วเก็บไว้ในตัวแปร a
    const b = getRandomNumber(); 
  //สุ่มตัวเลขครั้งที่2 โดยใช้ฟังก์ชั่น getRandomNumber() แล้วเก็บไว้ในตัวแปร b
    const c = getRandomNumber(); 
  //สุ่มตัวเลขครั้งที่3 โดยใช้ฟังก์ชั่น getRandomNumber() แล้วเก็บไว้ในตัวแปร c
    console.log(`number1 is ${a}`) //แสดงค่าตัวเลขที่สุ่มตัวที่ 1 จากตัวแปร a
    console.log(`number2 is ${b}`) //แสดงค่าตัวเลขที่สุ่มตัวที่ 2 จากตัวแปร b
    console.log(`number3 is ${c}`) //แสดงค่าตัวเลขที่สุ่มตัวที่ 3 จากตัวแปร c
    find(a,b,c) //เรียกใช้ฟังก์ชัน find() 
  }
  
  //เป็น function ที่จะนำเลขที่สุ่มเเล้วถูกเก็บไปไว้ในตัวเเปรมาคิดหาค่า SUM,MIN และ MAX
  function find(a,b,c){
    const sum_fin = sum(a,b,c) 
  //คิดหาค่า SUM โดยเรียกใช้ฟังก์ชั่น sum แล้วนำไปใส่ไว้ในตัวแปร sum_fin
    const min_fin = min(a,b,c) 
  //คิดหาค่า MIN โดยเรียกใช้ฟังก์ชั่น min แล้วนำไปใส่ไว้ในตัวแปร min_fin
    const max_fin = max(a,b,c) 
  //คิดหาค่า MAX โดยเรียกใช้ฟังก์ชั่น max แล้วนำไปใส่ไว้ในตัวแปร max_fin
    console.log(`sum is ${sum_fin}`) //แสดงค่า SUM
    console.log(`min is ${min_fin}`) //แสดงค่า MIN
    console.log(`max is ${max_fin}`) //แสดงค่า MAX
  }
  
  main() //เป็นคำสั่งที่เราใช้ในการแสดงผลลัพธ์