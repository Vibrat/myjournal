---
title: "Basic matrix operation in numpy"
images: ["/docs/python/basic-matrix-operation-in-numpy.png"]
description: "Getting to know basic opreation in numpy and how to map it with conventional matrix operation in mathematics"
---

# Basic matrix operation in numpy

## Introduction

`numpy` is a great tool for performing matrix multiplication. Ever since changing from doing math on handwriting to using `python`, you often experience trouble finding how to different matrix/ arrat operation on numpy, and how to map it to mathematics. This turorial helps to:

* Guide you over basic on how `numpy` array works.
* Understand three different operation of matrix operation in `numpy`: **element-wise**,**matrix product**, and **dot product**

## How numpy array works

In a general terms, `numpy` array can be interpreted as multidimensional array which all elements having the same data type. This seems not pretty much different compared to normal `python` array, but the reason behind is that `numpy` array is built on the purpose of efficient operation (loop, matrix operation, slicing, ...) which is better than `python` array in some cases, and `numpy` has a great support for `linear algebra`, `statistic` operations which is suitable for data science jobs.

Let first compare performace of `python` and `numpy` array over a sum of looping 10000 items.


```python
# sum 10000 item using python array
py_array = range(0, 10000, 1)
%timeit -n 10000 sum(py_array)
```

    181 µs ± 6.05 µs per loop (mean ± std. dev. of 7 runs, 10000 loops each)



```python
import numpy as np

# sum 10000 items using numpy array
np_array = np.arange(0, 10000, 1)
%timeit -n 10000 np.sum(np_array)
```

    7.26 µs ± 364 ns per loop (mean ± std. dev. of 7 runs, 10000 loops each)


You can see clearly that `numpy` array performs better than `180/7.28 = 24.725` times than `python` array in this case.

Now, let's also check another case where we should use `python` array instead:


```python
%%timeit

def run_array(l):
    response = 1
    for i in py_array:
        response *= i
    return response

py_array = range(1, 10001, 1)
res = run_array(py_array)
```

    20 ms ± 555 µs per loop (mean ± std. dev. of 7 runs, 10 loops each)



```python
%%timeit
import numpy as np

# perf: numpy array
def run_array(l):
    response = 1
    for i in py_array:
        response *= i
    return response

np_array = np.arange(1, 10001, 1)
res = run_array(np_array)
```

    395 µs ± 2.99 µs per loop (mean ± std. dev. of 7 runs, 1000 loops each)


As you can see, the performance over a trivial case which loops over each item is better in `python` array. In fact, when using `numpy` array you will also have to retain a fixed array of data type, while in `python` array you can store values of multiple data types (`int`, `float`, ...). In general:

* Using `numpy` array when you can vectorize your computation.
* Using `python` array when you have trivial tasks, check some condition, append some value, ...

## Three different matrix operations in numpy

`numpy` supports three different types of matrix operation:

* Element-wise product, denotes `A * B`
* Matrix product, denotes `A @ B`
* and matrix dot product, denotes `A.dot(B)`

### Element-wise product

This operation is also called Hadamard product, Schur product, entrywise product, and in mathematics, it's denoted as $ \circ $. This can be understood as `same index multiplication`, for example:

$$
\begin{bmatrix}
a_{11} & a_{12} & a_{13} & ... & a_{1n} \newline
a_{21} & a_{22} & a_{23} & ... & a_{2n} \newline
a_{n1} & a_{n2} & a_{n3} & ... & a_{nn}
\end{bmatrix} 
\circ
\begin{bmatrix}
b_{11} & b_{12} & b_{13} & ... & b_{1n} \newline
b_{21} & b_{22} & b_{23} & ... & b_{2n} \newline
b_{n1} & b_{n2} & b_{n3} & ... & b_{nn}
\end{bmatrix}  = 
\begin{bmatrix}
a_{11}b_{11} & a_{12}b_{12} & a_{13}b_{13} & ... & a_{1n}b_{1n} \newline
a_{21}b_{21} & a_{22}b_{22} & a_{23}b_{23} & ... & a_{2n}b_{2n} \newline
... & ... & ... & ... & ... \newline
a_{n1}b_{n1} & a_{n2}b_{n2} & a_{n3}b_{n3} & ... & a_{nn}b_{nn}
\end{bmatrix}
$$

Let do an example in `numpy`


```python
import numpy as np

A = np.array([
    [1, 2, 3],
    [4, 5, 6]
])

B = np.array([
    [3, 2, 1],
    [5, 4, 3]
])

C = A * B

print("Example C = A * B")
print(C)
```
    Example C = A * B
    [[ 3  4  3]
     [20 20 18]]


### Matrix product and matrix dot product

My experience with `numpy` was really confusing on how to map normal matrix multiplication which i use in my handwritting to an appropriate opration in `numpy`. Basically there are two options for it: matrix product `@` and matrix dot product (`.dot`). The operation of those two is different as follows:

* In two dimensional array, both `@` and `.dot` perform the same operation which is normal matrix multiplication.
* In higher dimensional array ($ n >= 3 $), they perform slightly different:
    * For `@`, it is treated as a stack of matrices residing in the last two indices and broadcast accordingly.
    * For `.dot`, it is a sum product over the last axis of a and the second-to-last of b.

Let first take an example of 2 dimensional array to see they generate the same result as matrix multiplication


```python
import numpy as np

A = np.array([
    [1, 2, 3],
    [4, 5, 6]
])

B = np.array([
    [3, 2],
    [5, 4],
    [1, 3]
])

print(f"Example: @ operation of {A.shape} x {B.shape}")
C = A @ B
print(f"A @ B equal \n{C}")

print(f".dot operation of {A.shape} and {B.shape}")
D = A.dot(B)
print(f"A.dot(B) equal \n{D}")
```

    Example: @ operation of (2, 3) x (3, 2)
    A @ B equal 
    [[16 19]
     [43 46]]
    Example: .dot operation of (2, 3) and (3, 2)
    A.dot(B) equal 
    [[16 19]
     [43 46]]


The result is the same of the below two matrix multiplications:
    
$$
\begin{bmatrix}
1 & 2 & 3 \newline
4 & 5 & 6 
\end{bmatrix}
\begin{bmatrix}
3 & 2 \newline
5 & 4 \newline
1 & 3
\end{bmatrix} = 
\begin{bmatrix}
1x3 + 2x5 + 3x1 & 1x2 + 2x4 + 3x3 \newline
4x3 + 5x5 + 6x1 & 4x2 + 5x4 + 6x3 
\end{bmatrix} = 
\begin{bmatrix}
16 & 19 \newline
43 & 46
\end{bmatrix}
$$

And, Let take an example in 3 dimensonal array shape `(2, 2, 3)` and `(2, 3, 2)`


```python
import numpy as np

A = np.array([
    [
        [1, 2, 3],
        [4, 5, 6]
    ],
    [
        [3, 3, 1],
        [1, 2, 4]
    ]
])

B = np.array([
    [
        [1, 2],
        [3, 4],
        [5, 6]
    ],
    [
        [5, 6],
        [3, 4],
        [1, 2]
    ]
])
print("-" * 50)
print(f"Shape of matrix A = {A.shape} and B = {B.shape}")
print("-" * 50)

C = A @ B
print(f"Result of A @ B equal \n{C} with shape {C.shape}")
print("-" * 50)

D = A.dot(B)
print(f"Result of A.dot(B) equal \n{D} with shape {D.shape}")
print("-" * 50)
```

    --------------------------------------------------
    Shape of matrix A = (2, 2, 3) and B = (2, 3, 2)
    --------------------------------------------------
    Result of A @ B equal 
    [[[22 28]
      [49 64]]
    
     [[25 32]
      [15 22]]] with shape (2, 2, 2)
    --------------------------------------------------
    Result of A.dot(B) equal 
    [[[[22 28]
       [14 20]]
    
      [[49 64]
       [41 56]]]
    
    
     [[[17 24]
       [25 32]]
    
      [[27 34]
       [15 22]]]] with shape (2, 2, 2, 2)
    --------------------------------------------------


You can see that they're generating different results. Turns out:

In `@` case, it's comprised of two matrix operation:

$$
\begin{bmatrix}
1 & 2 & 3 \newline
4 & 5 & 6
\end{bmatrix} 
\begin{bmatrix}
1 & 2 \newline
3 & 4 \newline
5 & 6
\end{bmatrix} = 
\begin{bmatrix}
22 & 28 \newline
49 & 64 
\end{bmatrix}
$$

and 

$$
\begin{bmatrix}
3 & 3 & 1 \newline
1 & 2 & 4
\end{bmatrix} 
\begin{bmatrix}
5 & 6 \newline
3 & 4 \newline
1 & 2
\end{bmatrix} = 
\begin{bmatrix}
25 & 32 \newline
15 & 22 
\end{bmatrix}
$$

In `.dot` case, the operation acts like nested looping over dimensions that are greater than `2` and performs vector product from each associated row and column for last second dimensions. The below is a simulation on how this operation would work in 3 dimensional array.

```python
matrix_result = np.empty([2, 2, 2, 2])
for matrix_A_id, matrix_A in enumerate(A):
    for row_A_id, row_A in enumerate(matrix_A):
        for matrix_B_id, matrix_B in enumerate(B):
             for col_B_id, col_B in enumerate(matrix_B.T):
                    matrix_result[matrix_A_id, matrix_B_id, row_A_id, col_B_id ] = row_A * col_B
```

## References

* [Numpy quickstart](https://numpy.org/devdocs/user/quickstart.html#basic-operations)
* [Python Lists vs. Numpy Arrays - What is the difference?](https://webcourses.ucf.edu/courses/1249560/pages/python-lists-vs-numpy-arrays-what-is-the-difference)

