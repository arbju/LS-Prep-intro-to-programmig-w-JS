return foo() ? 'bar' : qux();

// can be refactored to:
if (foo()) {
  return 'bar';
} else { 
  return qux();
}
