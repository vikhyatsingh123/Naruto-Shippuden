#include <iostream>

int main() {
    int a = 5, b = 10;

    std::cout << "Before swapping:" << std::endl;
    std::cout << "a = " << a << ", b = " << b << std::endl;

    a = a ^ b;
    b = a ^ b;
    a = a ^ b;

    std::cout << "After swapping:" << std::endl;
    std::cout << "a = " << a << ", b = " << b << std::endl;

    return 0;
}
