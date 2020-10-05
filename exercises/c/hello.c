#include <stdio.h>

int add3(int a, int b, int c){
  int result = a + b + c;
  return result;
}

int main() {
  int mynumber = 0;
  int other;
  float arealnumber = 4.5;
  int result;

  mynumber = 24;
  other = 17;
  result = mynumber + other;

  printf("Hello World %i %i %i %f\n", mynumber, other, result, arealnumber);
  printf("add3 = %i\n",add3(3,67,42));
}
