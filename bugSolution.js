```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      // Use a functional update to get the latest count value
      console.log('Count after 1 second:', () => count); 
    }, 1000);

    return () => clearTimeout(timer);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```