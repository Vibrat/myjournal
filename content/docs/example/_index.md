---
weight: 1
bookFlatSection: true
title: "Example Site"
images: ["/docs/hugo.png"]
description: "Meta Content for first page"
---
# Understand Machine Learning from theory to algorithms

**PAC**: Probability Approximately Correct, 

**ERM**: Emperical Rish Minimization

Any finite hypothesis class is an `PAC` learnable. We will show that finite class is learnable via `PAC` with general loss functions, as long as range of loss is bounded.

The idea behind is that: given a set of data `S`, hypothesis `H`. For each `s` in `S`, `H` will process `s` and output another `H` which minimize loss (error) that favors sample `S`.

**Definition**: $ \epsilon $-representative

A training set `S` is saied to be $ \epsilon $-representative if:

$ \forall h \in \mathcal{H}, \quad | \mathcal{L}_S(h) - \mathcal{L}_A(h) | \leq \epsilon $

**lemma**: assume that a training set $ \mathcal{S} $ is $ \epsilon / 2 $-representative, with respect to hypothesis $ \mathcal{H} $, distribution $ \mathcal{D} $, loss function $ \mathcal{L} $ and domain $ \mathcal{Z} $, we have:

$ \mathcal{L}_D({h_S}) \leq min(\mathcal{L}_D({H})) + \epsilon $

- Hoeffding: https://www.youtube.com/watch?v=MWcO8ZTOQQQ
- Material learning: https://www.youtube.com/watch?v=2P-yW7LQr08&list=PLUl4u3cNGP6317WaSNfmCvGym2ucw3oGp
- Probability: https://www.youtube.com/watch?v=1uW3qMFA9Ho&list=PLUl4u3cNGP60hI9ATjSFgLZpbNJ7myAg6
- Matrix Method: https://www.youtube.com/watch?v=Cx5Z-OslNWE&list=PLUl4u3cNGP63oMNUHXqIUcrkS2PivhN3k

$ \exists $

## Independent column vectors

Consider a matrix 

$ 
\mathcal{A} = 
\begin{bmatrix}
1 & 1 & 2 \\
2 & 1 & 3 \\
3 & 7 & 10
\end{bmatrix}
$

We can see that matrix $ A $ has three column vectors.

$ 
\mathcal{A_1} = 
\begin{bmatrix}
1 \\
2 \\
3
\end{bmatrix}
\mathcal{A_2} = 
\begin{bmatrix}
1 \\
1 \\
7
\end{bmatrix}
\mathcal{A_3} = 
\begin{bmatrix}
2 \\
3 \\
10
\end{bmatrix}
$

which $ \mathcal{A_1} + \mathcal{A_2} = \mathcal{A_3} $, so we can conclude that matrix $ \mathcal{A} $ has column rank `2`.

**Note**: please note that `column rank` and `matrix rank` are not equal

let define matrix $ \mathcal{C} $ which contains two vectors of columns from $ \mathcal{A} $

$
\mathcal{C} = 
\begin{bmatrix}
1 & 1 \\
2 & 1 \\
3 & 7
\end{bmatrix}
$

we want to decompose matrix $ \mathcal{A} $ as $ \mathcal{A} = \mathcal{C} . \mathcal{R} $

$
\begin{align*}
    \begin{bmatrix}
    1 & 1 & 2 \\
    2 & 1 & 3 \\
    3 & 7 & 10
    \end{bmatrix} =
    & \begin{bmatrix}
    1 & 1 \\
    2 & 1 \\
    3 & 7
    \end{bmatrix} .
    & \begin{bmatrix}
    1 & 0 & 1 \\
    0 & 1 & 1
    \end{bmatrix}
\end{align*}
$

# What is orthogonal matrix

Orthogonal matrix is a a matrix has transpose equal inverse form.

$ A . A^{T} = A . A^{-1} = \mathcal{I} $

Example:

Matrix 

$ 
\mathcal{A} = 
\begin{bmatrix}
\frac{1}{\sqrt{2}} & \frac{1}{\sqrt{2}} \\
-\frac{1}{\sqrt{2}} & \frac{1}{\sqrt{2}}
\end{bmatrix}
$

then its inverse should 

$
A^{-1} = \begin{bmatrix}
\frac{1}{\sqrt{2}} & -\frac{1}{\sqrt{2}} \\
\frac{1}{\sqrt{2}} & \frac{1}{\sqrt{2}}
\end{bmatrix}
$

because 

$
A . A^{-1} = 
\begin{bmatrix}
1 & 0 \\
0 & 1
\end{bmatrix}
$

## what is symetric matrix

Matrix  $ A $ is symmetric iff:

$ A^{T} = A \iff A^{-1}.A^{T} = \mathcal{I} $

## Householder matrix

Ref: https://nhigham.com/2020/09/15/what-is-a-householder-matrix/

`householder` matrix is a $ n x n $ orthogonal matrix with the form:

$ \mathcal{P} = \mathcal{I} - 2\frac{vv^{T}}{v^{T}v}, v \neq 0, v \in R^{n} $

We can see that:

* $ \mathcal{P} $ is orthogonal $ \mathcal{P^{T}} = \mathcal{P^{-1}} $
* $ \mathcal{P} $ is symmetric $ \mathcal{P^{T}} = \mathcal{P} $
* $ \mathcal{P} $ is involuntory $ P^2 = \mathcal{I} $ 

## Similar matrix

Matrix $ \mathcal{B} $ is similar to $ \mathcal{A} $ if B can be defined as: $ \mathcal{B} = \mathcal{M}^{-1}\mathcal{A}\mathcal{M} $

## Symmetric Positive definite matrix

Matrix $ \mathcal{A} $ is `symmetric positive definite` iff:

$ x^TAx > 0 $ for all $ x \neq 0 $ 

or 

$ \lambda_i > 0 $

Properties:

* $ \lambda_i > 0 $
* $ \mathcal{X^TAX > 0} $

## Vectors vs Matrix norm

In general, `norm` is measure to the magnitude of an entity (`vector`, `matrix`). They can have different formulas, but the constraint should be:

* $ || \mathcal{A} > 0 || $ when $ \mathcal{A} \ne 0 $ and $ || \mathcal{A} = 0 || $ when $ \mathcal{A} = 0 $   $
* $ || \mathcal{A} + \mathcal{B} || \leq || \mathcal{A} || + || \mathcal{B} || $

`Vector` norm can be think as a measurement for length of vector, while `matrix` norm  is a measure for magnitude of its matrix to its eigencevector. 

### Vector Norm

There are multiple form for `vector` norm, there are just common forms:

**definition**: Given  $ \vec{u} \in \mathcal{R}^n $, norm of vector $ \vec{u} $, denote $ || \vec{u} || $, is defined as 

$ || \vec{u} ||_2 = \sqrt{\sum_{i=1}^n {u_i^2}} $

**Example**: given a vector 
$
\vec{u} = 
\begin{bmatrix} 
0 & 2 
\end{bmatrix}
$


```python
import numpy as np
import matplotlib.pyplot as plt

u = np.array([
    [0, 0, 1, 2],
    [0, 0, 1, 0],
    [1, 0, 0, 2],
])

fig, ax = plt.subplots()

ax.spines['left'].set_position(("data", 0))
ax.spines['bottom'].set_position(("data", 0))
ax.spines["top"].set_visible(False)
ax.spines["right"].set_visible(False)

ax.quiver(u[:, 0], u[:, 1], u[:, 2], u[:, 3], angles='xy', scale_units='xy', scale=1, label="u")
ax.text(0.2, 0.8, "u = (1, 2)", rotation=45)
ax.text(1.1, 1, "(1, 2)")
ax.text(0.3, -0.4, "(1, 0)")
ax.axis([-0.5, 2, -1, 2.5])

plt.show()
```

As shown in the above chart, we can calculate norm of vector $ \vec{u} $ using pythagone equation:

$
|| \vec{u} ||_2 = \sqrt{\sum_{i=1}^{n}{u_i^2}} = \sqrt{1^2 + 2^2} = \sqrt{5}
$


