export const formatTimestamp = (timestamp: number | string): string => {
    const date = new Date(typeof timestamp === 'string' ? parseInt(timestamp) : timestamp);
    
    // Use UTC methods to ensure consistent results between server and client
    const year = date.getUTCFullYear();
    const month = String(date.getUTCMonth() + 1).padStart(2, '0'); // +1 vì getMonth() bắt đầu từ 0
    const day = String(date.getUTCDate()).padStart(2, '0');
    const hours = String(date.getUTCHours()).padStart(2, '0');
    const minutes = String(date.getUTCMinutes()).padStart(2, '0');
  
    return `${year}.${month}.${day} - ${hours}:${minutes}`;
};