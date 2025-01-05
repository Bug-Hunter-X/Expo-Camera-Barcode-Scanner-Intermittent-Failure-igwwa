The issue might be related to the timing of the barcode recognition. Adding a small delay before processing the barcode data might help. Here's a modified version of the `onBarCodeScanned` function:
```javascript
  onBarCodeScanned = async ({ type, data }) => {
    if (data) {
      await new Promise(resolve => setTimeout(resolve, 100)); // Add a 100ms delay
      // Process the scanned barcode data here
      console.log('Barcode:', data);
    }
  };
```
This approach introduces a 100ms delay using `setTimeout`. You can adjust this delay value as needed.  This isn't a perfect solution but a workaround to reduce occurrences of the issue.  Further investigation is crucial to understand the root cause.