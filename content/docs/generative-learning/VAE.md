# Variational Autoencoder / Decoder

## What is it?

`VAE` is a neural network model that maps input to hidden space that represent meaning from `Guassian distribution`.

## Loss function

There are two loss function which aims for two different things:

- **Generative loss**: the loss function that measures quality of converting from latent space back to inputs.
- **Latent loss**: the loss function that measures how it's fit in standard normal distribution.

One good tutorial is from https://www.youtube.com/watch?v=IXsA5Rpp25w. It shows evidence of using Evidence Low bound (ELBO) as loss function to explain the two types of loss. In there, `Generative loss` is the `variational autoencoder` term and `latent loss` is the `expectation maximization` term.

## What is marginal distribution

Reference: https://www.khanacademy.org/math/ap-statistics/analyzing-categorical-ap/distributions-two-way-tables/v/marginal-distribution-and-conditional-distribution

`marginall distribution` is conditional distribution on probability between two random variables.

## Reference:

- [Convolutional Variational Autoencoder](https://www.tensorflow.org/tutorials/generative/cvae)