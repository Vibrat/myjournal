# Derivative of inverse and singular values


## Derivative of inverse

Given matrix $  \mathcal{A(t)} $, how does it relate to $ \mathcal{ A^{-1}(t) } $, in detail:

* Given $ \frac{d(A)}{dt} $, `find` $ \frac{d(A^{-1})}{dt} $

Let start with, 

$ 
B^{-1} - A^{-1} = B^{-1}(A - B)A^{-1} 
$

Which mean $ B^{-1} - A^{-1} $ and $ A - B $ has the same rank (because $ B^{-1}, A^{-1}, A, B $ is invertible (has full rank)). Pick $ B = A + \nabla A $, we have

$$
\begin{align}
& (A + \nabla A)^{-1} - A = (A + \nabla A)^{-1}(A - B)A^{-1} \newline
\leftrightarrow \quad & \frac{\nabla A^{-1}}{\nabla t} = -(A + \nabla A)^{-1}(\frac{\nabla A}{\nabla t})A^{-1}
\end{align} 
$$

And as $ \nabla t \to 0 $, we have:

$
\begin{align}
& \lim_{\nabla t \to 0 \leftrightarrow \nabla A \to 0 } \frac{\nabla A^{-1}}{\nabla t} = \lim_{\nabla t \to 0 \leftrightarrow \nabla A \to 0 } - (A + \nabla A)^{-1}(\frac{\nabla A}{\nabla t})A^{-1} \\
\leftrightarrow \quad & \lim_{\nabla t \to 0 \leftrightarrow \nabla A \to 0 } \frac{\nabla A^{-1}}{\nabla t} =  \lim_{\nabla t \to 0} - (A)^{-1}(\frac{\nabla A}{\nabla t})A^{-1} 
\end{align}
$

This is equivalent to definition of `derivative`:

$$
\frac{d A^{-1}}{dt} = - A^{-1}\frac{dA}{dt}A^{-1} 
$$

## Derivative of eigenvalue $ \lambda $ 

Given eigenvector $ x(t) $ and eigenvalue $ \lambda (t) $:


| Form | Left | Right |
| ---- | ---- | ----- |
| vector | $ y^TA = \lambda y^T $    | $ Ax = \lambda x  $    |
| matrix | $ Y^TA = \Lambda Y^T  $  |   $ AX = X\Lambda    $ |

Also $ \mathcal{ Y^TX = I } $, using those formula with a function of $ t $ we have:  

$$
\begin{align}
& y^T(t) A(t) x(t) = \lambda (t) y^T(t) x(t) \newline
\leftrightarrow \quad & \lambda (t) =  y^T(t) A(t) x(t) 
\end{align}
$$

So calulate `derivative`:

$$
\begin{align}
\frac{d \lambda}{dt}
& = \frac{d y^T}{dt} A x(t) + y^T(t) \frac{d A} {dt} x(t) + y^T(t) A(t) \frac{d x}{dt} \newline
& = (\frac{d y^T}{dt} A x(t) + y^T(t) A(t) \frac{d x}{dt} ) + y^T(t) \frac{d A} {dt} x(t) \newline
& = \lambda (t) (\frac{d y^T}{dt} x(t) + y^T(t)\frac{d x}{dt}) + y^T(t) \frac{d A} {dt} x(t) \newline
& = 0 + y^T(t) \frac{d A} {dt} x(t) \newline
& = y^T(t) \frac{d A} {dt} x(t) \newline
\end{align}
$$

## Derivative of $ \sigma $

$
\mathcal{
    \frac{d(\sigma)}{d(t)} = 
}
$


