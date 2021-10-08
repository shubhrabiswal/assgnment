1. What is the Time Complexity of reading an element from array

ans.  O(1)

2. What is  the time Complexity for inserting or deleting a element in the middle of array

ans. O(n)

3. If we have a random linked list. which one is the best algorithm to sort the linked list

ans. Merge sort 

    - What is the Time complexity of that algorithm

ans. O(nlogn)

4. What if there is no data structure available to you like arrays and if you have to create a queue then in this situation how many stacks are needed?

ans. 2 stacks

5. What happens when we add a duplicate key in hashmap?
6. Can we delete the middle element from the odd length stack?
    1. If yes? How do we implement that

ans. step-1 - find the index of the middle element as Math.ceil(length/2)
     step-2 - take another stack. and a counter
     step-2 - pop element from original stack and push to the new stack   until the counter becomes same as the the middle element length
     step-3 - pop the middle element and push back other elements from stack2 to original stack

7. How can we limit the character of a decimal number upto 2 without using any libraries?
    
ans. 
    step-1 - convert the decimal number to string. Take a temporary variable temp
    step-2 - find the position of the decimal point. save the index as PT
    step-3 - a>check the indexes of all digits if it is less than PT, add it to temp.
        b>If the index of a digit is either 1 or 2 spaces away from PT(i.e. if i==PT+1 or i==PT+2) then add to temp
    step-4 - return temp
8. Can we create a circular linked list with a doubly linked list? If yes, how can we create it?

9. Which data structure is used in the recursive function to store the return address of the recursive function.

ans. stack

10. Why does the overflow happen in hashing?
11. What is the time complexity of nested for loop?

ans. O(n^2)