function clean(item){
  console.log(`I just cleaned a ${item}`);
}

var nails = ['rusty nails','rusty nails','bent nails','clean nail'];

/*for (var i = 0; i < nails.length; i++){
  clean(nails[i]);
}*/

var planks = ['splintered plank', 'straight plank', 'bent plank'];

function groupAndClean(items, cleaningMethod, done) {
  for (var i = 0; i < items.length; i++) {
    cleaningMethod(items[i])
  }
 
  done()
}

groupAndClean(nails.concat(planks), clean, function(){
  console.log('Whew, that was a lot of work!');
})
