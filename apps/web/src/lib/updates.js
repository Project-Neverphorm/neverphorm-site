
  
  // Sorts newest-first by date so Home/Updates never have to think about order
  export function getSortedUpdates() {
    return [...updates].sort((a, b) => new Date(b.date) - new Date(a.date));
  }