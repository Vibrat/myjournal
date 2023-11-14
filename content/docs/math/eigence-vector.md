# Eigencevectors and eigencevalues.

## Definition

A vector $ \vec{v} $ is said to be an eigencevector of $ A $, if $ A\vec{v} = k\vec{v} $, where $ k $ is constant.

Given matrix

$$
A = \begin{bmatrix}
-6 & 3 \newline
4 & 5
\end{bmatrix}
$$

will have eigenvector $ \vec{v} = \begin{bmatrix} 1 \newline 4 \end{bmatrix} $ because

$$ 
\begin{align*}
A\vec{v} & = \begin{bmatrix} -6 & 3 \newline 4 & 5 \end{bmatrix} \begin{bmatrix} 1 & 4 \end{bmatrix} \newline
         & = \begin{bmatrix} 6 \newline 24 \end{bmatrix} \newline
         & = 6 \begin{bmatrix} 1 \newline 4 \end{bmatrix} = 6 \vec{v}
\end{align*}
$$

Here `6` is the eigenvalue and $ \begin{bmatrix} 1 \newline 4 \end{bmatrix} $ is the eigencevector.

## Intuition

Given `2 by 2` matrix, there will be a maximum of 2 eigenvectors. From the example above, we will also have $ \begin{bmatrix} -3 \newline  1 \end{bmatrix} $ as the second one.

**Note**: Some matrix has orthogonal eigenvectors, some does not have it. 

Eigenvectors can be thought of basis axes (instead of $ \begin{bmatrix} 1 \newline 0 \end{bmatrix} $ and $ \begin{bmatrix} 0 \newline 1 \end{bmatrix} $) of a given matrix, in which each basis contains its own meaning of  the matrix such that later it can be further analysis.

<!-- {{< plotly id="chart-1" data="/docs/math/eigence-vectors/plot-1.json">}} -->

## Calculate eigenvectors

### Using `sympy`

```python
from sympy import *

A = Matrix([
    [-6, 3],
    [4, 5]
])

EigenPairs = A.eigenvects()
"""
[(eigenvalue, algebraic_multiplication, eigenvectors), ...]
"""
```

### Using math

From definition,

$$
\begin{align*}
& A\vec{v} = \lambda\vec{v} \leftrightarrow (A - \lambda I)\vec{v} = \vec{0} \newline
\leftrightarrow & \begin{vmatrix} A - \lambda I \end{vmatrix} = 0 \newline
\leftrightarrow & \begin{vmatrix} -6 - \lambda & 3 \newline 4 & 5 - \lambda \end{vmatrix} = 0 \newline
\leftrightarrow & (\lambda + 6)(\lambda - 5) - 12 = 0 \newline
\leftrightarrow & \begin{cases} \lambda = 6 \newline \lambda = -7 \end{cases}
\end{align*}
$$

- When $ \lambda = 6 $, substitute it to $ (A - \lambda I) \vec{v} = 0  $
  
$$
\begin{align*}
& (\begin{bmatrix} 
-6 & 3 \newline 4 & 5
\end{bmatrix} - \begin{bmatrix} 6 & 0 \newline 0 & 6 \end{bmatrix}) \begin{bmatrix} v_1 \newline v_2 \end{bmatrix} = 0 \newline
\leftrightarrow & \begin{bmatrix} -12 & 3 \newline 4 & -1 \end{bmatrix}  \begin{bmatrix} v_1 \newline v_2 \end{bmatrix} = 0 \newline
\leftrightarrow & \begin{cases} v_1 = 1 \newline v_2 = 4 \end{cases}
\end{align*}
$$

- Similarly, when $ \lambda = -7 $, substitute it to $ (A - \lambda I) \vec{v} = 0  $ and we will have the solution as:

$$
\begin{cases}
v_1 = -3 \newline
v_2 = 1
\end{cases}
$$