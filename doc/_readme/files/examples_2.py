class Animal:
    def __init__(self, name: str):
        self.name = name

    def move(self, distance_in_meters: int = 0):
        print(f"{self.name} moved {distance_in_meters}m.")

class Raven(Animal):
    def __init__(self, name: str):
        super().__init__(name)

    def move(self, distance_in_meters: int = 100):
        print("Playing around...")
        super().move(distance_in_meters)

# Example Usage:
my_raven = Raven("Nevermore")
my_raven.move() # Output: Playing around... Nevermore moved 100m.
