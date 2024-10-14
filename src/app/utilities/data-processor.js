export class DataProcessor {
    // Main function to process the data
    static processData(data, operation, field, check_field, check_value) {
      if (!Array.isArray(data)) {
        throw new Error('Data must be an array');
      }
  
      // If check_field is not provided, use the full data set
      const filteredData = check_field ? data.filter(obj => obj[check_field] === check_value) : data;
  
      switch (operation.toUpperCase()) {
        case 'SUM':
          return filteredData.reduce((acc, obj) => acc + (parseFloat(obj[field]) || 0), 0);
        
        case 'COUNT':
          return filteredData.length;
        
        case 'MIN':
          return Math.min(...filteredData.map(obj => parseFloat(obj[field]) || Infinity));
        
        case 'MAX':
          return Math.max(...filteredData.map(obj => parseFloat(obj[field]) || -Infinity));
        
        case 'AVG':
          const sum = filteredData.reduce((acc, obj) => acc + (parseFloat(obj[field]) || 0), 0);
          return sum / filteredData.length;
        
        case 'UNIQUE':
          return [...new Set(filteredData.map(obj => obj[field]))];
        
        case 'CONCAT':
          return filteredData.map(obj => obj[field]).join(',');  // Concatenation without space after comma
        
        default:
          throw new Error(`Operation "${operation}" is not supported.`);
      }
    }
  }
  