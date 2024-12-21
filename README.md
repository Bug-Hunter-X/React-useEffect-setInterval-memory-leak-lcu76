# React useEffect setInterval Memory Leak
This repository demonstrates a common mistake when using the `setInterval` function within a React `useEffect` hook and how to fix it.

## Problem
The provided code snippet uses `setInterval` inside a `useEffect` hook with an empty dependency array. This means that the interval is set only once when the component mounts, and it never gets cleared. This results in a memory leak, as the interval continues to run even after the component unmounts.

## Solution
To solve this issue, we need to provide a cleanup function within the `useEffect` hook. This cleanup function should clear the interval using `clearInterval`. This function is executed when the component unmounts or when the dependencies change.

## How to run
Clone the repository and run `npm install` to install dependencies. Then, run `npm start` to start the development server.