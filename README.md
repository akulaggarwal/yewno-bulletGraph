This project was created off of React Create App, the original Readme has been preserved in file "React Create App README.md."

This repo has a basic bullet graph (https://en.wikipedia.org/wiki/Bullet_graph) built on the React framework.
To view deployed version, please visit http://akulaggarwal.github.io/yewno-bulletGraph.
It is build purely with JS, JSX, HTML, and CSS.

Files written by this author:
BulletGraph.js
BulletAxis.js
Tick.js
data.js

For your own use, simply import BulletGraph.js, and make sure BulletAxis.js and Tick.js are in the same folder directory. The data.js file is dummy data, it can be substituted for any JSON formattted data, with following fields required:
actualPerformance, (positive number)
target, (positive number)
poor, (positive number)
good, (positive number)
max, (positive number)
title, (string)
axisLabel, (string)
graphWidth, (string ending in percent symbol, i.e. "80%")
divisions (positive integer)

When initializing the component, simply use (<BulletGraph data={data1} />), where "data1" is desired JSON data with above listed parameters.

Possible future implementations:
- give user ability to dynamically change graph from view
- change color scheme, or allow user to select color for gradient
- allow choice between horizontal and vertical
- allow user to make custom fields for specific instance
