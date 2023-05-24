function ensure(value) {
  try {
    if (typeof value === 'undefined' || value === '') {
      throw new Error('Argument is empty or undefined');
    }
    return value;
  } catch (error) {
    console.error(error);
    // Or you can re-throw the error to propagate it further
    // throw error;
  }
}