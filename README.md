## Hooks performance test

Here is an example of how hooks can cause performance problems.

This demo was modelled off a real world performance issue I was tasked to solve where we had special URL qualification logic that took a long time as our app was writing out hrefs to link tags.

## Run as hook

```
yarn start-hooks
```

Click on a blue square

Notice clicks take roughly 940-1090ms to propagate

<img src="hooks.png" />

## Run as class

```
yarn start-class
```

Click on a blue square

Notice clicks take roughly 220-320ms to propagate

<img src="class.png" />
