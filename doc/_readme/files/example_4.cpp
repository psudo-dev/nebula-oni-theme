#include <iostream>
#include <string>

class Animal {
public:
    std::string name;

    Animal(std::string theName) : name(theName) {}
    virtual void move(int distanceInMeters = 0) {
        std::cout << name << " moved " << distanceInMeters << "m." << std::endl;
    }
};

class Raven : public Animal {
public:
    Raven(std::string name) : Animal(name) {}
    void move(int distanceInMeters = 100) override {
        std::cout << "Playing around..." << std::endl;
        Animal::move(distanceInMeters);
    }
};

int main() {
    Raven bird("Edgar");
    bird.move();
    return 0;
}
