#include <iostream>

class ID
{
	public:
		char chars[10];
		int integer;
};

int main()
{
		ID id;
		id.integer = 10;

		int *p = reinterpret_cast<int*>(&id);
		std::cout << *p << std::endl;
}
