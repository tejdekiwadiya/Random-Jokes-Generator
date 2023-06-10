let jokes = [
  {
    "joke": "My plumber finally quit on me... He couldn't take any more of my crap."
  },
  {
    "joke": "My dog used to chase people on a bike a lot. It got so bad, finally I had to take his bike away."
  },
  {
    "joke": "How do you kill bread? Bake it for a little while, and it will be toast."
  },
  {
    "joke": "How do you think the unthinkable? With an itheburg."
  },
  {
    "joke": "What does batman take in his whiskey? Just ice."
  },
  {
    "joke": "Where do snowmen dance? At the snowball!"
  },
  {
    "joke": "A Siri joke!: Two iPhones walk into a bar carrying a set of iPod shuffles. The bartender says: Let those iPods sing, man! He was an iSurfer on iPad mini."
  },
  {
    "joke": "Charles Dickens walks into a bar... and orders a martini. The bartender asks \"olive 'er twist?\""
  },
  {
    "joke": "Why did the cookie go to the doctor? Because it felt crumbly."
  },
  {
    "joke": "What do you call a midget psychic that broke out of prison? A small medium at large!"
  },
  {
    "joke": "Why was the Egyptian kid confused? Because his daddy was a mummy"
  },
  {
    "joke": "What did the hot dogs name their child? Frank."
  },
  {
    "joke": "What is irony? Irony is when something has the chemical symbol Fe."
  },
  {
    "joke": "What form of radiation bakes you cookies? A gramma ray"
  },
  {
    "joke": "What do you do to dead chemists? You barium."
  },
  {
    "joke": "How many hipsters does it take to change a lightbulb? It's a really obscure number. You've probably never heard of it."
  },
  {
    "joke": "Did you hear about the fortune teller that had bad breath, calluses all over his body and couldn't win a fight? He was a Super Callused Fragile Mystic Hexed with halitosis."
  },
  {
    "joke": "I invented a time machine... next week."
  },
  {
    "joke": "A man was caught stealing in a supermarket today while balanced on the shoulders of a couple of vampires. He was charged with shoplifting on two counts."
  },
  {
    "joke": "What's a balloon's favorite genre of music? Pop."
  },
  {
    "joke": "There were two snowmen standing in a field, one says to the other... Can you smell Carrots?"
  },
  {
    "joke": "Why was 9 afraid of 20? 28 29's"
  },
  {
    "joke": "What is tuba plus tuba? Fourba!"
  },
  {
    "joke": "What did the 8 say to the 0? Hey, fatty"
  },
  {
    "joke": "What happens when a spoon and fork get into a fight? civilwar"
  },
  {
    "joke": "Why are locomotive drivers so good at driving locomotives? Because they were trained."
  },
  {
    "joke": "A broom only likes one brand of comedy. Dustpan."
  },
  {
    "joke": "Why did the fox cross the road? It was chasing after the chicken!"
  },
  {
    "joke": "By shear coincidence... ...all these sheep look the same..."
  },
  {
    "joke": "My teacher's nickname in school is Flush. He always has the same suit."
  }
]

let rndm = Math.floor(Math.random() * jokes.length)
document.querySelector(".rdmjokes").innerHTML = jokes[rndm].joke

function reload(){
  window.location.reload()
}
