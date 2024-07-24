import tkinter as tk
from tkinter import messagebox
import random

class CardCounterApp:
    def __init__(self, master):
        self.master = master
        self.master.title("Card Counter")
        
        # Initialize decks
        self.deck = [f"Hero {i+1}" for i in range(13)]
        self.discard_pile = []
        self.hand = random.sample(self.deck, 6)
        for card in self.hand:
            self.deck.remove(card)
        
        # Create GUI elements
        self.hand_label = tk.Label(master, text="Hand: " + ", ".join(self.hand))
        self.hand_label.pack()
        
        self.discard_label = tk.Label(master, text="Discard Pile: " + ", ".join(self.discard_pile))
        self.discard_label.pack()
        
        self.play_button = tk.Button(master, text="Play Round", command=self.play_round)
        self.play_button.pack()
        
        self.reset_button = tk.Button(master, text="Reset", command=self.reset_game)
        self.reset_button.pack()
        
    def play_round(self):
        if len(self.deck) < 3:
            self.deck.extend(self.discard_pile)
            self.discard_pile = []
            random.shuffle(self.deck)
        
        played_cards = random.sample(self.hand, 3)
        self.hand = [card for card in self.hand if card not in played_cards]
        self.discard_pile.extend(played_cards)
        self.hand.extend(random.sample(self.deck, 3))
        
        for card in self.hand[-3:]:
            self.deck.remove(card)
        
        self.update_labels()
        
    def update_labels(self):
        self.hand_label.config(text="Hand: " + ", ".join(self.hand))
        self.discard_label.config(text="Discard Pile: " + ", ".join(self.discard_pile))
        
    def reset_game(self):
        self.deck = [f"Hero {i+1}" for i in range(13)]
        self.discard_pile = []
        self.hand = random.sample(self.deck, 6)
        for card in self.hand:
            self.deck.remove(card)
        self.update_labels()

root = tk.Tk()
app = CardCounterApp(root)
root.mainloop()
