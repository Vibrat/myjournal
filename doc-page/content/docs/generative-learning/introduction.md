# Generative Learning

## Definition

Generative learning is a type of machine learning that predicts the probability of events without knowing the expected output.

Given a sample $x$, generative learning can be formulated as $P(x)$, with its outputs as a list of possibilities from which we can choose the best solution.

I think it's very similar to the concept of beta distribution, where we can choose the best values of observations.

{{<plotly id="chart-1" data="/docs/generative-learning/beta-distribution.json">}}

Generative learning is different from discriminative learning in that it does not require the label (expected output) to be fed:

- In discriminative learning, given label $y$ and observation $x$, it generates the probability $P(y|x)$.
- In generative learning, given observations $x$, it generates a list of probabilities and expected output so that we can choose the best scenarios $P(x)$.

## Concept

### Sample Space

A `sample space` is all possible outcomes of observations.

### Probability Density Function

A `probability density function` is a function that maps from observation $x$ to the `sample space`.

### Encoder & decoder

An `encoder` is a fundamental layer in generative learning which transforms human-readable data into machine-readable data for training. The intuition is that, just as humans need vocabularies to communicate, the machine also needs these vocabularies to extract meaning by itself.

A `decoder` is just another layer that converts the machine's vocabularies into human vocabularies. Think of it as the opposite operation of `encoder`. Both often stays together in a machine learning model to support converting input/output back and forth.

One basic `encoder/decoder` is called `one hot encoder/decoder`. Suppose we have a list of ten labels from `1, 2, 3`. The `encoder` converts the label into `3 vectors` as:

- $\vec{v_0} = \begin{pmatrix} 1 & 0 & 0 \end{pmatrix}$
- $\vec{v_1} = \begin{pmatrix} 0 & 1 & 0 \end{pmatrix}$
- $\vec{v_9} = \begin{pmatrix} 0 & 0 & 1 \end{pmatrix}$

One hot encoder example:

```python
def one_hot_encoder(labels):
    encoded_labels = []
    labels_length = len(labels)
    for i in range(labels_length):
        encoded_labels.append([0] * labels_length)
        encoded_labels[i][i] = 1
        
    return encoded_labels

labels = [1, 2, 3]
one_hot_encoder(labels)
"""Return: [[1, 0, 0], [0, 1, 0], [0, 0, 1]]""
```

The decoder does the opposite side, converting encoded data to single label.

```python
def one_hot_decoder(label, vocabularies):
    index = 0
    for i in label:
        if i == 1:
            return labels[index]
        index += 1

label = [0, 1, 0]
vocabularies = [1, 2, 3]
one_hot_decoder(label, vocabularies=vocabularies)
"""Return 2"""
```
