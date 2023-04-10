// const getToDos = async () => {
//   const result = await fetch("https://jsonplaceholder.typicode.com/todos")
//     .then((res) => res.json())
//     .then((value) => value);

//   console.log("result", result);

//   return result;
// };

// const groupArrayByUserId = (jsonArray) => {
//   const userIds = new Set(jsonArray.map((jsonArray) => jsonArray.userId));
//   const groupedArrays = Array.from(userIds).reduce((acc, userId) => {
//     acc[userId] = jsonArray.filter((jsonArray) => jsonArray.userId === userId);
//     return acc;
//   }, {});
//   return groupedArrays;
// };

// const secondFunc = async () => {
//   try {
//     const jsonArray = await getToDos();
//     const groupedArrays = groupArrayByUserId(jsonArray);

//     console.log("Grouped jsonArray:", groupedArrays);
//     return groupedArrays;
//   } catch (error) {
//     console.log("Error in secondFunc:", error);
//   }
// };

// secondFunc();

// ////////////////////////////დ  ა  ვ  ა  ლ  ე  ბ  ა  ა ა ა აა ა ა ა
// // set-ით ერთი უნიკალური მნიშვნელობის დატოვება თითოეულ აიდში
// const getToDos = async () =>
//   await fetch("https://jsonplaceholder.typicode.com/todos")
//     .then((res) => res.json())
//     .then((value) => value)
//     .catch((error) => console.error(error));

// const secondFunc = async () => {
//   try {
//     const res = await getToDos();
//     let mySet = [];
//     // console.log(res);
//     mySet = res.map((user) => {user.userId:''});
//     // res.forEach((user) => {
//     //   mySet = [...res, user];
//     // });
//     console.log(mySet);
//   } catch (error) {
//     console.log("ERROR!", error);
//   }
// };
// secondFunc();

// const getToDos = async () =>
//   //
//   await fetch("https://jsonplaceholder.typicode.com/todos")
//     .then((res) => res.json())
//     .then((value) => value)
//     .catch((error) => console.error(error));

// const secondFunc = async () => {
//   try {
//     const res = await getToDos(); //gaaketa return da moaqcia res-shi yvelaferi
//     const mySet = [];
//     //carieli masivi, saboloo shedegebis shesanaxad
//     // masivis elementebis cikli igivea rac forEach
//     for (let user of res) {
//       mySet[user.userId - 1] = [...(mySet[user.userId - 1] || []), user];
//       //mySet-is mimdinare elmentshi vamatebt
//       //mimdinare momxmareblebis  obieqcgtebs da axal momxmarebels
//     }
//     console.log(mySet);
//   } catch (error) {
//     console.log("ERROR! ", error);
//   }
// };
// secondFunc();

const getToDos = async () =>
  await fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res) => res.json())
    .then((value) => value)
    .catch((error) => console.error(error));

const secondFunc = async () => {
  try {
    const res = await getToDos();
    const mySet = [];
    for (let user of res) {
      mySet[user.userId - 1] = [...(mySet[user.userId - 1] || []), user];
    }
    console.log(mySet);
  } catch (error) {
    console.log("Error!", error);
  }
};
secondFunc();

// let a = ["name", "surname"];
// let b = ["age"];

// let c = [...a, ...b];
// console.log(c);
// statusebi like 200-300-400-- 200-300 success, 300-400 redirect, 400+error
//
