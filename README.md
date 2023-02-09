# Take a ten minutes walk

## Kata problem

You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).

- Link: https://www.codewars.com/kata/54da539698b8a2ad76000228

## Brainstorm

### Domain

- City
- Roads
- Appointment
- Walk
- Array of directions
- Directions letter
- Block

### Rules

- 1 minute per block
- The walk should have 10 minutes
- The walk should leave to the starting point

## Pomodoros

### Pomodoro #1

1. Setup ✅
2. Domain definition ✅
3. Testing empty directions array ✅
4. Create a function to check if the direction return to the starting point ✅
5. Testing `returnToStart` with just one direction ✅

### Pomodoro #2

6. Testing `returnToStart` with two opposite vertical directions ✅
7. Testing `returnToStart` with one vertical and one horizontal direction ✅
8. Testing `returnToStart` with two opposite horizontal directions ✅
9. Refactoring: Creating `getOppositeDirection` function ✅

### Pomodoro #3

10. Testing `returnToStart` with two pair of opposite direction ✅
11. Testing `returnToStart` with tow same directions and tow oppossite direction ✅
12. Refactoring: Create `countBlockPerDirection` function ✅
13. Testing a valid walk with 5 `n` blocks and 5 `s` blocks 🚧

### Pomodoro #4

13. Testing a valid walk with 5 `w` blocks and 5 `e` blocks ✅
14. Testing walk shorter than 10 minutes ✅

### Utility

**Labels**  
✅ done  
🚧 WIP  
❌ ERROR
