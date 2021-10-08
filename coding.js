// ### **Question 1**

// - Write a function that finds all positive numbers 
// in the integer array that have their opposites in it as well.
//     Eg:  [-9, 4, -10, 15, 19, -8, -2, 3, 3, 9, -15, 10, -20]
//     Output : [-15, 15], [-10, 10], [-9, 9]
  
function find_positive(arr){
    let result = []
    for(let num of arr){
        if(Math.sign(num) != -1){
            // console.log(num)
            for(let num2 of arr){
                if(-(num2) == num){
                    let op = []
                    op.push(num2)
                    op.push(num)
                    // console.log(op)
                    result.push(op)
                }
            }
        }
    }
    return result.sort(function(a,b){
        return b[1] - a[1]
    })
    
}

let arr = [-9, 4, -10, 15, 19, -8, -2, 3, 3, 9, -15, 10, -20]
console.log(find_positive(arr))


// ### **Question 2**

// - Let’s assume that M is a very large number. 
// Find the number of ways in which you can traverse M meters by 
// doing jumps of 6, 7, 8, 9, or 10 meter lengths.
// - What is the time complexity of that algorithm?

// [10,9,8,7,6]  100
function find_jump(dist){
    let count = 0 
    // while(dist>0){
        while(Math.floor(dist%10) == 0){
            dist = dist - 10
            count++
        }
        while(Math.floor(dist%9) == 0){
            dist = dist-9
            count++
        }
        while(Math.floor(dist % 8) == 0){
            dist = dist - 8
            count++
        }
        while(Math.floor(dist%7) == 0){
            dist = dist-7
            count++
        }
        while(Math.floor(dist % 6) == 0){
            dist = dist - 6
            count++
        }
        if(dist<5){
            return dist+"count"+count
        }
    // }
    // return dist+"count"+count
}

// console.log(find_jump(100))

// console.log(typeof(10.283))
// let n1=String(10.283)
// let ans =''
// let pt = n1.indexOf('.')
// for(let i=0;i<=n1.length;i++){
//     if(i<=pt || i==pt+1 || i==pt+2){
//         ans=ans+(n1[i])
//     }
// }
// console.log("ans",ans)



