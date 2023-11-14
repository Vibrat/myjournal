# MyJournal

How to build: `hugo -D --minify --theme book -d ./docs`
How to start: `hugo server --minify --theme book`

## Adding SEO content

```
title: "Example Site"
images: ["/docs/hugo.png"]
description: "Meta Content for first page"
```

## Meta

Facebook post share image: 1200 x 630 with min 600 x 315 in `px`


## Getting plotly image

```python
from plotly.io import write_image
#... Generate the fig here.
fig.write_json("plot_name.json")
```