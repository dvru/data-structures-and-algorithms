//Algorithms: Searching + BFS + DFS

var beasts = ['Centaur', 'Godzilla', 'Mosura', 'Minotaur', 'Hydra', 'Nessie'];

beasts.indexOf('Godzilla'); // 1

beasts.findIndex(function(item){  // 1
  return item === 'Godzilla';
});

beasts.find(function(item){     // 'Godzila'
  return item === 'Godzilla';
})

beasts.includes('Godzilla')    // true

