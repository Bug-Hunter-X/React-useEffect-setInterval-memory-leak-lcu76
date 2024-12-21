```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrectly setting the interval inside the useEffect dependency array
    const intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    // Missing cleanup function to clear the interval
    return () => clearInterval(intervalId);
  }, []); // The empty dependency array causes the interval to run only once at the start 

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}
```