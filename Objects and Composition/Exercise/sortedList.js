function createSortedList(){
let arr = []
 let obj =   {
    add(element){
arr.push(element)
arr.sort((a,b) => a-b)
 obj.size++
    },
    remove(index){
        if(index >=0 && index < obj.size){
            arr.splice(index,1)
            obj.size--
        }
    },
    get(index){
        return arr[index]
    },
    size : 0
     
 }
 return obj

}
let list = createSortedList();

list.add(5);

list.add(6);
list.add(7); 
console.log(list.get(1));
 list.remove(1);
  console.log(list.get(1));
  console.log(list.size);
