# Evidence Lower Bound

Evidence Lower Bound (ELBO) measures log-likelihood of two probability distribution, which says:

$$
\log(P(x)) \geq \mathbb{E} \begin{bmatrix}
\frac{p(x, z)}{p(z|x)}
\end{bmatrix}
$$

The formula is extracted from featuring join probability of two distribution $ p(x) $ and $ q(x) $

Given the prior and the latent space $ x, z $. Based on [marginal likelihood](https://en.wikipedia.org/wiki/Marginal_likelihood) we have the following formula:

$$
p(x) = \int{p(x, z) dz} \quad (1)
$$


According to Bayesian Statistics:

- The likelihood: $ f(x | \theta) $
- The prior: 

$$
\begin{align*}
\log {p(x)} & = \log {p(x)} \int q(x, z) dz  & \text{(Apply Equation 1)} \newline
          & = \int q(x, z) \log {p(x)} dz & \text{(Equation 2)} \newline
\end{align*}
$$

