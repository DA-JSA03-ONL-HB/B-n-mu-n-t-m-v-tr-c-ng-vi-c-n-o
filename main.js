var task = [
    "làm bài tập về nhà",
    "học thêm môn toán",
    "học thêm môn văn",
    "tập thể dục"
]
//1.in ra tất cả các công việc
function showTask(){
for (let i=0; i<=task.length; i++) {
    console.log(task[i]);
}
}//dòng for trên th là đã in ra đc r
console.log(task)
//2.Thêm 1 công việc vào danh sách trên
function addTask(){
var addTask = prompt("Bạn muốn thêm vào công việc nào")
task.push(addTask);//thêm 1 phần tử vào mảng
showTask("Danh sách công việc mới là: ");
}
addTask
//3.Khi ngưới dùng nhập vào tên công việc, in ra thứ tự công việc mà người dùng đã nhập vào
var searchTask = prompt("Bạn muốn tìm vị trí công việc nào")
var indexTask = task.indexOf(searchTask)+1;
console.log("Vị trí công việc" +searchTask+ "là vì trí số:"+indexTask);
//4.Xoá 1 cocng việc mà người dùng nhập váo ra khỏi danh sách công việc
var task = prompt("Bạn muốn xoá công việc nào")
var indexTask = task.indexOf(deletetask)
task.splice(indexTask,1);
showTask()