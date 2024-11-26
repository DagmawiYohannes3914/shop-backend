const toBoolean = (value: unknown) => {
  switch (value) {
    case null:
      return 'Failure';
    
    case 'true':
      return true;
    
    case 'false':
      return false;

    default:
      return value;
  }
}