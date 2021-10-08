# Basics

1. What is the Time Complexity of reading an element from array
2. What is  the time Complexity for inserting or deleting a element in the middle of array
3. If we have a random linked list. which one is the best algorithm to sort the linked list
    - What is the Time complexity of that algorithm
4. What if there is no data structure available to you like arrays and if you have to create a queue then in this situation how many stacks are needed?
5. What happens when we add a duplicate key in hashmap?
6. Can we delete the middle element from the odd length stack?
    1. If yes? How do we implement that
7. How can we limit the character of a decimal number upto 2 without using any libraries?
8. Can we create a circular linked list with a doubly linked list? If yes, how can we create it?
9. Which data structure is used in the recursive function to store the return address of the recursive function.
10. Why does the overflow happen in hashing?
11. What is the time complexity of nested for loop?

# **Coding Skills Questions**

### **Question 1**

- Write a function that finds all positive numbers in the integer array that have their opposites in it as well.
    
    Eg:  [-9, 4, -10, 15, 19, -8, -2, 3, 3, 9, -15, 10, -20]
    
    Output : [-15, 15], [-10, 10], [-9, 9]
    

### **Question 2**

- Let’s assume that M is a very large number. Find the number of ways in which you can traverse M meters by doing jumps of 6, 7, 8, 9, or 10 meter lengths.
- What is the time complexity of that algorithm?

# Database ****

## Question 1

Let’s suppose we have three tables in our database

[Supplier](https://www.notion.so/aa9862653f1f44358ebf7423efc77251)

[Parts](https://www.notion.so/a030408d9e304d2c8b6147f051ee5467)

[Catalog](https://www.notion.so/e2c2adfbaf7c44599719c55cf6935073)

### Task:

1. Find the name of the supplier who supplies the part **'motor belt'**.
2. Find the supplier detail who supplies all parts.
3. Find the details of parts supplied by at least two different suppliers.

### SQL Question 2

Consider the following MySQL tables:

```sql
**TABLE TRANSACTION**(

id INT(11) NOT NULL AUTOINCREMENT PRIMARY KEY,
user_id INT(11) NOT NULL Foreign Key to user table,
brand_id INT(11) NOT NULL Foreign key to brand table,
point_value DECIMAL(10,2) NOT NULL DEFAULT 0 #Point value of this transaction. Positive values (including 0) means points are earned and negative value means that the points are redeemed
created_at TIMESTAMP NOT NULL 
	DEFAULT CURRENT_TIMESTAMP
)
```

```sql
**Table USER** (
user_id INT(11) NOT NULL AUTOINCREMENT PRIMARY KEY,
user_name VARCHAR(200) NOT NULL,
email VARCHAR(200) NOT NULL
)
```

```sql
**Table** BRAND (
brand_id INT(11) NOT NULL AUTOINCREMENT PRIMARY KEY,
brand_name VARCHAR(200)
)
```

**Write a single SQL query to get the following information:**

For every user of every brand get:

- Brand Name
- User Name
- Email
- Total points earned till date
- Total points redeemed till date

# Analytical Questions

### Question 1

There is a magic box. The property of this box is that whatever are the contents in this box in the day-time get doubles at every mid-night. On Dec 1, 2010 the box was completely empty. N number of balls of exactly the same dimensions had been put inside the box. After that nothing was taken out and nothing more was put inside the box. So the balls kept on getting doubling every mid-night. On Dec 24, 2010 in the day time the box was exactly 100% full. On which day was it 1/8th full.

### Question 2

There is a Singles table tennis tournament, a total of 32 players participated in the tournament. If a player is eliminated as soon as the player loses a match. How many matches are required to declare the winner?

### Question 3

You have 8 balls all look identical (in shape, color etc.). All of them have same weight except one defective ball which is heavier than others. You can use a two sided balance system (not the electronic one). Find the minimum no. of measures required to separate the defective ball.

### Question 4

Look at this series: 53, 53, 40, 40, 27, 27, ... What number should come next?

- 12
- 14
- 27
- 53

### Question 5

**A is two years older than B who is twice as old as C. If the total of the ages of A, B and C be 27, the how old is B?**

- 7
- 8
- 9
- 10
- 11