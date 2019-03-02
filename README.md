## Hooks performance test

Here is an example of how hooks can cause performance problems.

This demo was modelled off a real world performance issue I was tasked to solve where we had special URL qualification logic that took a long time as our app was writing out special hrefs to link tags. In the end we moved where the heavy work was done which solved the problem but I find it makes for a good example of how people can accidentally land in performance problems.

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
