---
title: "Derivative of inverse, eigenvalues and singular values"
images: ["/docs/math/derivative-inverse-eigenvalues-singular-values.png"]
description: "Finding derivatives of components of an invertible matrix, given the matrix is known"
---

# Derivative of inverse, eigenvalues and singular values

## Introduction

**Question**: Given an invertible matrix $ A $, how can we find derivatives of:

* $  A^{-1} $: which denotes inverse matrix of $ A $
* $ \lambda $: which denotes eigenvalues of $ A $
* $ \sigma $: which denote singular values of $ A $

Let's start to find the formula for each case.

## Finding derivative of inverse matrix

**Problem**: Given matrix $ A $ subjected to variable $ t $: $ \frac{dA}{dt} $, finding $ \frac{A^{-1}}{dt} $

With two invertible matrices $ A, B $, we have

$ 
B^{-1} - A^{-1} = B^{-1}(A - B)A^{-1} 
$

We can pick any abitrary invertible matrix $ B $. Let takes $ B = A + \nabla A $ and place in the above formula, we have:

$$
\begin{align*}
& (A + \nabla A)^{-1} - A^{-1} = (A + \nabla A)^{-1}(A - B)A^{-1} \newline
\leftrightarrow \quad & \frac{\nabla A^{-1}}{\nabla t} = -(A + \nabla A)^{-1}(\frac{\nabla A}{\nabla t})A^{-1}
\end{align*} 
$$

And as $ \nabla t \to 0 $, we have:

$$
\begin{align*}
& \lim_{\nabla t \to 0 \leftrightarrow \nabla A \to 0 } \frac{\nabla A^{-1}}{\nabla t} = \lim_{\nabla t \to 0 \leftrightarrow \nabla A \to 0 } - (A + \nabla A)^{-1}(\frac{\nabla A}{\nabla t})A^{-1} \newline
\leftrightarrow \quad & \lim_{\nabla t \to 0 \leftrightarrow \nabla A \to 0 } \frac{\nabla A^{-1}}{\nabla t} =  \lim_{\nabla t \to 0} - (A)^{-1}(\frac{\nabla A}{\nabla t})A^{-1} 
\end{align*}
$$

This is equivalent to definition of `derivative` of matrix $  A^{-1} $. So the final answer is:


$$
\frac{d A^{-1}}{dt} = - A^{-1}\frac{dA}{dt}A^{-1} 
$$

## Derivative of eigenvalue $ \lambda $ 

**Problem**: Given matrix $ A $ subjected to variable $ t $, find $ \frac{d \lambda }{dt} $, where  $ \lambda $ is eigenvalue of matrix  $ A $.

Recalling there are two type of eigenvectors: `left` and `right`. The below table shows formula on relationship between eigenvalue $ \lambda $, eigenvector $ x $ and the original matrix $ A $

| Form | Left | Right |
| ---- | ---- | ----- |
| vector | $ y^TA = \lambda y^T $    | $ Ax = \lambda x  $    |
| matrix | $ Y^TA = \Lambda Y^T  $  |   $ AX = X \Lambda    $ |

And: $ Y^TX = I $

Using those formula with a function of $ t $, we have:  

$$
\begin{align*}
& y^T(t) A(t) x(t) = \lambda (t) y^T(t) x(t) \newline
\leftrightarrow \quad & \lambda (t) =  y^T(t) A(t) x(t) 
\end{align*}
$$

So calulate `derivative`, with note that $ y^T(t)x(t) = I $

$$
\begin{align*}
\frac{d \lambda}{dt}
& = \frac{d y^T}{dt} A x(t) + y^T(t) \frac{d A} {dt} x(t) + y^T(t) A(t) \frac{d x}{dt} \newline
& = (\frac{d y^T}{dt} A x(t) + y^T(t) A(t) \frac{d x}{dt} ) + y^T(t) \frac{d A} {dt} x(t) \newline
& = \lambda (t) (\frac{d y^T}{dt} x(t) + y^T(t)\frac{d x}{dt}) + y^T(t) \frac{d A} {dt} x(t) \newline
& = 0 + y^T(t) \frac{d A} {dt} x(t) \newline
& = y^T(t) \frac{d A} {dt} x(t) \newline
\end{align*}
$$

So the final answer is:

$$
\frac{d \lambda}{dt} = y^T(t)\frac{dA}{dt}x(t)
$$

## Derivative of $ \sigma $

**Problem**: Given matrix $ A $ subjected to variable $ t $, finding $ \frac{d(\sigma)}{d(t)} $, which denotes singular values of matrix $ A $.

Recall that $ A $ can be written as SVD form as $ A = U^T \Sigma V $, where  $ U^T $, $ V $ are orthogonal matrices, and $ \Sigma $ is symmetric matrix which contains singular values in diagonal line.

$$
\begin{align*}
A = U \Sigma V^T \leftrightarrow \Sigma = U^TAV
\end{align*}
$$

With a any $ \sigma $ in $ \Sigma $, we have:

$$
\begin{align*}
\frac{d \sigma}{dt} & = \frac{d(u^TAv)}{dt} \newline
& = \frac{du^T}{dt}Av + u^T\frac{dA}{dt}v + u^TA\frac{dv}{dt} \newline
& = \frac{du^T}{df}u\sigma + u^T\frac{dA}{dt}v + \sigma v^T\frac{dv}{dt}
\end{align*}
$$

Recall that $ u^Tu = 0 $ and  $ v^Tv = 0 $ since $ u, v $ are `orthogonal`. Therefore:

$$
\begin{align*}
\frac{d \sigma}{dt} & = \frac{du^T}{df}u\sigma + u^T\frac{dA}{dt}v + \sigma v^T\frac{dv}{dt} \newline
& = 0 + u^T\frac{dA}{dt}v + 0 \newline
& = u^T\frac{dA}{dt}v
\end{align*}
$$

So the final answer is:

$$
\frac{d \sigma}{dt} = u^T\frac{dA}{dt}v
$$
