```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrectly using the count state in a setTimeout function 
    // The count value used in the setTimeout will be the value at the time the effect runs, not the updated value
    const timer = setTimeout(() => {
      console.log('Count after 1 second:', count); 
    }, 1000);

    return () => clearTimeout(timer);
  }, [count]); //Adding count to dependency array does not solve the problem

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```