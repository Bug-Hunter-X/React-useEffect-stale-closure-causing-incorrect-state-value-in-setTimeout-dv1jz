# React useEffect Stale Closure Bug

This repository demonstrates a common issue in React's `useEffect` hook: using stale closure values within functions like `setTimeout` or asynchronous operations.

The `bug.js` file contains the buggy code where the count value inside the `setTimeout` callback is not updated as expected.  The `bugSolution.js` file provides a solution to this problem.

## Problem
The problem lies in how closures work in JavaScript. When the `useEffect` is initially called, it creates a closure over the `count` variable.  Subsequent updates to `count` don't change the value captured in that closure. The `setTimeout` uses this initial, stale value, not the most current one.

## Solution
The solution uses functional updates to ensure that `setTimeout` uses the current state value. Instead of directly using `count`, a function is passed into `setTimeout`.  This ensures the `count` variable is always the most up-to-date value when executed.