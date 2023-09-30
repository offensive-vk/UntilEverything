import random

class Player:
    def __init__(self, name):
        self.name = name
        self.score = 0

    def choose(self):
        choice = input(f"{self.name}, please choose (rock/paper/scissors): ")
        return choice.lower()

class Game:
    def __init__(self, player1, player2):
        self.player1 = player1
        self.player2 = player2

    def play_round(self):
        choice1 = self.player1.choose()
        choice2 = self.player2.choose()

        print(f"{self.player1.name} chose {choice1}")
        print(f"{self.player2.name} chose {choice2}")

        if choice1 == choice2:
            print("It's a tie!")
        elif (choice1 == "rock" and choice2 == "scissors") or \
             (choice1 == "paper" and choice2 == "rock") or \
             (choice1 == "scissors" and choice2 == "paper"):
            print(f"{self.player1.name} wins!")
            self.player1.score += 1
        else:
            print(f"{self.player2.name} wins!")
            self.player2.score += 1

    def play_game(self):
        num_rounds = 3

        for round in range(num_rounds):
            print(f"\nRound {round + 1}:")
            self.play_round()

        print("\nGame over!")
        print(f"{self.player1.name} scored {self.player1.score} points.")
        print(f"{self.player2.name} scored {self.player2.score} points.")

        if self.player1.score > self.player2.score:
            print(f"{self.player1.name} wins the game!")
        elif self.player1.score < self.player2.score:
            print(f"{self.player2.name} wins the game!")
        else:
            print("It's a tie!")

# Create two players
player1 = Player("Player 1")
player2 = Player("Player 2")

# Create a game instance
game = Game(player1, player2)

# Play the game
game.play_game()
